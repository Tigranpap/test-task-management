import React, { useState } from "react";
import type { ITicket, ISprint } from "./types/types";
import { useNavigate } from "react-router-dom";
import Tickets from "./components/Ticket/Tickets";
import Sprints from "./components/Sprint/Sprints";
import './App.css';
import { Tabs, Typography } from "antd";
import NewTicket from "./components/Ticket/NewTicket";
import NewSprint from "./components/Sprint/NewSprint";


const { Title } = Typography;

const App = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [sprints, setSprints] = useState<ISprint[]>([]);
  const navigate = useNavigate();
  
  const onCreateTicket = (values: ITicket) => {
    setTickets([...tickets, { id:values.id, name: values.name, description: values.description }]);
  };

  const onCreateSprint = (values: ISprint) => {
    setSprints([...sprints, { name: values.name, startDate: values.startDate, endDate: values.endDate, tickets:[] }]);
  };

  const onAddTicketToSprint = (selectedTicket: ITicket|undefined, selectedSprint: ISprint|undefined) => {
    if (!selectedTicket || !selectedSprint) {
      return;
    }

    const updatedSprints = sprints.map(sprint => {
      if (sprint.name === selectedSprint.name) {
        return {
          ...sprint,
          tickets: [...sprint.tickets, selectedTicket]
        };
      }

      return {
        ...sprint,
        tickets: sprint.tickets.filter((ticket) => ticket.id !== selectedTicket?.id)
      };
    });

    setSprints(updatedSprints);
  };
  
  const elements = [
    {
      tabTitle: 'Home',
      tabBody: <Title level={2} className="title">Ticket Management System</Title>,
      path: '/'
    },
    {
      tabTitle: 'Add Sprint',
      tabBody: <NewSprint onCreateSprint={onCreateSprint}/>,
      path: 'addSprint'
    },
    {
      tabTitle: 'Add Ticket',
      tabBody: <NewTicket onCreateTicket={onCreateTicket} id={tickets.length}/>,
      path: 'addTicket'
    },
    {
      tabTitle: 'All Sprints',
      tabBody: <Sprints tickets={tickets} sprints={sprints} onAddTicketToSprint={onAddTicketToSprint}/>,
      path: 'sprints'
    },
    {
      tabTitle: 'All Tickets',
      tabBody: <Tickets tickets={tickets}/>,
      path: 'tickets'
    }
  ];

  return (
    <div>
      <Tabs
      centered
    onChange={(path:string)=>{
      navigate(`../${path}`)
    }}
    type="card"
    items={elements.map((element) => {
      return {
        label: element.tabTitle,
        key: element.path,
        children: element.tabBody,
      };
    })}
  />
    </div>
  );
};

export default App;
