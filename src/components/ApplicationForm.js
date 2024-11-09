import React, { useState } from 'react';

const ApplicationForm = ({ addApplication }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('Applied');
  const [interviewDate, setInterviewDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !position) return;
    addApplication({ company, position, status, interviewDate });
    setCompany('');
    setPosition('');
    setStatus('Applied');
    setInterviewDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Job Application</h2>
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>
      <input
        type="date"
        placeholder="Interview Date"
        value={interviewDate}
        onChange={(e) => setInterviewDate(e.target.value)}
      />
      <button type="submit">Add Application</button>
    </form>
  );
};

export default ApplicationForm;
