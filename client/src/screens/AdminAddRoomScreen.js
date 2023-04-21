import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, InputNumber, Button, Select } from "antd";
import "./AdminAddRoomScreen.css";
import Swal from "sweetalert2";

import Loader from "../components/Loader";
import Error from "../components/Error";
const layout = {
  labelCol: {
    span: 4,
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
function AdminAddRoomScreen() {
  const { Option } = Select;

  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/rooms/addroom", values)).data;
      Swal.fire("Congratulations", "Your Room Added Successfully", "success");
      form.resetFields();
    } catch (error) {
      console.log(error);
      setError(error);
      Swal.fire("Opps", "Error:" + error, "error");
    }

    setLoading(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="row">
  {loading ? (
    <Loader></Loader>
  ) : error.length > 0 ? (
    <Error msg={error}></Error>
  ) : (
    <div className="col-md-12">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className="my-form"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please enter a name',
            },
          ]}
        >
          <Input className="my-input" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please enter a description',
            },
          ]}
        >
          <Input className="my-input" />
        </Form.Item>
        <Form.Item
          name="maxcount"
          label="Max Count"
          rules={[
            {
              required: true,
              message: 'Please enter a maximum count',
            },
          ]}
        >
          <InputNumber min={1} defaultChecked={1} className="my-input" />
        </Form.Item>
        <Form.Item
          name="phonenumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please enter a phone number',
            },
          ]}
        >
          <Input className="my-input" />
        </Form.Item>
        <Form.Item
          name="rentperday"
          label="Rent Per Day"
          rules={[
            {
              required: true,
              message: 'Please enter a rent per day',
            },
          ]}
        >
          <InputNumber min={1} defaultChecked={1} className="my-input" />
        </Form.Item>
        <Form.Item
          name="imageurl1"
          label="Image URL 1"
          rules={[
            {
              required: true,
              message: 'Please enter an image URL',
            },
          ]}
        >
          <Input className="my-input" />
        </Form.Item>
        <Form.Item
          name="imageurl2"
          label="Image URL 2"
          rules={[
            {
              //required: true,
            },
          ]}
        >
          <Input className="my-input" />
        </Form.Item>
        <Form.Item
          name="imageurl3"
          label="Image URL 3"
          rules={[
            {
              //required: true,
            },
          ]}
        >
          <Input className="my-input" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: 'Please select a room type',
            },
          ]}
        >
          <Select placeholder="Select a room type" allowClear className="my-input">
            <Option value="delux">Delux</Option>
            <Option value="single">Single</Option>
            <Option value="luxury">Luxury</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="my-button">
            Add
          </Button>
          <Button type="danger" htmlType="button" onClick={onReset} className="my-button">
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  )}
</div>

  );
}

export default AdminAddRoomScreen;
