import { Map } from "immutable";

import favouriteActions from "./actions";

const favoritevedioListResult=undefined;
const favoritedocumentsListResult=undefined;
const selectVedioResult=undefined;
const vedioPlayerListResult=undefined
const selectDocumentResult=undefined
const initState = new Map({
  favoritevedioListResult,
  favoritedocumentsListResult,
  selectVedioResult,
  vedioPlayerListResult,
  selectDocumentResult
  
});

export default function favouriteReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case favouriteActions.CLEAR_PROPS:
           return{
               ...state,
               favoritevedioListResult:undefined,
               favoritedocumentsListResult:undefined,
               vedioPlayerListResult:undefined,
               selectVedioResult:undefined,
               selectDocumentResult:undefined
          }


          case favouriteActions.GET_FAVOURITE_VEDIOS:
            return{
              
              loading:true
            }
            case favouriteActions.GET_FAVOURITE_VEDIOS_RESULT_SUCCESS:
              return{
                favoritevedioListResult:action.result.result,
                loading:false
            }
            case favouriteActions.GET_FAVOURITE_VEDIOS_RESULT_ERROR:
               return{
                favoritevedioListResult:'err',
                loading:false
              }
            case favouriteActions.GET_FAVOURITE_VEDIOS_ERROR:
              return{
                  loading:false
                }


                case favouriteActions.GET_FAVOURITE_DOCUMENTS:
                  return{
                    
                    loading:true
                  }
                  case favouriteActions.GET_FAVOURITE_DOCUMENTS_RESULT_SUCCESS:
                    return{
                      favoritedocumentsListResult:action.result.result,
                      loading:false
                  }
                  case favouriteActions.GET_FAVOURITE_DOCUMENTS_RESULT_ERROR:
                     return{
                      favoritedocumentsListResult:'err',
                      loading:false
                    }
                  case favouriteActions.GET_FAVOURITE_DOCUMENTS_ERROR:
                    return{
                        loading:false
                      }
      

                  case favouriteActions.SELECT_FAVOURITE_VIDEO:
                  return{
                    
                    loading:true
                  }
                  case favouriteActions.SELECT_FAVOURITE_VIDEO_RESULT_SUCCESS:
                    return{
                      selectVedioResult:action.result.result,
                      loading:false
                  }
                  case favouriteActions.SELECT_FAVOURITE_VIDEO_RESULT_ERROR:
                     return{
                      selectVedioResult:'err',
                     
                      loading:false
                    }
                  case favouriteActions.SELECT_FAVOURITE_VIDEO_ERROR:
                    return{
                        loading:false
                      }



                      case favouriteActions.SELECT_FAVOURITE_DOCUMENTS:
                  return{
                    
                    loading:true
                  }
                  case favouriteActions.SELECT_FAVOURITE_DOCUMENTS_RESULT_SUCCESS:
                    return{
                      selectDocumentResult:action.result.result,
                      loading:false
                  }
                  case favouriteActions.SELECT_FAVOURITE_DOCUMENTS_RESULT_ERROR:
                     return{
                      selectDocumentResult:'err',
                     
                      loading:false
                    }
                  case favouriteActions.SELECT_FAVOURITE_DOCUMENTS_ERROR:
                    return{
                        loading:false
                      }



                      case favouriteActions.GET_VIDEO_PLAYER_LIST:
                        return{
                         
                      
                          loading:true
                
                        }
                        case favouriteActions.GET_VIDEO_PLAYER_LIST_RESULT_SUCCESS:
                          return{
                            vedioPlayerListResult:action.result,
                            loading:false
                          }
                          case favouriteActions.GET_VIDEO_PLAYER_LIST_RESULT_ERROR:
                            return{
                              vedioPlayerListResult:'err',
                              loading:false
                            }
                          case favouriteActions.GET_VIDEO_PLAYER_LIST_ERROR:
                            return{
                            
                              loading:false
                            }
      
                  
      
        
      
      

    case favouriteActions.DEFAULT_RESULT:
      return state;
    case favouriteActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
