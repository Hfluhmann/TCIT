import React from "react";
import { Button, Form, Input, Select, Space } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { pushPost, loadFilters } from "../features/post/postSlice";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const PostForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const response = await axios.post("http://localhost:3001/posts", values);
    console.log(response.data.post);
    if (response.status === 201) {
      const post = response.data.post;
      dispatch(pushPost({ ...post, key: post.id }));
      dispatch(loadFilters());
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input showCount maxLength={128} placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Descripción"
        name="description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input showCount maxLength={255} placeholder="input placeholder" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default PostForm;
