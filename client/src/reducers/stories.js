const storyReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL_STORIES":
            return action.payload;
        case "CREATE_STORY":
            return [...state, action.payload];
        case "UPDATE_STORY":
            return state.map(Story => Story.id === action.payload._id ? action.payload : Story);

        default:
            return state;
    }

};

export default storyReducer;