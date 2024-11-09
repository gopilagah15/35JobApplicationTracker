import React from 'react';

const Report = ({ applications }) => {
  const totalApplications = applications.length;
  const totalInterviews = applications.filter(app => app.status === 'Interview').length;
  const totalOffers = applications.filter(app => app.status === 'Offered').length;
  const responseRate = totalApplications ? ((totalInterviews / totalApplications) * 100).toFixed(1) : 0;
  const successRate = totalApplications ? ((totalOffers / totalApplications) * 100).toFixed(1) : 0;

  return (
    <div>
      <h2>Application Report</h2>
      <p>Total Applications: {totalApplications}</p>
      <p>Interviews Scheduled: {totalInterviews}</p>
      <p>Offers Received: {totalOffers}</p>
      <p>Response Rate: {responseRate}%</p>
      <p>Success Rate: {successRate}%</p>
    </div>
  );
};

export default Report;
