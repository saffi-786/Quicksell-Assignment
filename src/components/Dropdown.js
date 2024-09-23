import React, { useState } from "react";
import "./style.css"; // Optional CSS file for better styling

const Dropdown = () => {
  // State to handle the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Dropdown Button */}
      <div className="dropdown-btn" onClick={toggleDropdown}>
        Display
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-group">
            <label htmlFor="grouping">Grouping</label>
            <select id="grouping" className="dropdown-select">
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-group">
            <label htmlFor="ordering">Ordering</label>
            <select id="ordering" className="dropdown-select">
              <option value="priority">Priority</option>
              <option value="name">Name</option>
              <option value="dateAdded">Date Added</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
