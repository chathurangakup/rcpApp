import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://api.rcpanz.com.au';
const registerURL=baseUrl+'/api/customer/register';
const getIndustriesURL=baseUrl+'/api/admin/industries/select';
const getProductsURL=baseUrl+'/api/admin/products/select';
const getCountriesURL=baseUrl+'/api/admin/country/select';
const loginURL=baseUrl+'/api/customer/login';
const fogetPasswordURL=baseUrl+'/api/customer/forgottenpassword/app';
const updatePasswordURL=baseUrl+'/api/customer/updatepassword';


export function* updatePassword() {
  yield takeEvery(actions.UPDATE_PASSWORD, function* (payload) {
  console.log(payload.data)
    const url = updatePasswordURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify(payload.data)

      });
      const result = yield response.json();
     
      console.log(result)
    
      if (response.ok) {
      
        console.log(result.result.status+"lllllooo")
          if(result.result.status=='error'){
            yield put({ type: actions.UPDATE_PASSWORD_RESULT_ERROR, result });
            
          }else{
            yield put({ type: actions.UPDATE_PASSWORD_RESULT_SUCCESS, result });
            console.log(result.error+"ldkl")
          
          }
       
       
       // console.log(result)
      } 
    } catch (error) {
      yield put({ type: actions.UPDATE_PASSWORD_ERROR });
      console.log(error);
    }
  });
}





export function* fogetPassword() {
  yield takeEvery(actions.FOGET_PASSWORD, function* (payload) {
  console.log(payload.data)
    const url = fogetPasswordURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify(payload.data)

      });
      const result = yield response.json();
     
      console.log(result.error)
    
      if (response.ok) {
      
     
          if(result.error==undefined){
            console.log(result.error+"lkl")
            yield put({ type: actions.FOGET_PASSWORD_RESULT_SUCCESS, result });
          }else{
            console.log(result.error+"ldkl")
            yield put({ type: actions.FOGET_PASSWORD_RESULT_ERROR, result });
          }
       
       
       // console.log(result)
      } 
    } catch (error) {
      yield put({ type: actions.FOGET_PASSWORD_ERROR });
      console.log(error);
    }
  });
}



export function* loginUser() {
  yield takeEvery(actions.LOGIN_USER, function* (payload) {
  console.log(payload.data)
    const url = loginURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify(payload.data)

      });
      const result = yield response.json();
      console.log(result)
      console.log(url);
    
      if (response.ok) {
      
        if(result.result!=undefined){
          yield put({ type: actions.LOGIN_USER_RESULT_SUCCESS, result });
        }else{
          yield put({
            type: actions.LOGIN_USER_RESULT_ERROR,
            result
          
          });
        }
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.LOGIN_USER_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.LOGIN_USER_ERROR });
      console.log(error);
    }
  });
}


export function* registerEmail() {
  yield takeEvery(actions.REGISTER_EMAIL, function* (payload) {
  console.log(payload.data)
    const url = registerURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify(payload.data)

      });
      const result = yield response.json();
     // console.log(result)
      console.log(url);
    
      if (response.ok) {
       
        console.log(result)
        if(result.result!=undefined){
          yield put({ type: actions.REGISTER_EMAIL_RESULT_SUCCESS, result });
        }else{
          yield put({
            type: actions.REGISTER_EMAIL_RESULT_ERROR,
            result
          
          });
        }
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type:  actions.REGISTER_EMAIL_ERROR ,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.REGISTER_EMAIL_ERROR });
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


export function* getProducts() {
  yield takeEvery(actions.GET_PRODUCTS, function* (payload) {
    //const requestBody = payload.data;
   // console.log(requestBody);
    const url = getProductsURL; //'https://api.winmehub.com/v1/api/signup'
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
        yield put({ type: actions.GET_PRODUCTS_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_PRODUCTS_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_PRODUCTS_ERROR });
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
    fork(registerEmail),
    fork(getIndustries),
    fork(getProducts),
    fork(getCountries),
    fork(loginUser),
    fork(fogetPassword),
    fork(updatePassword)
   
  ]);
}
