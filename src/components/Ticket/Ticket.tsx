import { Card, Space } from "antd";

interface ITicketProps {
  name: string;
  description: string;
}
const Ticket = ({ name, description }: ITicketProps) => (
  <Space align="center" size={16}>
    <Card title={name} style={{ width: 300 }}>
      <p>{description}</p>
    </Card>
  </Space>
);

export default Ticket;
