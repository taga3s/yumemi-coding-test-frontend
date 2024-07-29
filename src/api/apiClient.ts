const URI = import.meta.env.VITE_RESAS_API_ENDPOINT;
const API_KEY = import.meta.env.VITE_RESAS_API_KEY;

const apiClient = async <T>(endpoint: string, abortController: AbortController): Promise<T> => {
  const response = await fetch(`${URI}${endpoint}`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
    signal: abortController.signal,
  });
  return response.json();
};

export { apiClient };
