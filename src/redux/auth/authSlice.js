import { createSlice } from '@reduxjs/toolkit';
import { signin, signup, refreshUser, verify, signout } from './authOperations';

const SET_SUBSCRIPTION = 'SET_SUBSCRIPTION';

const initialState = {
    user: {
        email: null,
        firstname: null,
        lastname: null,
    },
    verification_code: null,
    token: null,
    isPending: false,
    isLoggedIn: false,
    isRefreshing: false,
    needsSignin: false,
    error: null,
};

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            //Signup--------------------------------------
            .addCase(signup.pending, (state, action) => {
                state.isPending = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
                state.token = action.payload.jwt_token;
                state.isLoggedIn = true;
                state.isPending = false;
            })
            .addCase(signup.rejected, (state, action) => {
                return state;
            })
            .addCase(SET_SUBSCRIPTION, (state, action) => {
                state.user = {
                    ...state.user,
                    plan: action.payload,
                };
            })

            //Signin----------------------------------------
            .addCase(signin.pending, (state, action) => {
                state.isPending = true;
                state.isRefreshing = true;
            })

            .addCase(signin.fulfilled, (state, action) => {
                state.token = action.payload.jwt_token;
                state.user.email = action.payload.email;
                state.user.firstname = action.payload.firstname;
                state.user.lastname = action.payload.lastname;
                state.isLoggedIn = true;
    
                state.isPending = false;
                state.isRefreshing = false;
            })

            .addCase(signin.rejected, (state, action) => {
                state.isPending = false;
                state.isRefreshing = false;
            })

            //Verify----------------------------------------
            .addCase(verify.pending, (state, action) => {
                state.isPending = true;
            })
            .addCase(verify.fulfilled, (state, action) => {
                state.verification_code = action.payload.verification_code;
                state.isPending = false;
            })

            //Refreshing-------------------------------------------
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.user.firstname = action.payload.firstname;
                state.user.lastname = action.payload.lastname;
                state.token = action.payload.token;
                state.isRefreshing = false;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.needsSignin = action.payload.needsSignin;
                state.error = action.payload.message;
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })

            //Signout-------------------------------------------
            .addCase(signout.fulfilled, state => {
                state.user = { firstname: null, lastname: null, email: null };
                state.isLoggedIn = false;
                state.token = null;
            });
    },
});
