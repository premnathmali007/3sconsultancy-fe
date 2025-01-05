export const fetchJobSeekers = async () => {
    try {
      const response = await fetch('http://localhost:8090/api/jobseekers');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching job seekers:', error);
      throw error; 
    }
  };