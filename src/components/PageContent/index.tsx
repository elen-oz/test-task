import { Col, Row } from 'antd';

import Cart from '../Cart';
import styles from './index.module.css';

const PageContent = () => {
  return (
    <Row className={styles.content}>
      <Col span={18} style={{ border: '2px dotted black' }}>
        <Cart />
      </Col>
      <Col span={6}>Итого: [сумма] руб</Col>
    </Row>
  );
};
export default PageContent;
