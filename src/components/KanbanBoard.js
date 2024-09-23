// KanbanBoard.js
import React, { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import "./style.css";

const getStatusIcon = (status) => {
  switch (status) {
    case "Todo":
      return `${process.env.PUBLIC_URL}/assets/todo.svg`;
    case "Backlog":
      return `${process.env.PUBLIC_URL}/assets/backlog.svg`;
    case "Cancelled":
      return `${process.env.PUBLIC_URL}/assets/cancelled.svg`;
    case "Done":
      return `${process.env.PUBLIC_URL}/assets/done.svg`;
    case "In progress":
      return `${process.env.PUBLIC_URL}/assets/in-progress.svg`;
    default:
      return "";
  }
};

const getPriorityIcon = (priority) => {
  switch (priority) {
    case "Urgent":
      return `${process.env.PUBLIC_URL}/assets/urgent-colour.svg`;
    case "High":
      return `${process.env.PUBLIC_URL}/assets/high.svg`;
    case "Medium":
      return `${process.env.PUBLIC_URL}/assets/medium.svg`;
    case "Low":
      return `${process.env.PUBLIC_URL}/assets/low.svg`;
    case "No Priority":
      return `${process.env.PUBLIC_URL}/assets/no-priority.svg`;
    default:
      return "";
  }
};

const getThreeDotsIcon = () => {
  return `${process.env.PUBLIC_URL}/assets/three-dots.svg`;
};

const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
  const [groupedTickets, setGroupedTickets] = useState({});
  const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];
  useEffect(() => {
    let grouped = {};
    // Group tickets based on the selected option
    if (groupBy === "status") {
      grouped = tickets.reduce((acc, ticket) => {
        acc[ticket.status] = acc[ticket.status] || [];
        acc[ticket.status].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "user") {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find((u) => u.id === ticket.userId);
        const userName = user ? user.name : "Unassigned";
        acc[userName] = acc[userName] || [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "priority") {
      grouped = tickets.reduce((acc, ticket) => {
        acc[priorityLabels[ticket.priority]] =
          acc[priorityLabels[ticket.priority]] || [];
        acc[priorityLabels[ticket.priority]].push(ticket);
        return acc;
      }, {});
    }
    setGroupedTickets(grouped);
  }, [tickets, groupBy, users]);

  // Sort tickets based on the sortBy parameter
  const sortTickets = (ticketsArray) => {
    if (sortBy === "priority") {
      return ticketsArray.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === "title") {
      return ticketsArray.sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketsArray;
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <div key={groupKey} className="kanban-column">
          <div className="column-title">
            {groupBy === "priority" && (
              <img
                src={getPriorityIcon(groupKey)}
                alt="icon"
                className="grey-urgent-icon"
              />
            )}
            {groupBy === "status" && (
              <img
                src={getStatusIcon(groupKey)}
                alt="icon"
                className="grey-urgent-icon"
              />
            )}
            <h3>{groupKey}</h3>
            <h4>{groupedTickets[groupKey].length}</h4>
          </div>
          {sortTickets(groupedTickets[groupKey]).map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              priorityIcon={
                groupBy === "priority"
                  ? getThreeDotsIcon()
                  : getPriorityIcon(priorityLabels[ticket.priority])
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
