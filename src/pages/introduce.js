import styles from './index.css';
import { Row, Col, Divider } from 'antd';
const home = () => {
  const ListData = [
    {
      key: '1',
      illustration: '/pic/value.jpg',
      title: '价值',
      description: '我们希望能为您提供一些有价值的东西，一些能帮助您成长的东西。',
    },
    {
      key: '2',
      illustration: '/pic/future.jpg',
      title: '未来',
      description: '我们希望能够为人类的文明发展做出一些贡献，至少为以后做些有意义的准备。',
    },
    {
      key: '3',
      illustration: '/pic/study.jpg',
      title: '学习',
      description:
        '无论我们是否正在上学，或者正在工作，或者待业，我们都需要不断地进行学习，我们希望能为您提供所需的知识。',
    },
    {
      key: '4',
      illustration: '/pic/information.jpg',
      title: '信息',
      description:
        '虽然有价值的信息是掌握在少数人手中的，但是我们仍希望极尽全力为您提供一些这个时代有价值的信息。',
    },
  ];
  return (
    <div className={styles.normal}>
      <h1>社区理念</h1>
      {ListData.map((item, k) => {
        if (k % 2 === 0)
          return (
            <div key={`${k}_wrapper`}>
              <Divider key={`${k}_divider`} />
              <Row gutter={50} align="middle" type="flex" justify="center" key={k}>
                <Col lg={8} key={`${k}_col_1`}>
                  <img src={item.illustration} style={{ width: '100%' }} />
                </Col>
                <Col lg={10} key={`${k}_col_2`} type="flex" justify="space-around">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Col>
              </Row>
            </div>
          );
        return (
          <div key={`${k}_wrapper`}>
            <Divider key={`${k}_divider`} />
            <Row gutter={50} align="middle" type="flex" justify="center" key={k}>
              <Col lg={8} key={`${k}_col_1`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Col>
              <Col lg={10} key={`${k}_col_2`}>
                <img src={item.illustration} style={{ width: '100%' }} />
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};
export default home;
