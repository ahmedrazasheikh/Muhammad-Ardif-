import { createSlice } from '@reduxjs/toolkit';
import {
    projectsPost,
    projectsGet,
    createCriterion,
    getData,
    getScore,
    // projectRemove,
} from './projectOperations';

export const projectReducer = createSlice({
    name: 'projects',
    initialState: {
        newProject: {
            projectname: null,
            proposal: null,
            whatTodo: null,
            selectedFunc: null,
        },
        getProject: [],

        gradeProject: {
            criterions: null,
            score: null,
            explanation: null,
            suggestions: null,
            responseStatus: null,
            text: null,
        },
        getDataResults: {
            criterions: '',
            score: '',
            explanation: '',
            suggestions: '',
            message: '',
            text: '',
        },
        getResultsIndicatorsScore: [],
        getResultsCriterionsScore: [],
    },
    extraReducers: builder => {
        builder
            .addCase(projectsPost.pending, (state, action) => {
                return state;
            })
            .addCase(projectsPost.fulfilled, (state, action) => {
                state.newProject = action.payload;
            })
            .addCase(projectsPost.rejected, (state, action) => {
                return state;
            })

            .addCase(projectsGet.pending, (state, action) => {
                return state;
            })
            .addCase(projectsGet.fulfilled, (state, action) => {
                state.getProject = action.payload.projects;
            })
            .addCase(projectsGet.rejected, (state, action) => {
                return state;
            })
            .addCase(createCriterion.pending, (state, action) => {
                return state;
            })
            .addCase(createCriterion.fulfilled, (state, action) => {
                if (!state.gradeProject.score) {
                    state.gradeProject.score = action.payload.data.score;
                }
                if (!state.gradeProject.explanation) {
                    state.gradeProject.explanation = action.payload.data.explanation;
                }
                if (!state.gradeProject.text) {
                    state.gradeProject.text = action.payload.data.text;
                }


                state.gradeProject.suggestions = action.payload.data.suggestions;
                state.gradeProject.responseStatus = action.payload.status;
                state.gradeProject.criterions = action.payload.data.criterion;
            })
            .addCase(createCriterion.rejected, (state, action) => {
                return state;
            })
            // .addCase(getData.pending, (state, action) => {
            //     // return state;
            // })
            .addCase(getData.fulfilled, (state, action) => {
                state.gradeProject.explanation = action.payload.data.explanation;
                state.gradeProject.text = action.payload.data.text;
                state.gradeProject.score = action.payload.data.score;
                
                state.getDataResults.message = action.payload.data.message;
                state.getDataResults.text = action.payload.data.text;
                state.getDataResults.score = action.payload.data.score;
                state.getDataResults.explanation = action.payload.data.explanation;
                state.getDataResults.suggestions = action.payload.data.suggestions;
                state.getDataResults.criterions = action.payload.data.criterion;
            })
            .addCase(getScore.fulfilled, (state, action) => {
                const newScore = action.payload.data.average_score;
                state.getResultsIndicatorsScore = newScore;
                state.getResultsCriterionsScore.push(newScore);
            });
        // .addCase(projectRemove.fulfilled, (state, action) => {
        //     state.getProject = action.payload.projects;
        // })
    },
});
