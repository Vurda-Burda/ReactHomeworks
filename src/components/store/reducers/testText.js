import {TEST_TEXT} from "../actions/testActions";

const innitialStore = {
    text: "This registration page!",
};

export default function textReducer (store = innitialStore , action) {
    console.log("author-work");
    switch(action.type) {
        case TEST_TEXT:
            return action.text;
    default:
        return store;
    }
};
