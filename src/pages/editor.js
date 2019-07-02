import React, { PureComponent } from 'react';
import { Button, Form } from 'semantic-ui-react';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import hljs from 'highlight.js';
import 'simplemde/dist/simplemde.min.css';
import './simplemde.less';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import { notification } from 'antd';
import { connect } from 'dva';
import inlineAttachment from '@/selfplugins/inlineAttachment';
import { getCookie } from '@/utils/cookie';

@connect(({ posts }) => ({
  posts,
}))
class Editor extends PureComponent {
  state = {
    title: '',
    btnStatus: false,
  };
  constructor(props) {
    super(props);
    this.smde = null;
  }

  componentDidMount() {
    // 编辑器内容点击不弹文字
    document
      .getElementById('markdownEditor')
      .parentNode // 获取编辑器container
      .addEventListener('click', e => e.stopPropagation());
    this.smde = new SimpleMDE({
      toolbar: [
        'bold',
        'italic',
        'heading',
        '|',
        'quote',
        'code',
        'image',
        'link',
        'table',
        'preview',
        'fullscreen',
        'side-by-side',
        'guide',
      ],
      element: document.getElementById('markdownEditor').childElementCount,
      autofocus: true,
      autosave: {
        enabled: true,
        uniqueId: 'postEditor',
        delay: 1000,
      },
      initialValue: '',
      indentWithTabs: false,
      placeholder: '## 输入内容...✨🐢🚀✨',
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
      },
      insertTexts: {
        horizontalRule: ['', '\n\n-----\n\n'],
        image: ['![](http://', ')'],
        link: ['[', '](http://)'],
        table: [
          '',
          '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n',
        ],
      },
      previewRender: function(plainText) {
        // Returns HTML from a custom parser, Async method
        const content = marked(plainText, {
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return hljs.highlight(lang, str).value;
              } catch (err) {}
            }
            try {
              str = hljs.highlightAuto(str).value;
              return str;
            } catch (err) {}
            return ''; // use external default escaping
          },
        });
        return content;
      },
      spellChecker: false,
      styleSelectedText: false,
    });

    //上传文件
    inlineAttachment.editors.codemirror4.attach(this.smde.codemirror, {
      uploadUrl: '/api/post/upload',
      progressText: '![正在上传...]()',
      urlText: '![]({filename})',
      errorText: '上传文件失败',
      jsonFieldName: 'img',
      uploadFieldName: 'img',
      extraParams: {
        asd: 'asdas',
      },
      extraHeaders: {
        Key: '6c0d64c70a5df6bee51088964d7894e0',
        Accept: 'application/vnd.YiDong.v2+json',
        AppSession: getCookie('yjyd_app_session'),
      },
    });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { title } = this.state;
    // localStorage 存储的是 md，需要用 marked 重新转一下才有预览的 html 值
    const content = this.smde.value();
    const htmlContent = this.smde.markdown(content);
    const params = { title, content, htmlContent };

    this.setState({
      btnStatus: true,
    });
    dispatch({
      type: 'posts/create',
      payload: { ...params },
      callback: response => {
        if (response.status === 10000) {
          notification.success({
            message: response.info,
            duration: 2,
            onClose: () => {
              this.setState({
                title: '',
              });
              this.smde.value('');
              this.smde.clearAutosavedValue();
              window.location.href = '/block';
            },
          });
        } else {
          this.setState({
            btnStatus: false,
          });
        }
      },
    });
  };

  render() {
    const { title, btnStatus } = this.state;
    return (
      <Form size="large" onSubmit={this.handleSubmit}>
        <Form.Input
          name="title"
          fluid
          placeholder="## 输入标题"
          onChange={this.handleChange}
          value={title}
        />
        <div id="editorContaienr">
          <textarea id="markdownEditor" name="content" />
        </div>
        <Button color="twitter" size="small" loading={btnStatus} disabled={btnStatus} type="submit">
          提交
        </Button>
      </Form>
    );
  }
}

export default Editor;
