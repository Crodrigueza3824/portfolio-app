import { useDispatch, useSelector } from "react-redux"
import { onClickCss, onClickReact, onClickHTML, onClickJavascript, onClickReactNative, onClickSkillsView, onClickNodeJs, onClickMiddleware, onClickFireBase, onClickMongoDb, onClickPostMan, onClickEnvironments } from "../store";






export const usePortfolioStore = () => {

    const { css, react, javascript, html, reactNative, skillsView } = useSelector( state => state.portfolio );

    const dispatch = useDispatch();


    const startChangingCss = () => {
        dispatch( onClickCss() );
    }

    const startChangingReact = () => {
        dispatch( onClickReact() );
    }

    const startChangingJavascript = () => {
        dispatch( onClickJavascript()  )
    }

    const startChangingHTML = () => {
        dispatch( onClickHTML()  )
    }

    const startChangingReactNative = () => {
        dispatch( onClickReactNative() )
    }

    const startChangingSkillsView = () => {
        dispatch( onClickSkillsView() )
    }

    const startChangingNodeJs = () => {
        dispatch( onClickNodeJs() )
    }

    const startChangingMiddleware = () => {
        dispatch( onClickMiddleware() )
    }

    const startChangingFireBase = () => {
        dispatch( onClickFireBase() )
    }

    const startChangingMongoDb = () => {
        dispatch( onClickMongoDb() )
    }

    const startChangingPostMan = () => {
        dispatch( onClickPostMan() )
    }

    const startChangingEnvironments = () => {
        dispatch( onClickEnvironments() )
    }



    return{

        //-Functions
        startChangingCss,
        startChangingReact,
        startChangingJavascript,
        startChangingHTML,
        startChangingReactNative,
        startChangingSkillsView,
        startChangingNodeJs,
        startChangingMiddleware,
        startChangingFireBase,
        startChangingMongoDb,
        startChangingPostMan,
        startChangingEnvironments,

    }

}

