import { useState } from "react";
import { useSelector } from "react-redux";
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
    } catch (axiosError) {
      setData(null);
      const status = axiosError.response?.status;
      const data = axiosError.response?.data;
      const message = axiosError.response?.data.message;
      setError({ status, data, message });
    }
    setIsLoading(false);
  };

  const mutate = async (url, data) => {
    fetchData(url, data);
  };

  return { isLoading, data, error, mutate };
};

export const useGetApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state);
  const fetchData = async (url) => {
    const {
      /* auth_id,
      user_id,
      email,
      first_name,
      last_name,
      phone_number,
      address,
      role,*/
      token,
    } = user;
    setIsLoading(true);
    try {
      console.log(`${API}/${url}`);
      const response = await axios.get(`${API}/${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      setError(null);
    } catch (axiosError) {
      setData(null);
      const status = axiosError.response?.status;
      const data = axiosError.response?.data;
      const message = axiosError.response?.data.message;
      setError({ status, data, message });
    } finally {
      setIsLoading(false);
    }
  };

  const get = async (url) => {
    fetchData(url);
  };

  return { isLoading, data, error, get };
};

export const useProtectedPostApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.token);

  const fetchData = async (url, data) => {
    setIsLoading(true);
    console.log(data);
    try {
      const response = await axios.post(`${API}/${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("success ==================> ", response.data);
      setData(response.data);
      setError(null);
    } catch (axiosError) {
      setData(null);
      const status = axiosError.response?.status;
      const data = axiosError.response?.data;
      const message = axiosError.response?.data.message;
      setError({ status, data, message });
    }
    setIsLoading(false);
  };

  const mutate = async (url, data) => {
    fetchData(url, data);
  };

  return { isLoading, data, error, mutate };
};
