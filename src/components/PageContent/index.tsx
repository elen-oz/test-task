import { Col, Row, Button, Divider, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getCart } from '../../API';

import styles from './index.module.css';

const handleDecrease = (record) => {
  console.log('decrease');
};

const handleIncrease = (record) => {
  console.log('increase');
};

const handleRemove = (record) => {
  console.log('remove');
};

const columns = [
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Количество',
    dataIndex: 'quantity',
    key: 'quantity',
    render: (text, record) => (
      <div>
        <Button
          key={`decrease_${record.id}`}
          onClick={() => handleDecrease(record)}
        >
          -
        </Button>
        {text}
        <Button
          key={`increase_${record.id}`}
          onClick={() => handleIncrease(record)}
        >
          +
        </Button>
        <Button
          key={`remove_${record.id}`}
          onClick={() => handleRemove(record)}
        >
          Remove
        </Button>
      </div>
    ),
  },
];

const PageContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCart().then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <Row className={styles.content}>
      <Col span={18}>
        <div className={styles.container}>
          <Divider orientation='left'>Корзина</Divider>
          <Table
            pagination={false}
            dataSource={items}
            columns={columns}
            rowKey='id'
          />
          ;
        </div>
      </Col>
      <Col span={6}>
        Итого: [сумма] руб
        <Button type='primary'>Checkout</Button>
      </Col>
    </Row>
  );
};
export default PageContent;
