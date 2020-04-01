import { Map } from "immutable";

import startUpActions from "./actions";

const industriesArray=undefined;
const productsArray=undefined
const countriesArray=undefined
const successEmail=undefined
const loginsuccessEmail=undefined
const accesstoken=undefined
const fogetPasswordResult=undefined
const updatePasswordResult=undefined
const initState = new Map({
  industriesArray,
  productsArray,
  countriesArray,
  successEmail,
  loginsuccessEmail,
  accesstoken,
  fogetPasswordResult,
  updatePasswordResult
  
});

export default function startUpReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case startUpActions.CLEAR_PROPS:
           return{
               ...state,
               industriesArray:undefined,
               productsArray:undefined,
               successEmail:undefined,
               loginsuccessEmail:undefined,
               countriesArray:undefined,
               accesstoken:undefined,
               fogetPasswordResult:undefined,
               updatePasswordResult:undefined
                 
          }

          case startUpActions.LOGIN_USER:
            return{
              ...state,
              loading:true
            }
      
            case startUpActions.LOGIN_USER_RESULT_SUCCESS:
              return{
                loginsuccessEmail:'success',
                accesstoken:action.result,
                loading:false
      
              }
              case startUpActions.LOGIN_USER_RESULT_ERROR:
                return{
                  loginsuccessEmail:action.result.error,
                  loading:false
                }
                case startUpActions.LOGIN_USER_ERROR:
                  return{
                    loading:false
                  }





          case startUpActions.REGISTER_EMAIL:
            return{
              ...state,
              loading:true
            }
      
            case startUpActions.REGISTER_EMAIL_RESULT_SUCCESS:
              return{
                successEmail:'success',
            
                loading:false
      
              }
              case startUpActions.REGISTER_EMAIL_RESULT_ERROR:
                return{
                  successEmail:action.result.error,
                  loading:false
                }
                case startUpActions.REGISTER_EMAIL_ERROR:
                  return{
                  
                    loading:false
                  }


            case startUpActions.GET_INDUSTRIES:
            return{
              ...state,
              loading:true
            }
      
            case startUpActions.GET_INDUSTRIES_RESULT:
              return{
                industriesArray:action.result.result,
                loading:false
      
              }
        
                case startUpActions.GET_INDUSTRIES_ERROR:
                  return{
                   
                    loading:false
                  }



              case startUpActions.GET_PRODUCTS:
                    return{
                      ...state,
                      loading:true
                    }
              
              case startUpActions.GET_PRODUCTS_RESULT:
                      return{
                        productsArray:action.result.result,
                        loading:false
              
                      }
                
              case startUpActions.GET_PRODUCTS_ERROR:
                          return{
                            productsArray:undefined,
                            loading:false
                          }


                case startUpActions.GET_COUNTRIES:
                            return{
                              ...state,
                              loading:true
                            }
                      
                      case startUpActions.GET_COUNTRIES_RESULT:
                              return{
                                countriesArray:action.result.result,
                                loading:false
                      
                              }
                        
                      case startUpActions.GET_COUNTRIES_ERROR:
                                  return{
                                    countriesArray:undefined,
                                    loading:false
                                  }



                             case startUpActions.FOGET_PASSWORD:
                                    return{
                                      ...state,
                                      loading:true
                                    }
                              
                              case startUpActions.FOGET_PASSWORD_RESULT_SUCCESS:
                                      return{
                                        fogetPasswordResult:'success',
                                        loading:false
                              
                                      }
                              case startUpActions.FOGET_PASSWORD_RESULT_ERROR:
                                       return{
                                        fogetPasswordResult:'error',
                                          loading:false
                                
                                        }
                              case startUpActions.FOGET_PASSWORD_ERROR:
                                          return{
                                            fogetPasswordResult:undefined,
                                            loading:false
                                          }
        
      

                                          case startUpActions.UPDATE_PASSWORD:
                                            return{
                                              ...state,
                                              loading:true
                                            }
                                      
                                      case startUpActions.UPDATE_PASSWORD_RESULT_SUCCESS:
                                              return{
                                                updatePasswordResult:'success',
                                                loading:false
                                      
                                              }
                                      case startUpActions.UPDATE_PASSWORD_RESULT_ERROR:
                                               return{
                                                updatePasswordResult:'error',
                                                  loading:false
                                        
                                                }
                                      case startUpActions.UPDATE_PASSWORD_ERROR:
                                                  return{
                                                    updatePasswordResult:undefined,
                                                    loading:false
                                                  }
                
              
      

    case startUpActions.DEFAULT_RESULT:
      return state;
    case startUpActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
