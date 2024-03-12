import {
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Spin,
  Typography,
  Select,
  Badge,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Menu,
  Divider,
  Table,
} from 'antd';
import { useEffect, useState } from 'react';
import { addToCart } from '../../API';

import styles from './index.module.css';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Cart = () => {
  const [items, setItems] = useState([]);

  return (
    <div className={styles.container}>
      {/* <Table
        pagination={false}
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Price',
            dataIndex: 'price',
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
          },
          {
            title: 'Total',
            dataIndex: 'total',
          },
        ]}
        summary={(data) => {
          const total = data.reduce((pre, current) => {
            return pre + current.total;
          }, 0);
          return <span>Total: ${total}</span>;
        }}
      />
      <Button type='primary'>Checkout Your Cart</Button> */}

      <Divider orientation='left'>Корзина</Divider>
      <List
        size='large'
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};
export default Cart;
