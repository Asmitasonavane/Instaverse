import axios from "axios";
const url = "http://localhost:5001/stories";
export const fetchStories = async () => axios.get(url);
export const createStories = async (Story) => axios.post(url, Story);
export const updateStory = async (id, Story) => axios.patch(`${url}/${id}`, Story);

