import { Button, DatePicker, Form, Input } from "antd";
import type { ISprint } from "../../types/types";
import "./Sprints.css";

interface INewSprintProps {
    onCreateSprint: (values:ISprint)=>void;
}
const NewSprint = ({ onCreateSprint }: INewSprintProps) => {
  const [form] = Form.useForm();

    const handleCreateSprint = () => {
        const name = form.getFieldValue('name');
        const startDate = form.getFieldValue('startDate').format('YYYY-MM-DD');
        const endDate = form.getFieldValue('endDate').format('YYYY-MM-DD');

        onCreateSprint({name,startDate,endDate,tickets:[]});
        form.resetFields();
    }
  return (
    <div>
      <h2 className="sprintsHeading">Create Sprint</h2>
      <Form form={form} onFinish={handleCreateSprint}>
        <Form.Item
          name="name"
          label="Sprint Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item name="endDate" label="End Date" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Sprint
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewSprint;
