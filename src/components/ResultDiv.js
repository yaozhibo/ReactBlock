import React from 'react'
import { Result, Icon } from 'antd-mobile'

const myImg = src => <img src={src} className="spe am-icon am-icon-lg" alt="" />

const ResultDiv = (resultObj) => {
  if (!(resultObj instanceof Object)) {
    console.warn('结果组件期望传入值为对象')
  }
  switch (resultObj.type) {
    case 'warn': return (
      <Result
        img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
        title={resultObj.title}
        message={resultObj.msg}
        style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}
      />
    )
    case 'success': return (
      <Result
        img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
        title={resultObj.title}
        message={resultObj.msg}
        style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}
      />
    )
    default:
      return (
        <Result
          img={<Icon type="cross-circle-o" className="spe am-icon am-icon-lg" style={{ fill: '#F13642' }} />}
          title={resultObj.title}
          message={resultObj.msg}
          style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}
        />
      )
  }
}


export default ResultDiv
