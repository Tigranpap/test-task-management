import { List } from "antd";
import type { ITicket } from "../../types/types";
import Ticket from "./Ticket";
import "./Tickets.css";

interface ITicketProps {
  tickets: ITicket[];
}

const Tickets = ({ tickets }: ITicketProps) => {
  return (
    <div className="ticketContainer">
      <h2>All Tickets</h2>
      <div className="ticketList">
        <List
          grid={{ gutter: 16, column: 4 }}
          size="small"
          dataSource={tickets}
          renderItem={(item: ITicket) => (
            <Ticket name={item.name} description={item.description} />
          )}
        />
      </div>
    </div>
  );
};

export default Tickets;
