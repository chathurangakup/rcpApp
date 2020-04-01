import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://api.rcpanz.com.au';
const getPdfURL=baseUrl+'/api/customer/catalogues';



export function* getPdf() {
  yield takeEvery(actions.GET_CATELOGUE_PDF, function* (payload) {
  
    const url = getPdfURL; //'https://api.winmehub.com/v1/api/signup'
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
        yield put({ type: actions.GET_CATELOGUE_PDF_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_CATELOGUE_PDF_ERROR,
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
    fork(getPdf),
  
   
  ]);
}
