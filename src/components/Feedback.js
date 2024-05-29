import React from "react";
import FeedbackRow from "./FeedbackRow";

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const newMonths = [
  {
    month: "Jan 5, 2024",
    days: Array.from({ length: getDaysInMonth(1, 2024) }, (_, i) => ({
      status: ["approved", "pending", "rejected"][i % 3],
    })),
  },
  {
    month: "Feb 5, 2024",
    days: Array.from({ length: getDaysInMonth(2, 2024) }, (_, i) => ({
      status: ["approved", "pending", "rejected"][i % 3],
    })),
  },
  {
    month: "Mar 5, 2024",
    days: Array.from({ length: getDaysInMonth(3, 2024) }, (_, i) => ({
      status: ["approved", "pending", "rejected"][i % 3],
    })),
  },
  {
    month: "Apr 5, 2024",
    days: Array.from({ length: getDaysInMonth(4, 2024) }, (_, i) => ({
      status: ["approved", "pending", "rejected"][i % 3],
    })),
  },
  {
    month: "Jun 5, 2024",
    days: Array.from({ length: getDaysInMonth(5, 2024) }, (_, i) => ({
      status: ["approved", "pending", "rejected"][i % 3],
    })),
  },
  {
    month: "May 5, 2024",
    days: Array.from({ length: getDaysInMonth(6, 2024) }, (_, i) => ({
      status: ["approved", "pending", "rejected"][i % 3],
    })),
  },
];

function FeedbackTable({ showManagerFeedback }) {
  const maxDays = Math.max(...newMonths.map((month) => month?.days?.length));
  return (
    <div className="pl-2">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr>
            <th></th>
            {newMonths?.map((dt, index) => (
              <th key={index} className="border p-2 text-center">
                <span className="text-sm">{dt.month}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxDays }, (_, i) => i + 1).map((dayIndex) => (
            <tr key={dayIndex}>
              <td className="border p-2 text-center">{dayIndex}</td>
              {newMonths?.map((month, monthIndex) => (
                <FeedbackRow
                  key={`${monthIndex}-${dayIndex}`}
                  feedbackData={month?.days[dayIndex - 1] || { status: null }}
                  showManagerFeedback={showManagerFeedback}
                  //   dayIndex={dayIndex}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackTable;
