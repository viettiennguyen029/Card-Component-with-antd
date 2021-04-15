import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardHeader from './components/CardHeader';
import MetaTitle from './components/MetaTitle';
import CardAvatar from './components/CardAvatar';
import reportWebVitals from './reportWebVitals';
import { Card }from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

ReactDOM.render(
  <Card
    hoverable
    style={{ width: "350px", padding: '8px' }}
    headStyle={{borderBottom:'none'}}
    bodyStyle={{ padding: "12px" }}
    extra={<CardHeader />}
    cover={<CardAvatar width={350}/>}
  >
    <Meta
      title={<MetaTitle />}
    />
    
  </Card>,
  document.getElementById('root'),
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
