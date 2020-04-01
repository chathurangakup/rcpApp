import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://api.rcpanz.com.au';
const getFavouriteVedioURL=baseUrl+'/api/customer/viewfavourites/videos/w';
const getFavouriteDocumentsURL=baseUrl+'/api/customer/viewfavourites/documents/w';
const selectFavouritevedioURL=baseUrl+'/api/customer/favourite/videos/';
const selectFavouritedocumentURL=baseUrl+'/api/customer/favourite/documents/';
const getVedioPlayerListURL=baseUrl+'/api/media/videos/'



export function* getVedioPlayerList() {
  yield takeEvery(actions.GET_VIDEO_PLAYER_LIST, function* (payload) {
  
    const url = getVedioPlayerListURL+payload.categoryid+'/'+payload.vedioid+'/w'; //'https://api.winmehub.com/v1/api/signup'
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
       
        if(result.result=='error'){
          yield put({ type: actions.GET_VIDEO_PLAYER_LIST_RESULT_ERROR, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.GET_VIDEO_PLAYER_LIST_RESULT_SUCCESS, result });
         
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_VIDEO_PLAYER_LIST_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_VIDEO_PLAYER_LIST_ERROR });
      console.log(error);
    }
  });
}



export function* selectFavouriteVedio() {
  yield takeEvery(actions.SELECT_FAVOURITE_VIDEO, function* (payload) {
  
    const url = selectFavouritevedioURL+payload.vedioid; //'https://api.winmehub.com/v1/api/signup'
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
       
        if(result.result.status=='success'){
          yield put({ type: actions.SELECT_FAVOURITE_VIDEO_RESULT_SUCCESS, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.SELECT_FAVOURITE_VIDEO_RESULT_ERROR, result });
         
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.SELECT_FAVOURITE_VIDEO_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.SELECT_FAVOURITE_VIDEO_ERROR });
      console.log(error);
    }
  });
}





export function* selectFavouriteDocuments() {
  yield takeEvery(actions.SELECT_FAVOURITE_DOCUMENTS, function* (payload) {
  
    const url = selectFavouritedocumentURL+payload.docid; //'https://api.winmehub.com/v1/api/signup'
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
       
        if(result.result.status=='success'){
          yield put({ type: actions.SELECT_FAVOURITE_DOCUMENTS_RESULT_SUCCESS, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.SELECT_FAVOURITE_DOCUMENTS_RESULT_ERROR, result });
         
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.SELECT_FAVOURITE_DOCUMENTS_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.SELECT_FAVOURITE_DOCUMENTS_ERROR });
      console.log(error);
    }
  });
}








export function* getFavouriteVedioList() {
  yield takeEvery(actions.GET_FAVOURITE_VEDIOS, function* (payload) {
  
    const url = getFavouriteVedioURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(payload.access_token)
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
     
      console.log(url);
    
      if (response.ok) {
       
        if(result.result.status=='error'){
          yield put({ type: actions.GET_FAVOURITE_VEDIOS_RESULT_ERROR, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.GET_FAVOURITE_VEDIOS_RESULT_SUCCESS, result });
          console.log(result)
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_FAVOURITE_VEDIOS_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_FAVOURITE_VEDIOS_ERROR });
      console.log(error);
    }
  });
}


export function* getFavouriteDocumentList() {
  yield takeEvery(actions.GET_FAVOURITE_DOCUMENTS, function* (payload) {
  
    const url = getFavouriteDocumentsURL; //'https://api.winmehub.com/v1/api/signup'
    console.log(payload.access_token)
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
     
      console.log(url);
    
      if (response.ok) {
       
        if(result.result.status=='error'){
          yield put({ type: actions.GET_FAVOURITE_DOCUMENTS_RESULT_ERROR, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.GET_FAVOURITE_DOCUMENTS_RESULT_SUCCESS, result });
          console.log(result)
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_FAVOURITE_DOCUMENTS_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_FAVOURITE_DOCUMENTS_ERROR });
      console.log(error);
    }
  });
}





export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
    fork(getFavouriteVedioList),
    fork(getFavouriteDocumentList),
    fork(selectFavouriteVedio),
    fork(getVedioPlayerList),
    fork(selectFavouriteDocuments)
  
   
  ]);
}
