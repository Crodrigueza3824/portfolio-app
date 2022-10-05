import { fabClasses } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
       page: 'skills',
       react: false,
       css: false,
       javascript: false,
       html: false,
       reactNative: false,
       skillsView: true,
       nodeJs: false,
       middleware: false,
       fireBase: false,
       mongoDb: false,
       postMan: false,
       environments: false,
       
    },
//Todos los reducers son Funciones puras y noo pueden ser asycronas
    reducers: {
        onClickCss: ( state  ) => {
           if ( state.css === false) {
            state.css = true;
            state.react = false;
            state.javascript = false;
            state.html = false;
            state.reactNative = false;
           }else {
            state.css = false;
           }
        },
        onClickReact: ( state ) => {
            if ( state.react === false ) {
                state.react = true;
                state.css = false;
                state.javascript = false;
                state.html = false;
                state.reactNative = false;
            } else{
                state.react = false;
            }
        },
        onClickJavascript: ( state ) => {
            if ( state.javascript === false ) {
                state.javascript = true;
                state.react = false;
                state.css = false;
                state.html = false;
                state.reactNative = false;
            } else {
                state.javascript = false;
            }
        },
        onClickHTML: ( state ) => {
            if ( state.html === false ) {
                state.html = true;
                state.react = false;
                state.javascript = false;
                state.css = false;
                state.reactNative = false;
            }else {
                state.html = false;
             
            }
        },
        onClickReactNative: ( state ) => {
            if ( state.reactNative === false ) {
                state.reactNative = true;
                state.react = false;
                state.css = false;
                state.html = false;
                state.javascript = false;

                
            } else {
                state.reactNative = false;
            }
        },
        onClickSkillsView: ( state ) => {
            ( state.skillsView ) ? state.skillsView = false: state.skillsView = true;
        },
        onClickNodeJs: ( state ) => {
            if( state.nodeJs === false ) {
                state.nodeJs = true;
                state.middleware = false;
                state.fireBase = false;
                state.mongoDb = false;
                state.postMan = false;
                state.environments = false;

            } else {
                state.nodeJs = false;
            }
        },
        onClickMiddleware: ( state ) => {
            if ( state.middleware ) {
                state.middleware = false;
            } else {
                state.middleware = true;
                state.nodeJs = false;
                state.fireBase = false;
                state.mongoDb = false;
                state.postMan = false;
                state.environments = false;
            }
        },
        onClickFireBase: ( state ) => {
            if ( state.fireBase ) {
                state.fireBase = false;
            } else {
                state.fireBase = true;
                state.nodeJs = false;
                state.middleware = false;
                state.mongoDb = false;
                state.postMan = false;
                state.environments = false;
            }
        },
        onClickMongoDb: ( state ) => {
            if ( state.mongoDb ) {
                state.mongoDb = false;
            } else {
                state.mongoDb = true;
                state.nodeJs = false;
                state.middleware = false;
                state.fireBase = false;
                state.postMan = false;
                state.environments = false;
            }
        },
        onClickPostMan: ( state ) => {
            if ( state.postMan ) {
                state.postMan = false;
            } else {
                state.postMan = true;
                state.nodeJs = false;
                state.middleware = false;
                state.fireBase = false;
                state.mongoDb = false;
                state.environments = false;
            }
        },
        onClickEnvironments: ( state ) => {
            if ( state.environments ) {
                state.environments = false;
            } else {
                state.environments = true;
                state.nodeJs = false;
                state.middleware = false;
                state.fireBase = false;
                state.mongoDb = false;
                state.postMan = false;
            }
        }

    }
});

// Action creators are generated for each case reducer function
export const { 
    
    onClickCss, 
    onClickReact, 
    onClickJavascript, 
    onClickHTML, 
    onClickReactNative, 
    onClickSkillsView,
    onClickNodeJs,
    onClickMiddleware,
    onClickFireBase,
    onClickMongoDb,
    onClickPostMan,
    onClickEnvironments,

} = portfolioSlice.actions;