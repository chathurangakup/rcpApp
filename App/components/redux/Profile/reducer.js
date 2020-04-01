import { Map } from "immutable";

import profileActions from "./actions";

const industriesArray=undefined;
const countriesArray=undefined;
const editprofiledata=undefined;
const changepasswordresult=undefined
const initState = new Map({
  industriesArray,
  countriesArray,
  editprofiledata,
  changepasswordresult,
  
});

export default function profileReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case profileActions.CLEAR_PROPS:
           return{
               ...state,
               editprofiledata:undefined,
               changepasswordresult:undefined
              
          }

          case profileActions.GET_INDUSTRIES:
            return{
              ...state,
              loading:true
            }
      
            case profileActions.GET_INDUSTRIES_RESULT:
              return{
                industriesArray:action.result.result,
                loading:false
      
              }
        
                case profileActions.GET_INDUSTRIES_ERROR:
                  return{
                   
                    loading:false
                  }



            
                case profileActions.GET_COUNTRIES:
                            return{
                              ...state,
                              loading:true
                            }
                      
                      case profileActions.GET_COUNTRIES_RESULT:
                              return{
                                countriesArray:action.result.result,
                                loading:false
                      
                              }
                        
                      case profileActions.GET_COUNTRIES_ERROR:
                                  return{
                                    countriesArray:undefined,
                                    loading:false
                                  }

        

              case profileActions.GET_PROFILE_DETAILS:
                       return{
                          ...state,
                          loading:true
                       }
                              
              case profileActions.GET_PROFILE_DETAILS_RESULT:
                     return{
                         profiledataArray:action.result.result,
                         loading:false
                     }
                                
                 case profileActions.GET_PROFILE_DETAILS_ERROR:
                     return{
                         profiledataArray:undefined,
                           loading:false
                       }
                

                       case profileActions.EDIT_PROFILE_DETAILS:
                        return{
                           ...state,
                           loading:true
                        }
                               
               case profileActions.EDIT_PROFILE_DETAILS_RESULT:
                      return{
                         editprofiledata:action.result.result,
                          loading:false
                      }
                                 
                  case profileActions.EDIT_PROFILE_DETAILS_ERROR:
                      return{
                        editprofiledata:undefined,
                            loading:false
                        }






                        case profileActions.CHANGE_PASSWORD:
                          return{
                             ...state,
                             loading:true
                          }
                                 
                 case profileActions.CHANGE_PASSWORD_RESULT:
                        return{
                           changepasswordresult:action.result.result,
                            loading:false
                        }
                                   
                    case profileActions.CHANGE_PASSWORD_ERROR:
                        return{
                          changepasswordresult:undefined,
                              loading:false
                          }
                 
 



                case profileActions.LOGOUT:
                  return{
                    successEmail:'success',
                
                    loading:false
          
                  }
                  case profileActions.LOGOUT_RESULT:
                    return{
                     
                      loading:false
                    }
                    case profileActions.LOGOUT_ERROR:
                      return{
                      
                        loading:false
                      }
      
      
      

        
      
      

    case profileActions.DEFAULT_RESULT:
      return state;
    case profileActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
