const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchJobSeekers = async () => {
    try {
      const response = await fetch(`${API_URL}/api/jobseekers`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching job seekers:', error);
      throw error; 
    }
  };