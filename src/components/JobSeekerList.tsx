import React from 'react';

interface JobSeeker {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  // ... other properties
}

interface JobSeekerListProps {
  jobSeekers: JobSeeker[];
}

const JobSeekerList: React.FC<JobSeekerListProps> = ({ jobSeekers }) => {
  return (
    <ul>
      {jobSeekers.map((jobSeeker) => (
        <li key={jobSeeker.id}>
          {jobSeeker.firstName} {jobSeeker.lastName} - {jobSeeker.email}
        </li>
      ))}
    </ul>
  );
};

export default JobSeekerList;