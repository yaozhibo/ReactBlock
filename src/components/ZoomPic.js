import React, { PureComponent } from 'react';

import { Image } from 'semantic-ui-react';

import { Modal } from 'antd';

class ZoomPic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      areaId: null,
      picModalVisible: false,
      picModalSrc: null,
    };
  }

  componentWillMount() {
    const areaId = this.randomWord(false, 32);
    this.setState({
      areaId,
    });
  }

  componentDidMount() {
    const postDiv = document.getElementById(`ZoomPicArea_${this.state.areaId}`);

    if (postDiv !== null) {
      const img = postDiv.getElementsByTagName('img');
      for (var el of img) {
        el.addEventListener('click', e => this.zoomPic(e));
      }
    }
  }

  randomWord = (randomFlag, min, max) => {
    var str = '',
      range = min,
      arr = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ];

    // 随机产生
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
      var pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }
    return str;
  };

  zoomPic = e => {
    e.stopPropagation();
    this.setState({
      picModalVisible: true,
      picModalSrc: e.target.src,
    });
  };

  closePicModal = () => {
    this.setState({
      picModalVisible: false,
    });
  };

  render() {
    const { areaId } = this.state;
    return (
      <div id={`ZoomPicArea_${areaId}`}>
        {this.props.children}
        <Modal
          centered
          visible={this.state.picModalVisible}
          onCancel={() => this.closePicModal()}
          closable={true}
          width={'auto'}
          style={{ maxWidth: '80%' }}
          footer={null}
        >
          <Image src={this.state.picModalSrc} />
        </Modal>
      </div>
    );
  }
}

export default ZoomPic;
