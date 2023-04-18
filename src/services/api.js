import axios from "axios";

axios.defaults.baseURL = "https://639cc16116d1763ab1536f6f.mockapi.io/api/v1";

export const getUsers = async (page, limit) => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=9`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserData = async (id, data) => {
  try {
    const response = await axios.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
