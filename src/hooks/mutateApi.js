import { useState } from "react";
import axios from "axios";
import { API } from "../utils/const";
const token = "";

export const useMutateApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url, methode, data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setIsLoading(true);
    try {
      const response = await axios[methode](url);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    }
    setIsLoading(false);
  };

  const mutate = async (url) => {
    fetchData(url, methode, data);
  };

  return { isLoading, data, error, mutate };
};

export const useAuthApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url, data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API}/auth/${url}`, data);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    }
    setIsLoading(false);
  };

  const mutate = async (url, data) => {
    fetchData(url, data);
  };

  return { isLoading, data, error, mutate };
};
