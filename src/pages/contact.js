import { Row, Col } from 'antd'
import styles from './index.css'

const contact = () => {
  return (
    <div className={styles.contact}>
      <Row>
        <img src={require('@/assets/image/contact.jpg')} style={{ width: '100%' }} alt="" />
      </Row>
      <Row type="flex" justify="center" gutter="200" className={styles.normal}>
        <Col lg="8">
          <Row type="flex" justify="center" align="middle" gutter="20">
            <Col lg="2">
              <img src={require('@/assets/image/chat.png')} />
            </Col>
            <Col lg="6">
              <h2>售前服务</h2>
              <p>提供云服务产品咨询服务</p>
              <h3>联系电话: 138-2766-9692</h3>
            </Col>
          </Row>
        </Col>
        <Col lg="8">
          <Row type="flex" justify="center" align="middle" gutter="20">
            <Col lg="2">
              <img src={require('@/assets/image/phone.png')} />
            </Col>
            <Col lg="6">
              <h2>售后服务</h2>
              <p>提供 7*24 小时技术支持服务</p>
              <h3>工单服务: <a href="https://ecloud.10086.cn/op-console-global/subsystem?type=issue">工单提交系统</a></h3>
              <h3>服务热线: 4001810086</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default contact
