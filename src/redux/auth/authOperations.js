import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorMessage } from '../../notifications/ToastError';
import { Success } from '../../notifications/ToastSuccess';

axios.defaults.baseURL = 'https://ahmed.aiscene.net';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthoHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk('auth/signup', async (credentials, thunAPI) => {
    try {
        const {
            country,
            email,
            firstName,
            lastName,
            organizationName,
            organizationType,
            password,
            phone,
            role,
        } = credentials;

        const response = await axios.post('/signup', {
            country: country,
            email: email,
            firstname: firstName,
            lastname: lastName,
            orgname: organizationName,
            orgtype: organizationType,
            password: password,
            phone: phone,
            role: role,
            plan: 'Silver',
        });

        setAuthHeader(response.data);

        Success('Signed up successfully');
        return response.data;
    } catch (error) {
        ErrorMessage('This email address is already associated with an account');
        return thunAPI.rejectWithValue(error.message);
    }
});

export const signin = createAsyncThunk('auth/signin', async (credentials, thunAPI) => {
    try {
        const response = await axios.post('/signin', {
            email: credentials.email,
            password: credentials.password,
        });
        setAuthHeader(response.data.jwt_token);
        Success('Logged in successfully');

        return response.data;
    } catch (error) {
        return thunAPI.rejectWithValue(error.message);
    }
});

export const verify = createAsyncThunk('auth/verify', async (credentials, thunAPI) => {
    try {
        const response = await axios.post('https://ahmed.aiscene.net/verifyEmail', {
            email: credentials.email,
            lastname: credentials.lastName,
        });

        return response.data;
    } catch (error) {
        return thunAPI.rejectWithValue(error.message);
    }
});

export const signout = createAsyncThunk('auth/signout', async (_, thunAPI) => {
    try {
        const response = await axios.post('/logout');
        clearAuthoHeader();
        return response.data;
    } catch (error) {
        return thunAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunAPI) => {
    const token = thunAPI.getState().auth.token;

    if (!token) {
        signout();
        return thunAPI.rejectWithValue('Not authorized');
    }
    setAuthHeader(token);
    try {
        const response = await axios.get('/getCurrent');
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return thunAPI.rejectWithValue({
                message: error.message,
                needsSignin: true,
            });
        }
        return thunAPI.rejectWithValue(error.message);
    }
});

export const sendEmailResetPassword = createAsyncThunk(
    'auth/reset',
    async (credentials, thunAPI) => {
        try {
            const response = await axios.post('/sendResetEmail', credentials);
            Success(`We sent a password reset link to ${credentials.email}`);
            localStorage.setItem('resetEmail', credentials.email);
            return response.data;
        } catch (error) {
            return thunAPI.rejectWithValue(error.message);
        }
    }
);

export const createNewPassword = createAsyncThunk('auth/reset', async (credentials, thunAPI) => {
    try {
        const response = await axios.post('/resetPassword', credentials);
        Success('Your password has been successfully reset');

        return response.data;
    } catch (error) {
        return thunAPI.rejectWithValue(error.message);
    }
});
