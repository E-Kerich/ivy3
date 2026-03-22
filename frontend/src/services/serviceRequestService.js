import api from "./api";

export const submitServiceRequest = async (formData) => {
  const response = await api.post("/service-requests", formData);
  return response.data;
};