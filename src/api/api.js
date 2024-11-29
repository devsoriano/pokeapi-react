const apiClient = {
  baseURL: "http://18.208.163.231:8000/api",
  // baseURL: "http://localhost:8000/api",

  async get(endpoint) {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Fetch GET error: ${error.message}`);
      throw error;
    }
  },
};

export default apiClient;
