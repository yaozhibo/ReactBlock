import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Skeleton, Badge, Button, Icon } from 'antd';
import ResultDiv from '@/components/ResultDiv';
import Sider from '@/components/Sider';
import styles from '@/assets/css/markdown.css';
import ZoomPic from '@/components/ZoomPic';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

@connect(({ articles }) => ({
  articles,
}))
class article extends Component {
  state = {
    loadingSkeleton: true,
    article: {
      content: '',
      pagination: {
        prev: null,
        next: null,
      },
    },
  };

  componentDidMount() {
    const { query } = this.props.location;
    const { slug, category } = query;
    const params = { slug, category };
    const { dispatch } = this.props;

    dispatch({
      type: 'articles/fetch',
      payload: { ...params },
      callback: res => {
        if (res.status === 10000) {
          this.setState({
            loadingSkeleton: false,
            article: res.data,
          });
          document.title = `${res.data.title} --粒子空间`;
        }
      },
    });
  }

  render() {
    const { article } = this.state;

    const { loadingSkeleton } = this.state;
    const categories = article.categories ? article.categories : [];
    if (!article) {
      return ResultDiv({ type: 'error', title: '无此内容', msg: '请确认输入...' });
    }
    return (
      <div>
        <Skeleton loading={loadingSkeleton} active>
          <Row type="flex" justify="center">
            <Sider relateArtc={article.relate_articles} currSlug={article.slug} />

            <Row className={styles.listContainer}>
              <div className={styles.markdown}>
                <h2 className={styles.title}>{article.title}</h2>
                <p className={styles.title}>{`作者：${article.author}`}</p>
                <p className={styles.title}>
                  {categories.map(item => {
                    return (
                      <a href={`/category?name=${item}`} key={item}>
                        <Badge status="default" text={item} />
                        &nbsp;
                      </a>
                    );
                  })}
                </p>
                <p className={styles.title}>{`发布时间：${article.created_at}`}</p>
                <ZoomPic>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(article.content, {
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
                            } catch (err) {
                              console.warn(err);
                            }
                          }
                          try {
                            str = hljs.highlightAuto(str).value;
                            return str;
                          } catch (err) {
                            console.warn(err);
                          }
                          return ''; // use external default escaping
                        },
                      }),
                    }}
                  />
                </ZoomPic>
              </div>
            </Row>
            <Button.Group style={{ width: '100%', marginTop: '20px' }}>
              {article.pagination.prev !== null ? (
                <Button
                  type="default"
                  style={{ float: 'left' }}
                  href={`/article?category=${article.relate_articles.category.slug}&slug=${
                    article.pagination.prev
                  }`}
                >
                  <Icon type="left" />
                  上一页
                </Button>
              ) : (
                <Button type="default" style={{ float: 'left' }} disabled>
                  <Icon type="left" />
                  没有了
                </Button>
              )}
              {article.pagination.next !== null ? (
                <Button
                  type="default"
                  style={{ float: 'right' }}
                  href={`/article?category=${article.relate_articles.category.slug}&slug=${
                    article.pagination.next
                  }`}
                >
                  下一页
                  <Icon type="right" />
                </Button>
              ) : (
                <Button type="default" style={{ float: 'right' }} disabled>
                  没有了
                  <Icon type="right" />
                </Button>
              )}
            </Button.Group>
          </Row>
        </Skeleton>
      </div>
    );
  }
}

export default article;
