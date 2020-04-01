import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://api.rcpanz.com.au';
const getlogoutURL=baseUrl+'/api/logout';
const getIndustriesURL=baseUrl+'/api/admin/industries/select';
const getCountriesURL=baseUrl+'/api/admin/country/select';
const getProfileDetailsURL=baseUrl+'/api/customer/profile';
const editProfileDetailsURL=baseUrl+'/api/customer/mobile/profile';
const changePasswordURL=baseUrl+'/api/customer/mobile/security'



export function* logout() {
  yield takeEvery(actions.LOGOUT, function* (payload) {
  
    const url = getlogoutURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(url)
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":'Bearer '+payload.access_token
        },
        body:''
      });
      const result = yield response.json();
      console.log(result)
      console.log(url);
    
      if (response.ok) {
        yield put({ type: actions.LOGOUT_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.LOGOUT_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.LOGOUT_ERROR });
      console.log(error);
    }
  });
}


export function* getProfiledetails() {
  yield takeEvery(actions.GET_PROFILE_DETAILS, function* (payload) {
  
    const url = getProfileDetailsURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(url)
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":'Bearer '+payload.access_token
        },
        body:''
      });
      const result = yield response.json();
      console.log(result)
      console.log(url);
    
      if (response.ok) {
        yield put({ type: actions.GET_PROFILE_DETAILS_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_PROFILE_DETAILS_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_PROFILE_DETAILS_ERROR });
      console.log(error);
    }
  });
}


export function* editProfiledetails() {
  yield takeEvery(actions.EDIT_PROFILE_DETAILS, function* (payload) {
  
    const url = editProfileDetailsURL;
    console.log(url) //'https://api.winmehub.com/v1/api/signup'
    console.log(payload.data)
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":'Bearer '+payload.access_token
        },
        body: JSON.stringify(payload.data)
      });
      const result = yield response.json();
      console.log(result)
      console.log(url);
    
      if (response.ok) {
        yield put({ type: actions.EDIT_PROFILE_DETAILS_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.EDIT_PROFILE_DETAILS_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.EDIT_PROFILE_DETAILS_ERROR });
      console.log(error);
    }
  });
}



export function* changePassword() {
  yield takeEvery(actions.CHANGE_PASSWORD, function* (payload) {
  
    const url = changePasswordURL;
    console.log(url) //'https://api.winmehub.com/v1/api/signup'
    console.log(payload.data)
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":'Bearer '+payload.access_token
        },
        body: JSON.stringify(payload.data)
      });
      const result = yield response.json();
      console.log(result)
      console.log(url);
    
      if (response.ok) {
        yield put({ type: actions.CHANGE_PASSWORD_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.CHANGE_PASSWORD_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.EDIT_PROFILE_DETAILS_ERROR });
      console.log(error);
    }
  });
}






export function* getIndustries() {
  yield takeEvery(actions.GET_INDUSTRIES, function* (payload) {
  
    const url = getIndustriesURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: ''
      });
      const result = yield response.json();
      console.log(result)
      console.log(url);
    
      if (response.ok) {
        yield put({ type: actions.GET_INDUSTRIES_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_INDUSTRIES_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_INDUSTRIES_ERROR });
      console.log(error);
    }
  });
}



export function* getCountries() {
  yield takeEvery(actions.GET_COUNTRIES, function* (payload) {
  
    const url = getCountriesURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body:''
      });
      const result = yield response.json();
      console.log(result)
      console.log(url);
    
      if (response.ok) {
        yield put({ type: actions.GET_COUNTRIES_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_COUNTRIES_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_COUNTRIES_ERROR });
      console.log(error);
    }
  });
}








export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
    fork(logout),
    fork(getCountries),
    fork(getIndustries),
    fork(getProfiledetails),
    fork(editProfiledetails),
    fork(changePassword)
  
   
  ]);
}
