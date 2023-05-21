import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Card, Form, Input } from "antd";
//import FileBase64 from "react-file-base64";
import styles from "./styles";
import { createStories, updateStory } from '../../actions/stories';
import { useSelector } from "react-redux";



//const { Title } = Typography;
function StoryForm({ selectedId, setSelectedId }) {
    const Story = useSelector((state) => selectedId ? state.stories.find(Story => Story._id === selectedId) : null);

    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const onSubmit = (formValues) => {
        selectedId ? dispatch(updateStory(selectedId, formValues))
            : dispatch(createStories(formValues));

    };
    useEffect(() => {
        if (Story) {
            form.setFieldValue(Story)
        }
    }, [Story, form]);
    return (
        <Card
            style={styles.formCard}
            title={
                <title level={4} style={styles.formTitle}>
                    {selectedId ? "Editting" : "Share"} a story
                </title>
            }
        >
            <Form
                form={form}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                size="middle"
                onFinish={onSubmit}
            >
                <Form.Item name="username" label="username" rules={[{ required: true }]}>
                    <input allowClear />
                </Form.Item>
                <Form.Item name="caption" label="caption" rules={[{ required: true }]}>
                    <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
                </Form.Item>
                <Form.Item name="tags" label="tags">
                    <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
                </Form.Item>
                {/* <Form.Item name="image" label="image" rules={[{ required: true }]}> 
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={(e) => {
                            form.setFieldsValue({
                                image: e.base64
                            })
                        }} />
                </Form.Item>*/}
                <Form.Item
                    wrapperCol={{
                        span: 16,
                        offset: 6
                    }}>
                    <button
                        type='primary'
                        block
                        htmlType='submit'
                    >
                        Share
                    </button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default StoryForm;