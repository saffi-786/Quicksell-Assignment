// TicketCard.js
import React from "react";
import "./style.css";

const TicketCard = ({ ticket, priorityIcon }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.id}</h3>
      <h4>{ticket.title}</h4>
      <div className="feature-request-div">
        <img src={priorityIcon} alt="icon" className="grey-urgent-icon" />
        <span className="feature-request-span">{ticket.tag[0]}</span>
      </div>
    </div>
  );
};

export default TicketCard;
