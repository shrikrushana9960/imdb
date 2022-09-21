import React, { useState } from "react";
import {
  Button,
  Divider,
  Form,
  Input,
  message,
  Rate,
  Select,
  Upload,
} from "antd";
import { useDispatch } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const AddForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState();
  const onFinish = (values) => {
    console.log(fileList);
    if (fileList) {
      values.image_poster = fileList;
    }
    if (values.image_poster || values.image_url) {
      dispatch({ type: "Add_MOVIE", movie: values });
      form.resetFields();
    } else message.error("please select Image");
  };
  const onChange = ({ file, fileList: newFileList }) => {
    setFileList(file);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="name"
          rules={[{ required: true, message: "Please input movie Title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="desc"
          rules={[{ required: true, message: "Please input movie Desc!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Image URL" name="image_url">
          <Input />
        </Form.Item>
        <Divider>OR</Divider>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload
            action="/upload.do"
            onChange={onChange}
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input movie Rate!" }]}
          label="Image URL"
          name="rate"
        >
          <Rate allowHalf defaultValue={1} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input movie Language!" }]}
          label="Language"
          name="lang"
        >
          <Select>
            <Select.Option value="hindi">Hindi</Select.Option>
            <Select.Option value="telgu">Telgu</Select.Option>
            <Select.Option value="english">English</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>

          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddForm;
