import axios from "axios";
const baseURL = "https://opentdb.com/api.php";

const getQuestions = async (payload = {}) => {
  const { amount = 10, difficulty = "hard", type = 'boolean' } = payload;
  return axios.get(`${baseURL}`, { params: { amount, difficulty, type } });
};

export { getQuestions };
