import axios from "axios";

const BASE_URL = "https://dall-e-v7at.onrender.com/api/v1";
export const getAllImages = async () => {
  const posts = await axios.get(`${BASE_URL}/post`);
  const { data } = posts.data;
  return data;
};

export const generateImage = async (prompt) => {
  const res = await axios.post(`${BASE_URL}/dalle`, { prompt });
  return `data:image/jpeg;base64,${res.data.photo}`;
};

export const shareImage = async (form) => {
  const res = await axios.post(`${BASE_URL}/post`, { ...form });
  return res.data.data;
};

// try {
//   const response = await fetch(
//     "https://dall-e-v7at.onrender.com/api/v1/post",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...form }),
//     }
//   );

//   await response.json();
//   toast.success("Image Shared Successfully");
//   navigate("/");
// } catch (err) {
//   toast.error(err);
// } finally {
//   setLoading(false);
// }
