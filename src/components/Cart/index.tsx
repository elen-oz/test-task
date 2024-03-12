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
import { getCart } from '../../API';

import styles from './index.module.css';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
];

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCart().then((res) => {
      setItems(res.products);
    });
  }, []);

  console.log('items', items);

  return (
    
  );
};

export default Cart;
