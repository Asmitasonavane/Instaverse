import * as api from "../api";
export const getStories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStories();
        dispatch({
            type: "FETCH_ALL_STORIES", payload: data
        });
    } catch (error) {
        console.log(error.message)

    }
};

export const createStories = (Story) => async (dispatch) => {
    try {
        const { data } = await api.createStories(Story);
        dispatch({
            type: "CREATE_STORY", payload: data
        });
    } catch (error) {
        console.log(error.message)

    }
};
export const updateStory = (id, Story) => async (dispatch) => {
    try {
        const { data } = await api.updateStory(id, Story);
        dispatch({
            type: "UPDATE_STORY", payload: data
        });
    } catch (error) {
        console.log(error.message)

    }
};