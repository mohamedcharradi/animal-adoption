import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API } from "../utils/const";

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
    setIsLoading(true);
    try {
      const response = await axios.get(`${API}/${url}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
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

export const useProtectedPatchApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.token);
  const fetchData = async (url, data) => {
    setIsLoading(true);
    console.log(token);
    try {
      const response = await axios.patch(`${API}/${url}`, data, {
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
      console.log("error ==================> ", axiosError);
      setError({ status, data, message });
    }
    setIsLoading(false);
  };

  const mutate = async (url, data) => {
    fetchData(url, data);
  };

  return { isLoading, data, error, mutate };
};

export const useProtectedDeleteApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.token);
  const fetchData = async (url) => {
    setIsLoading(true);
    console.log(token);
    try {
      const response = await axios.delete(`${API}/${url}`, {
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
      console.log("error ==================> ", axiosError);
      setError({ status, data, message });
    }
    setIsLoading(false);
  };

  const mutate = async (url) => {
    fetchData(url);
  };

  return { isLoading, data, error, mutate };
};
