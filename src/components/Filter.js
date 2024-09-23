// Filter.js
import React, { useState } from "react";

const Filter = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      {/* Dropdown Button */}
      <div className="dropdown-btn" onClick={toggleDropdown}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/Display.svg`}
            alt=""
            className="grey-urgent-icon"
          />
        </div>
        <div>Dsiplay</div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/down.svg`}
            alt=""
            className="grey-urgent-icon"
          />
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-group">
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              className="dropdown-select"
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-group">
            <label htmlFor="ordering">Ordering</label>
            <select
              id="ordering"
              className="dropdown-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
