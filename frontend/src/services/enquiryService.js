import api from "./api";

export const submitEnquiry = async (formData) => {
  const response = await api.post("/enquiries", formData);
  return response.data;
};