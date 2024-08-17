import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const useFetch = (initialSearchTerm = " ") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() === "") {
        setData(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_URL}`, {
          params: {
            apiKey: API_KEY,
            s: searchTerm,
          },
        });

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchData, 1000);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);
  return { data, isLoading, error, searchTerm, setSearchTerm };
};

export default useFetch;
