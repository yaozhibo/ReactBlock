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

  constructor() {
    super()
    const { query } = this.props.location
    const { slug, category } = query
    const params = { slug, category }
    const { dispatch } = this.props

    this.toggleDataDivStateAndSpinState(true)
    dispatch({
      type: 'articles/fetch',
      payload: { ...params },
      callback: (article) => {
        this.shareToWechat(article)
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

  shareToWechat = (article) => {
    const { dispatch } = this.props
    dispatch({
      type: 'articles/fetchWeChatJsSdkConfig',
      payload: { url: window.location.href },
      callback: function (wechatjsconfig) {
        if (wechatjsconfig) {
          window.wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx68baa53e9882bd66', // 必填，公众号的唯一标识
            timestamp: wechatjsconfig.timestamp, // 必填，生成签名的时间戳
            nonceStr: wechatjsconfig.nonceStr, // 必填，生成签名的随机串
            signature: wechatjsconfig.signature,// 必填，签名
            jsApiList: wechatjsconfig.jsApiList // 必填，需要使用的JS接口列表
          })

          window.wx.ready(function () {
            window.wx.updateTimelineShareData({
              title: article.title, // 分享标题
              link: wechatjsconfig.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://data.gmcczq.com/pic_3.jpg', // 分享图标
              success: function () {
                // 设置成功
                console.info('wechat share configed')
              }
            })
          })
          window.wx.error(function (res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            console.info(res)
          });
        }

      },
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
