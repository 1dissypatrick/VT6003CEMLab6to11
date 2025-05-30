import React from "react";
import { Form, Input, Button } from 'antd';
import { Buffer } from 'buffer';
import axios from "axios";
import { api } from './common/http-common';

const { TextArea } = Input

const NewArticles = () => {
  const username = "bob";
  const password = "654321";
  // Create token by username:password
  const access_token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
  localStorage.setItem('atoken', access_token);
  console.log('atoken '+localStorage.getItem('atoken'))
  const handleFormSubmit = (values: any) => {
    const t = values.title;
    const c = values.context;
    console.log(values, t, c);
    const postArticle = {
      title: t,
      alltext: c,
      authorid: 2
    }
    
    // Post request
    axios.post(`${api.uri}/articles`, postArticle, {
      headers: {
        'Authorization': `Basic ${localStorage.getItem('atoken')}`
      }
    }).then((res)=> {
      console.log(res.data);
    });
    
  }

  const contentRules = [
    {required: true, message: 'Please input somethings'}    
  ]
  
  return (
    <Form name="article" onFinish={(values)=>handleFormSubmit(values)}>
      <Form.Item name="title" label="Title" rules={contentRules}>
        <Input />
      </Form.Item>
      <Form.Item name="context" label="Context" rules={contentRules}>
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    
    </Form>
  )
}

export default NewArticles;



