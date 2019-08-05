const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Name 1' },
        { id: 2, name: 'Name 2' },
        { id: 3, name: 'Name 3' },
        { id: 4, name: 'Name 4' },
        { id: 5, name: 'Name 5' },
        { id: 6, name: 'Name 6' }
    ],
    messageData: [
        { id:1, message: 'message 1' },
        { id:2, message: 'message 2' },
        { id:3, message: 'message 3' },
        { id:4, message: 'message 4' },
        { id:5, message: 'message 5' },
        { id:6, message: 'message 6' }
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 7, message: body});
            return state;
        default:
            return state;
    }
}

export const sendNewMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, body: body
    }
}

export default dialogsReducer;