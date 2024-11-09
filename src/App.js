import React, { useState } from 'react'; 
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import InterviewReminder from './components/InterviewReminder';
import Report from './components/Report';
const App = () => {
  const [applications, setApplications] = useState([]);

  const addApplication = (application) => {
    setApplications([...applications, application]);
  };

  const updateStatus = (index, status) => {
    const updatedApplications = applications.map((app, i) =>
      i === index ? { ...app, status } : app
    );
    setApplications(updatedApplications);
  };

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <ApplicationForm addApplication={addApplication} />
      <ApplicationList applications={applications} updateStatus={updateStatus} />
      <InterviewReminder applications={applications} />
      <Report applications={applications} />
    </div>
  );
};

export default App;
