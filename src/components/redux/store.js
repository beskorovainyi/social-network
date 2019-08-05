import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Post1', likesCount: 10 },
                { id: 2, message: 'Post2', likesCount: 20 },
                { id: 3, message: 'Post3', likesCount: 30 },
                { id: 4, message: 'Post4', likesCount: 40 },
                { id: 5, message: 'Post5', likesCount: 55 }
            ],
            newPostText: 'new text'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;