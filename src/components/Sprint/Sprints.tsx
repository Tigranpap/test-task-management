import { List } from "antd";
import { ISprint, ITicket } from "../../types/types";
import AddTicketToSprint from "./AddTicketToSprint";
import Sprint from "./Sprint";
import "./Sprints.css";

interface ISprintsProps {
  tickets: ITicket[];
  sprints: ISprint[];
  onAddTicketToSprint: (
    ticket: ITicket | undefined,
    sprint: ISprint | undefined
  ) => void;
}

const Sprints = ({ tickets, sprints, onAddTicketToSprint }: ISprintsProps) => {
  return (
    <div className="sprintsContainer">
      <h2>All Sprints</h2>
      <List
        size="small"
        dataSource={sprints}
        renderItem={(item: ISprint) => (
          <Sprint
            name={item.name}
            startDate={item.startDate}
            endDate={item.endDate}
            tickets={item.tickets}
          />
        )}
      />
      <AddTicketToSprint
        sprints={sprints}
        tickets={tickets}
        onAddTicketToSprint={onAddTicketToSprint}
      />
    </div>
  );
};

export default Sprints;
