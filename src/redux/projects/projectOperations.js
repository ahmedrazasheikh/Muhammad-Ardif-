// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Success } from '../../notifications/ToastSuccess';

export const projectsPost = createAsyncThunk('auth/projectsPost', async (credentials, thunAPI) => {
    try {
        const { email, projectname } = credentials;
        const response = await axios.post('/saveProject', {
            user_email: email,
            project_name: projectname,
            functionality: 'grading',
        });
        Success('New project successfully created!');
        return response.data;
    } catch (error) {
        thunAPI.rejectWithValue(error.message);
    }
});

export const projectsAdvisorPost = createAsyncThunk(
    'auth/projectsPost',
    async (credentials, thunAPI) => {
        try {
            // const { email, projectname } = credentials;
            // const response = await axios.post('/saveProject', {
            //     user_email: email,
            //     project_name: projectname,
            // });
            Success('New project successfully created!');
            // return response.data;
        } catch (error) {
            thunAPI.rejectWithValue(error.message);
        }
    }
);

export const projectsGet = createAsyncThunk(
    'auth/projectsGet',
    async function (credentials, thunAPI) {
        try {
            const response = await axios.get('/getProjects');
            return response.data;
        } catch (error) {
            return thunAPI.rejectWithValue(error.message);
        }
    }
);
export const createCriterion = createAsyncThunk(
    'auth/createCriterion',
    async function (credentials, thunAPI) {
        try {
            const { project_name, subcriteria, text, email, criterion } = credentials;

console.log(credentials)

            const response = await axios.post('/gradeProposal', {
                project_name: project_name,
                criterion: criterion.toLowerCase(),
                subcriteria: subcriteria,
                text: text,
                email: email.toLowerCase(),
            });

            return { data: response.data, status: response.status };
        } catch (error) {
            return thunAPI.rejectWithValue(error.message);
        }
    }
);

export const getData = createAsyncThunk('auth/getData', async function (credentials, thunAPI) {
    try {
        const { project_name, email, indicator, criterion } = credentials;

        const response = await axios.post('/getData', {
            project_name: project_name,
            criterion: criterion,
            indicator: indicator,
            email: email,
        });
        return { data: response.data, status: response.status };
    } catch (error) {
        return thunAPI.rejectWithValue(error.message);
    }
});
export const getScore = createAsyncThunk('auth/getScore', async function (credentials, thunAPI) {
    try {
        const { criterion, scores  } = credentials;
        const response = await axios.post('/getScore', {
            criterion: criterion,
            scores: scores,
        });

        return { data: response.data, status: response.status };
    } catch (error) {
        return thunAPI.rejectWithValue(error.message);
    }
});

export const projectRemove = createAsyncThunk(
    'auth/projectsGet',
    async function (credentials, thunAPI) {
        const { email, project } = credentials;
        try {
            const response = await axios.post('/deleteProject', {
                email: email,
                project_name: project,
            });
            Success('Project deleted');

            return response.data;
        } catch (error) {
            return thunAPI.rejectWithValue(error.message);
        }
    }
);
export const handleDownloadProject = createAsyncThunk(
    'auth/handleDownloadProject',
    async function (credentials, thunAPI) {
        const { functionality, email, project_name } = credentials;
        try {
            const response = await axios.post(
                '/generateGradingReport',
                {
                    functionality: functionality,
                    email: email,
                    project_name: project_name,
                },
                {
                    responseType: 'blob',
                }
            );

            const url = URL.createObjectURL(response.data);
            return { url, filename: project_name }; // return URL and filename
        } catch (error) {
            return thunAPI.rejectWithValue(error.message);
        }
    }
);
