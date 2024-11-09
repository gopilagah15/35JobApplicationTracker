import React from 'react';

const ApplicationList = ({ applications, updateStatus }) => {
  return (
    <div>
      <h2>Applications</h2>
      <ul>
        {applications.map((app, index) => (
          <li key={index}>
            <strong>Company:</strong> {app.company} - <strong>Position:</strong> {app.position}
            <br />
            <strong>Status:</strong> {app.status}
            <br />
            <button onClick={() => updateStatus(index, 'Interview')}>Mark as Interview</button>
            <button onClick={() => updateStatus(index, 'Offered')}>Mark as Offered</button>
            <button onClick={() => updateStatus(index, 'Rejected')}>Mark as Rejected</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationList;
