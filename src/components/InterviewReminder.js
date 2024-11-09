import React from 'react';

const InterviewReminder = ({ applications }) => {
  const upcomingInterviews = applications.filter(app => app.status === 'Interview' && app.interviewDate);

  return (
    <div>
      <h2>Upcoming Interviews</h2>
      <ul>
        {upcomingInterviews.map((app, index) => (
          <li key={index}>
            <strong>Company:</strong> {app.company} - <strong>Position:</strong> {app.position}
            <br />
            <strong>Interview Date:</strong> {app.interviewDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewReminder;
