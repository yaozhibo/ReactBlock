import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { BackTop, Row, Skeleton } from 'antd'
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

  render() {
    const { articles: { article } } = this.props
    if (!article) {
      return (
        ResultDiv({ type: 'error', title: '无此内容', msg: '请确认输入...' })
      )
    }
    const { loadingSkeleton, dataDivState } = this.state

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
