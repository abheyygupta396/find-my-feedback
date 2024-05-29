import React, { useState } from "react";
import SelectiveTags from "./Common/Tags";

const statusColors = {
  approved: "bg-green-500",
  pending: "bg-yellow-500",
  rejected: "bg-gray-500",
};

function FeedbackRow({ feedbackData, showManagerFeedback, dayIndex }) {
  const [feedbackStatus, setFeedbackStatus] = useState(feedbackData);

  const handleStatusChange = (newStatus) => {
    setFeedbackStatus({ ...feedbackStatus, status: newStatus });
  };

  return (
    <td className="border p-4 bg-[#fff] relative">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <div className="flex flex-row gap-x-5">
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-center self-center">
                {feedbackStatus?.status && (
                  <div
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      statusColors[feedbackStatus.status]
                    }`}
                    onClick={() =>
                      handleStatusChange(
                        feedbackStatus?.status === "approved"
                          ? "pending"
                          : "approved"
                      )
                    }
                  ></div>
                )}
              </div>
              {Boolean(feedbackStatus.status && showManagerFeedback) && (
                <SelectiveTags tagName="Manager" />
              )}
            </div>
          </div>
          {/* {feedbackStatus.status === "pending" && (
            <div className="absolute top-full left-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg z-10">
              <button
                className="block w-full text-left px-2 py-1 hover:bg-gray-200"
                onClick={() => handleStatusChange("approved")}
              >
                Approved
              </button>
              <button
                className="block w-full text-left px-2 py-1 hover:bg-gray-200"
                onClick={() => handleStatusChange("rejected")}
              >
                Rejected
              </button>
            </div>
          )} */}
        </div>
        {/* {feedbackStatus.status && <span>{dayIndex}</span>} */}
      </div>
    </td>
  );
}

export default FeedbackRow;
