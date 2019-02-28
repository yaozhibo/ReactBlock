import styles from './index.css';
import { Row, Col } from 'antd';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>核心服务及功能</h1>
      <Row gutter={12} align="middle" justify="center" type="flex">
        <Col lg={6}><img src="https://www.qiniu.com/assets/pandora/icon-dashujugongzuoliu@2x-23edf9292c8c47ea0a86d19d32e9803be9d4d417ac5fdda9332f4985049cdb39.png" style={{maxWidth: '100%'}} /></Col>
        <Col lg={6}>
          <h1>大数据工作流引擎</h1>
          <h3>可视化大数据接入、计算、导出引擎，高效优雅的实现海量数据的处理。拓扑式数据流管理，方便用户快速进行数据流建模，直观把握业务数据流向。</h3>
        </Col>
      </Row>
      <Row gutter={12} align="middle" justify="center" type="flex">
        <Col lg={6}>
          <h1>日志检索服务</h1>
          <h3>提供针对日志类数据的存储与检索服务，用户无需开发就能快速实现数据定制化分词、存储、检索、分析功能。高效索引和搜索海量数据，提升运维/运营效率，快速查找和定位问题。</h3>
        </Col>
        <Col lg={6}><img src="https://www.qiniu.com/assets/pandora/icon-rizhijiansuo@2x-0559b9cf8c612f60f9721d72a230d769aa512cd280c5fdeff6257ddcdcf94540.png" style={{maxWidth: '100%'}} /></Col>
      </Row>
      <Row gutter={12} align="middle" justify="center" type="flex">
        <Col lg={6}><img src="https://www.qiniu.com/assets/pandora/icon-shixushujuku@2x-7d6f1d06baa0231dd629681016c33d20ed7a3567130fc2b04817567f2c5c703f.png" style={{maxWidth: '100%'}} /></Col>
        <Col lg={6}>
          <h1>时序数据库</h1>
          <h3>存储时序数据的高性能数据库，专为处理高写入和高并发查询而研制，支持对时序数据进行函数计算与分组聚合。</h3>
        </Col>
      </Row>
      <Row gutter={12} align="middle" justify="center" type="flex">
        <Col lg={6}>
          <h1>Spss 服务</h1>
          <h3>基于容器技术研发的 Spark 服务。支持快速一键式集群部署，计算资源弹性伸缩，按需收费，为用户提供快餐式大数据消费能力。</h3>
        </Col>
        <Col lg={6}><img src="https://www.qiniu.com/assets/pandora/icon-baobiaogongzuoshi@2x-d3f13aaf10015c725450321849dcb55818bb1f2af94b59e3dcf0be04101fc002.png" style={{maxWidth: '100%'}} /></Col>
      </Row>
    </div>
  );
}
