import { Map } from "immutable";

import homeActions from "./actions";


const catagoryResult=undefined
const pdfListResult=undefined
const vedioPlayerListResult=undefined
const selecthomeDocumentResult=undefined
const selecthomeVedioResult=undefined;
const productsArray=undefined
const initState = new Map({
  catagoryResult,
  pdfListResult,
  vedioPlayerListResult,
  selecthomeDocumentResult,
  selecthomeVedioResult,
  productsArray
  
});

export default function homeReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case homeActions.CLEAR_PROPS:
           return{
               ...state,
               catagoryResult:undefined,
               pdfListResult:undefined,
               vedioPlayerListResult:undefined,
               selecthomeVedioResult:undefined,
               selecthomeDocumentResult:undefined,
               productsArray:undefined
              
          }


          case homeActions.GET_PRODUCTS_HOME:
            return{
              ...state,
              loading:true
            }
      
      case homeActions.GET_PRODUCTS_HOME_RESULT:
              return{
                productsArray:action.result.result,
                loading:false
      
              }
        
      case homeActions.GET_PRODUCTS_HOME_ERROR:
                  return{
                    productsArray:undefined,
                    loading:false
                  }






          case homeActions.GET_CATEGORIES:
            return{
              successEmail:'success',
          
              loading:true
    
            }
            case homeActions.GET_CATEGORIES_RESULT:
              return{
                 catagoryResult:action.result,
                loading:false
              }
              case homeActions.GET_CATEGORIES_ERROR:
                return{
                
                  loading:false
                }



          case homeActions.GET_VIDEO_LIST:
            return{
              successEmail:'success',
          
              loading:true
    
            }
            case homeActions.GET_VIDEO_LIST_RESULT_SUCCESS:
              return{
                vedioListResult:action.result.result,
                loading:false
              }
              case homeActions.GET_VIDEO_LIST_RESULT_ERROR:
                return{
                  vedioListResult:'err',
                  loading:false
                }
              case homeActions.GET_VIDEO_LIST_ERROR:
                return{
                
                  loading:false
                }

      

                case homeActions.GET_VIDEO_PLAYER_LIST:
                  return{
                   
                
                    loading:true
          
                  }
                  case homeActions.GET_VIDEO_PLAYER_LIST_RESULT_SUCCESS:
                    return{
                      vedioPlayerListResult:action.result,
                      loading:false
                    }
                    case homeActions.GET_VIDEO_PLAYER_LIST_RESULT_ERROR:
                      return{
                        vedioPlayerListResult:'err',
                        loading:false
                      }
                    case homeActions.GET_VIDEO_PLAYER_LIST_ERROR:
                      return{
                      
                        loading:false
                      }

            



                      case homeActions.SELECT_HOME_FAVOURITE_VIDEO:
                        return{
                          
                          loading:true
                        }
                        case homeActions.SELECT_HOME_FAVOURITE_VIDEO_RESULT_SUCCESS:
                          return{
                            selecthomeVedioResult:action.result.result,
                            loading:false
                        }
                        case homeActions.SELECT_HOME_FAVOURITE_VIDEO_RESULT_ERROR:
                           return{
                            selecthomeVedioResult:'err',
                           
                            loading:false
                          }
                        case homeActions.SELECT_HOME_FAVOURITE_VIDEO_ERROR:
                          return{
                              loading:false
                            }
      
      
      
                      case homeActions.SELECT_HOME_FAVOURITE_DOCUMENTS:
                        return{
                          
                          loading:true
                        }
                        case homeActions.SELECT_HOME_FAVOURITE_DOCUMENTS_RESULT_SUCCESS:
                          return{
                            selecthomeDocumentResult:action.result.result,
                            loading:false
                        }
                        case homeActions.SELECT_HOME_FAVOURITE_DOCUMENTS_RESULT_ERROR:
                           return{
                            selecthomeDocumentResult:'err',
                           
                            loading:false
                          }
                        case homeActions.SELECT_HOME_FAVOURITE_DOCUMENTS_ERROR:
                          return{
                              loading:false
                            }
      
               

                      // case homeActions.GET_VIDEO:
                      //   return{
                      //     successEmail:'success',
                      
                      //     loading:true
                
                      //   }
                      //   case homeActions.GET_VIDEO_RESULT_SUCCESS:
                      //     return{
                      //       vedioPlayerListResult:action.result.result,
                      //       loading:false
                      //     }
                      //     case homeActions.GET_VIDEO_RESULT_ERROR:
                      //       return{
                      //         vedioPlayerListResult:'err',
                      //         loading:false
                      //       }
                      //     case homeActions.GET_VIDEO_LIST_ERROR:
                      //       return{
                            
                      //         loading:false
                      //       }
            
      
      



                case homeActions.GET_PDF_LIST:
                  return{
                   
                    loading:true
          
                  }
                  case homeActions.GET_PDF_LIST_RESULT_SUCCESS:
                    return{
                      pdfListResult:action.result.result,
                      loading:false
                    }
                    case homeActions.GET_PDF_LIST_RESULT_ERROR:
                      return{
                        pdfListResult:'err',
                        loading:false
                      }
                    case homeActions.GET_PDF_LIST_ERROR:
                      return{
                      
                        loading:false
                      }



        
      
      

    case homeActions.DEFAULT_RESULT:
      return state;
    case homeActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
