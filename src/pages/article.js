import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { BackTop, Row, Skeleton, Badge } from 'antd'
import ResultDiv from '@/components/ResultDiv'
import Sider from '@/components/Sider'
import styles from '@/assets/css/markdown.css'

@connect(({ articles, loading }) => ({
  articles,
  loading: loading.models.articles,
}))

class article extends PureComponent {
  state = {
    loadingSkeleton: true,
    dataDivState: false,
  }

  componentDidMount() {
    const { query } = this.props.location
    const { slug, category } = query
    const params = { slug, category }
    const { dispatch } = this.props

    this.toggleDataDivStateAndSpinState(true)
    dispatch({
      type: 'articles/fetch',
      payload: { ...params },
      callback: () => {
        this.toggleDataDivStateAndSpinState(false)
      },
    })
  }

  toggleDataDivStateAndSpinState = (bool) => {
    this.setState({
      dataDivState: bool,
      loadingSkeleton: bool,
    })
  }

  shareToWechat = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'articles/fetchWeChatJsSdkConfig',
      payload: {},
    })
    const { articles: { wechatjsconfig } } = this.props
    // console.log(wechatjsconfig)
    window.wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx68baa53e9882bd6', // 必填，公众号的唯一标识
      timestamp: wechatjsconfig.timestamp, // 必填，生成签名的时间戳
      nonceStr: wechatjsconfig.nonceStr, // 必填，生成签名的随机串
      signature: wechatjsconfig.signature,// 必填，签名
      jsApiList: wechatjsconfig.jsApiList // 必填，需要使用的JS接口列表
    })

    window.globalShareDataWx = {
      title: 'test'
    }
    window.wx.ready(function () {
      window.wx.updateTimelineShareData({
        title: 'test', // 分享标题
        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        success: function () {
          // 设置成功
          console.info('share success')
        }
      })
    })
  }

  render() {
    const { articles: { article } } = this.props

    if (!article) {
      return (
        ResultDiv({ type: 'error', title: '无此内容', msg: '请确认输入...' })
      )
    }
    const { loadingSkeleton, dataDivState } = this.state
    const categories = article.categories ? article.categories : []
    return (
      <div>
        <Skeleton loading={loadingSkeleton} active>

          <div hidden={dataDivState}>
            <Row type="flex" justify="center" style={{ padding: '4em 0' }}>
              <Sider relateArtc={article.relate_articles} />

              <Row style={{ width: '800px' }} className={styles.listContainer}>
                <div className={styles.markdown}>
                  <h2 className={styles.title}>{article.title}</h2>
                  <p className={styles.title}>{`作者：${article.author}`}</p>
                  <p className={styles.title}>
                    {categories.map(item => {
                      return (
                        <a href={`/category?name=${item}`}><Badge status="default" text={item} />&nbsp;</a>
                      )
                    })}
                  </p>
                  <p className={styles.title}>{`发布时间：${article.created_at}`}</p>
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                  <button type="primary" onClick={this.shareToWechat}>分享</button>
                  <BackTop />
                </div>
              </Row>
            </Row>
          </div>
        </Skeleton>
      </div>
    )
  }
}

export default article
