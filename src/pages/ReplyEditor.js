import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import BraftEditor from 'braft-editor';
import { notification } from 'antd';
import { connect } from 'dva';

@connect(({ replies, comments }) => ({
  replies,
  comments,
}))
class ReplyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyObj: props.replyObj,
      editorState: BraftEditor.createEditorState(`<a>@${props.replyObj.to_nickname} </a>`),
      subReplyBtnStatus: false,
      outputHTML: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      editorState: BraftEditor.createEditorState(`<a>@${nextProps.replyObj.to_nickname} </a>`),
    });
  }

  scrollToAnchor = anchorId => {
    if (anchorId) {
      // 找到锚点 id
      let anchorElement = document.getElementById(anchorId);
      if (anchorElement) {
        // 如果对应id的锚点存在，就跳转到锚点
        anchorElement.scrollIntoView();
      }
    }
  };
  componentDidMount() {
    this.scrollToAnchor('ReplyAnchor');
  }
  // 回复框改变事件
  handleEditorChange = editorState => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML(),
    });
  };

  // 回复框提交事件
  handleEditorSubmit = () => {
    const { dispatch, replyObj, commentKey, handleReplyStateWithCreate } = this.props;
    const content = this.state.outputHTML;
    // 回复数据表中 type: 1 代表 comment, 2 代表 reply
    this.setState({
      subReplyBtnStatus: true,
    });
    dispatch({
      type: 'replies/create',
      payload: {
        content,
        ...replyObj,
      },
      callback: response => {
        if (response.status === 10000) {
          notification.success({
            message: '提交成功',
          });
          this.setState({
            outputHTML: null,
            editorState: BraftEditor.createEditorState(null),
          });
          handleReplyStateWithCreate(response.data, commentKey);
        }
        this.setState({
          subReplyBtnStatus: false,
        });
      },
    });
  };

  render() {
    const { editorState } = this.state;
    const BraftControls = ['emoji', 'code', 'link', 'text-color'];

    return (
      <div id="ReplyAnchor">
        <Segment>
          <Form size="small" onSubmit={this.handleEditorSubmit}>
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange}
              onSave={this.handleEditorSubmit}
              controls={BraftControls}
              contentStyle={{ height: '150px' }}
            />

            <Button
              content="提交"
              labelPosition="left"
              icon="edit"
              size="mini"
              loading={this.state.subReplyBtnStatus}
              disabled={this.state.subReplyBtnStatus}
            />
          </Form>
        </Segment>
      </div>
    );
  }
}

export default ReplyEditor;
