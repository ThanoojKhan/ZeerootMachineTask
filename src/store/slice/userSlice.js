import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    role: null,
    token: null
};

const userSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.name = null;
            state.token = null;
            state.role = null;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice;

// The user slice is not being used in this app as it's not required according to the assignment statements. 
