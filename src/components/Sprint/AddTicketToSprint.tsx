import { Button, Form, Select } from "antd";
import { useEffect, useState } from "react";
import type { ISprint, ITicket } from "../../types/types";

const { Option } = Select;

interface IAddTicketProps {
  tickets: ITicket[];
  sprints: ISprint[];
  onAddTicketToSprint: (
    ticket: ITicket | undefined,
    sprint: ISprint | undefined
  ) => void;
}
const AddTicketToSprint = ({
  tickets,
  sprints,
  onAddTicketToSprint,
}: IAddTicketProps) => {
  const [form] = Form.useForm();
  const [showTickets, setShowTickets] = useState<boolean>(false);
  const [filteredTickets, setFilteredTickets] = useState<ITicket[]>(tickets);
  const [selectedSprint, setSelectedSprint] = useState<ISprint>();

  const handleAddingTicketToSprint = () => {
    const selectedTicket = tickets.find(
      (ticket: ITicket) => ticket.name === form.getFieldValue("ticket")
    );
    onAddTicketToSprint(selectedTicket, selectedSprint);
    form.resetFields();
  };

  const handleSprintChange = () => {
    setShowTickets(true);
    const sprint = sprints.find(
      (sprint) => sprint.name === form.getFieldValue("sprint")
    );
    setSelectedSprint(sprint);
  };

  useEffect(() => {
    var existingTicketsForSprint: number[] = [];
    selectedSprint?.tickets.forEach(function (obj) {
      existingTicketsForSprint.push(obj.id);
    });
    const fTickets = tickets.filter(
      (ticket) => !existingTicketsForSprint.includes(ticket.id)
    );
    setFilteredTickets(fTickets);
  }, [selectedSprint, tickets]);
  return (
    <div>
      <h2>Add Ticket to Sprint</h2>
      <Form form={form} onFinish={handleAddingTicketToSprint}>
        <Form.Item name="sprint" label="Sprint">
          <Select
            showSearch
            optionFilterProp="children"
            onChange={handleSprintChange}
          >
            {sprints.map((sprint: ISprint) => (
              <Option key={sprint.name} value={sprint.name}>
                {sprint.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {showTickets && (
          <Form.Item name="ticket" label="Ticket">
            <Select
              showSearch
              optionFilterProp="children"
            >
              {filteredTickets.map((ticket: ITicket) => (
                <Option key={ticket.name} value={ticket.name}>
                  {ticket.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Ticket to Sprint
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTicketToSprint;
