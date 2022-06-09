import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentuser: null,
};

const GlobalState = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        createUser: (state, { payload }) => {
            state.currentuser = payload;
        },
        signOut: (state) => {
            state.currentuser = null;
        }
    }
});

export const { createUser, signOut } = GlobalState.actions;

export default GlobalState.reducer;