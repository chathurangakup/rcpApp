import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://api.rcpanz.com.au';
const getCategogoriesURL=baseUrl+'/api/customer-mobile/w';
const getVedioListURL=baseUrl+'/api/customer/search/videos/'
const getPdfListURL=baseUrl+'/api/customer/search/documents/'
const getVedioPlayerListURL=baseUrl+'/api/media/videos/'
const selectFavouritevedioURL=baseUrl+'/api/customer/favourite/videos/';
const selectFavouritedocumentURL=baseUrl+'/api/customer/favourite/documents/';
const getProductsURL=baseUrl+'/api/admin/products/select';




export function* selecthomeFavouriteVedio() {
  yield takeEvery(actions.SELECT_HOME_FAVOURITE_VIDEO, function* (payload) {
  
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
          yield put({ type: actions.SELECT_HOME_FAVOURITE_VIDEO_RESULT_SUCCESS, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.SELECT_HOME_FAVOURITE_VIDEO_RESULT_ERROR, result });
         
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.SELECT_HOME_FAVOURITE_VIDEO_ERROR,
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





export function* selecthomeFavouriteDocuments() {
  yield takeEvery(actions.SELECT_HOME_FAVOURITE_DOCUMENTS, function* (payload) {
  
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
          yield put({ type: actions.SELECT_HOME_FAVOURITE_DOCUMENTS_RESULT_SUCCESS, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.SELECT_HOME_FAVOURITE_DOCUMENTS_RESULT_ERROR, result });
         
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.SELECT_HOME_FAVOURITE_DOCUMENTS_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.SELECT_HOME_FAVOURITE_DOCUMENTS_ERROR });
      console.log(error);
    }
  });
}




export function* getProductsHome() {
  yield takeEvery(actions.GET_PRODUCTS_HOME, function* (payload) {
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
        yield put({ type: actions.GET_PRODUCTS_HOME_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_PRODUCTS_HOME_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_PRODUCTS_HOME_ERROR });
      console.log(error);
    }
  });
}









export function* getCategories() {
  yield takeEvery(actions.GET_CATEGORIES, function* (payload) {
  
    const url = getCategogoriesURL; //'https://api.winmehub.com/v1/api/signup'
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
        yield put({ type: actions.GET_CATEGORIES_RESULT, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_CATEGORIES_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_CATEGORIES_ERROR });
      console.log(error);
    }
  });
}

export function* getVideoList() {
  yield takeEvery(actions.GET_VIDEO_LIST, function* (payload) {
  
    const url = getVedioListURL+payload.categoryid+'/'+payload.productid+'/m?search_key='+payload.searchtext+'&orderby='+payload.orderby+'&page='+payload.pageno; //'https://api.winmehub.com/v1/api/signup'
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
      console.log(result)
      console.log(url);
    
      if (response.ok) {
       
        if(result.result.status=='error'){
          yield put({ type: actions.GET_VIDEO_LIST_RESULT_ERROR, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.GET_VIDEO_LIST_RESULT_SUCCESS, result });
         
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_VIDEO_LIST_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_VIDEO_LIST_ERROR });
      console.log(error);
    }
  });
}





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







export function* getPdfList() {
  yield takeEvery(actions.GET_PDF_LIST, function* (payload) {
  
    const url = getPdfListURL+payload.categoryid+'/'+payload.productid+'/m?search_key='+payload.searchtext+'&orderby='+payload.orderby+'&page='+payload.pageno;    //'https://api.winmehub.com/v1/api/signup'
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
      console.log(result)
      console.log(url);
    
      if (response.ok) {
       
        if(result.result.status=='error'){
          yield put({ type: actions.GET_PDF_LIST_RESULT_ERROR, result });
         // console.log('lll')
        }else{
          yield put({ type: actions.GET_PDF_LIST_RESULT_SUCCESS, result });
         
        }
       
       // console.log(result)
      } else {
        console.log("result")
        yield put({
          type: actions.GET_PDF_LIST_ERROR,
          result
        
        });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_PDF_LIST_ERROR });
      console.log(error);
    }
  });
}






export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
    fork(getCategories),
    fork(getVideoList),
    fork(getPdfList),
    fork(getVedioPlayerList),
  fork(selecthomeFavouriteVedio),
    fork(selecthomeFavouriteDocuments),
    fork(getProductsHome)
  
   
  ]);
}
