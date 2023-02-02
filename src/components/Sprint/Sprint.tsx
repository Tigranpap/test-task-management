import { List } from "antd";
import type { ISprint } from "../../types/types";
import Ticket from "../Ticket/Ticket";

const Sprint = ({ name, startDate, endDate, tickets }: ISprint) => (
  <List.Item>
    <List.Item.Meta
      title={`${name} (${startDate} - ${endDate})`}
      description={
        <List
          size="small"
          dataSource={tickets}
          renderItem={(item) => (
            <Ticket name={item.name} description={item.description} />
          )}
        />
      }
    />
  </List.Item>
);

export default Sprint;
