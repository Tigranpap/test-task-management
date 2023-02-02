import { Button, Form, Input } from "antd";
import type { ITicket } from "../../types/types";

interface INewTicketProps {
    onCreateTicket: (value:ITicket)=> void;
    id: number;
}

const NewTicket = ({ onCreateTicket, id }: INewTicketProps) => {
    const [form] = Form.useForm();

    const handleCreateTicket = () => {
        const name = form.getFieldValue('ticket');
        const description = form.getFieldValue('description');

        onCreateTicket({id, name, description});
        form.resetFields()
    }

  return (
    <div>
      <h2>Create Ticket</h2>
      <Form form={form} onFinish={handleCreateTicket}>
        <Form.Item
          name="ticket"
          label="Ticket Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Ticket Description"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Ticket
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewTicket;
