import React, { PureComponent } from 'react';
import { Button, Form } from 'semantic-ui-react';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import hljs from 'highlight.js';
import 'simplemde/dist/simplemde.min.css';
import './simplemde.less';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import { notification, Modal, Skeleton } from 'antd';
import { connect } from 'dva';
import { getCookie } from '@/utils/cookie';
import inlineAttachment from '@/selfplugins/inlineAttachment';
import NotFound from './404';
// hljs.initHighlightingOnLoad();

@connect(({ posts }) => ({
  posts,
}))
class Editor extends PureComponent {
  state = {
    title: '',
    content: '',
    currUser: {},
    btnStatus: false,
    delModVisi: false,
    delBtnStatus: false,
    authorized: false,
    loading: true,
  };

  constructor(props) {
    super(props);
    this.smde = null;
  }

  componentDidMount() {
    const { dispatch, match } = this.props;

    const postSlug = match.params.slug;

    const currUser = JSON.parse(getCookie('user'));

    this.setState({
      currUser,
    });

    dispatch({
      type: 'posts/fetch',
      payload: { slug: postSlug },
      callback: res => {
        if (res.status === 10000)
          if (this.state.currUser.username === res.data.users.username) {
            this.setState({
              authorized: true,
              title: res.data.title,
              content: res.data.content,
              loading: false,
            });

            document
              .getElementById('markdownEditor')
              .parentNode // 获取编辑器container
              .addEventListener('click', e => e.stopPropagation());
            this.createSimpleMde();
          }
      },
    });
  }

  createSimpleMde = () => {
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
      autosave: false,
      initialValue: this.state.content,
      indentWithTabs: false,
      placeholder: '## 输入内容...',
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
    // SimpleMDE.toggleSideBySide(this.smde);
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
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { dispatch, match } = this.props;
    const { title } = this.state;
    // localStorage 存储的是 md，需要用 marked 重新转一下才有预览的 html 值
    const content = this.smde.value();
    const htmlContent = this.smde.markdown(content);
    const { slug } = match.params;
    const params = { title, content, htmlContent, slug };

    this.setState({
      btnStatus: true,
    });
    dispatch({
      type: 'posts/update',
      payload: { ...params },
      callback: response => {
        if (response.status === 10000) {
          notification.success({
            message: response.info,
            duration: 2,
            onClose: () => {
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

  toggleDelModal = () => {
    this.setState({
      delModVisi: !this.state.delModVisi,
    });
  };

  comfirmDelModal = () => {
    const { dispatch, match } = this.props;
    const { slug } = match.params;
    this.setState({
      delBtnStatus: true,
    });
    dispatch({
      type: 'posts/delete',
      payload: {
        slug,
      },
      callback: res => {
        if (res.status === 10000) {
          notification.success({
            message: res.info,
            duration: 2,
            onClose: () => {
              window.location.href = '/block';
            },
          });
        } else {
          this.setState({
            delBtnStatus: false,
          });
        }
      },
    });
    this.toggleDelModal();
  };

  render() {
    const { title, btnStatus, delBtnStatus, authorized, loading } = this.state;

    return (
      <Skeleton loading={loading}>
        {authorized ? (
          <Form size="large">
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
            <Modal
              visible={this.state.delModVisi}
              onOk={this.comfirmDelModal}
              onCancel={this.toggleDelModal}
              okType="danger"
              okText="确认"
              cancelText="取消"
            >
              <p>{`您确认删除文章 《${title}》 么？`}</p>
            </Modal>
            <Button
              color="twitter"
              size="small"
              loading={btnStatus}
              disabled={btnStatus}
              type="submit"
              onClick={this.handleSubmit}
            >
              提交
            </Button>
            <Button
              color="google plus"
              size="small"
              loading={delBtnStatus}
              disabled={delBtnStatus}
              onClick={this.toggleDelModal}
            >
              删除
            </Button>
          </Form>
        ) : (
          <NotFound />
        )}
      </Skeleton>
    );
  }
}

export default Editor;
