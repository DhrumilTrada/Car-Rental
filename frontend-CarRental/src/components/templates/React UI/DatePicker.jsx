import React, { useRef } from 'react';

export default function CustomDatePicker({ date, minDate, onDateChange }) {
  const dateInputRef = useRef(null);
  const today = minDate;

  const handleIconClick = () => {
    dateInputRef.current.showPicker(); // Opens the native date picker
  };

  return (
    <div className="position-relative" style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="date"
        style={{ height: "40px", paddingRight: "40px" }}
        className="form-control px-4"
        placeholder="Pickup Date"
        min={today} // Sets today's date as the minimum date
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
        onClick={(e) => {
          if (!e.target.value) onDateChange(today);
        }}
        ref={dateInputRef}
      />
      <i
        className="fa fa-calendar-alt position-absolute"
        style={{
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#3A3A3A",
          cursor: "pointer",
        }}
        onClick={handleIconClick}
      />
    </div>
  );
}
