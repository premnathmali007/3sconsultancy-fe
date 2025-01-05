import React, { useState, useEffect } from 'react';
import JobSeekerList from '../components/JobSeekerList';
import { fetchJobSeekers } from '../utils/api'; 

interface JobSeeker {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    // ... other properties
  }

const JobSeekersPage: React.FC = () => {
  const [jobSeekers, setJobSeekers] = useState<JobSeeker[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedJobSeekers = await fetchJobSeekers();
        setJobSeekers(fetchedJobSeekers);
      } catch (error) {
        console.error('Error fetching job seekers:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Job Seekers</h1>
      <JobSeekerList jobSeekers={jobSeekers} /> 
    </div>
  );
};

export default JobSeekersPage;