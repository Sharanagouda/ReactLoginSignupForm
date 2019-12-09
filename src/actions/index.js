import {
     REQUEST_LOGIN,
     REQUEST_SIGNUP, 
     REQUEST_SIGNUP_SUSCESSFULL, 
     REQUEST_LOGIN_SUCCESSFULL,
     SET_REDIRECT_URL
    } from "../actionTypes";

function requestLogin() {
    return {
        type: REQUEST_LOGIN
    };
}

function requestLoginSuccessfull() {
    return {
        type: REQUEST_LOGIN_SUCCESSFULL
    };
}

function requestSignup() {
    return {
        type: REQUEST_SIGNUP
    };
}

function requestSignupSuccessfull(){
    return {
        type: REQUEST_SIGNUP_SUSCESSFULL
    };
}

export function login(username, password){
    return dispatch => {
        dispatch(requestLogin());
        setTimeout(() => {
            dispatch(requestLoginSuccessfull());
        }, 1000);
    }
}

export function signup(email, password) {
    return dispatch => {
        dispatch(requestSignup());
        setTimeout(() => {
            dispatch(requestSignupSuccessfull());
        }, 1000)
    };
}

export function sendRedirectUrl(url) {
    return {
        type: SET_REDIRECT_URL,
        url
    }
}
