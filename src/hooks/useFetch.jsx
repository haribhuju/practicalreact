import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(" ");
  console.log(search);

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim() === "") {
        setData([]);
        return;
      }
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_URL}`, {
          params: {
            apiKey: API_KEY,
            s: search,
          },
        });

        console.log(response.data);
        setData(response.data.Search.slice(0, 5));

        setIsLoading(false);
      } catch (error) {
        setError("Try different name");
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchData, 1000);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  return { data, isLoading, error, search, setSearch };
};

export default useFetch;
