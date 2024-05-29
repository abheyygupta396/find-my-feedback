import React, { useState } from "react";
import FeedbackTable from "./Feedback";

function SpecificDateCalendar() {
  const [showManagerFeedback, setShowManagerFeedback] = useState(false);

  const handleCheckboxChange = () => {
    setShowManagerFeedback(!showManagerFeedback);
  };

  return (
    <div className="flex flex-col h-screen pr-20">
      <header className="flex justify-between items-center mb-4 px-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="managerFeedback"
            checked={showManagerFeedback}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="managerFeedback" className="text-gray-700">
            Show Manager Feedback
          </label>
        </div>
        <div className="flex space-x-2">
          <input
            type="date"
            className="border border-gray-300 p-1 rounded"
            defaultValue="2023-01-01"
          />
          <input
            type="date"
            className="border border-gray-300 p-1 rounded"
            defaultValue="2023-12-31"
          />
          <button className="text-blue-500">Reset</button>
        </div>
      </header>
      <div className="overflow-y-scroll cursor-pointer h-100">
        <FeedbackTable showManagerFeedback={showManagerFeedback} />
      </div>
    </div>
  );
}

export default SpecificDateCalendar;
