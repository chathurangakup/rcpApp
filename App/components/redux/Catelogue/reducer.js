import { Map } from "immutable";

import catelogueActions from "./actions";

const initState = new Map({

  
});

export default function catelogueReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case catelogueActions.CLEAR_PROPS:
           return{
               ...state,
              
          }


          case catelogueActions.GET_CATELOGUE_PDF:
            return{
              successEmail:'success',
          
              loading:false
    
            }
            case catelogueActions.GET_CATELOGUE_PDF_RESULT:
              return{
               
                loading:false
              }
              case catelogueActions.GET_CATELOGUE_PDF_ERROR:
                return{
                
                  loading:false
                }



        
      
      

    case catelogueActions.DEFAULT_RESULT:
      return state;
    case catelogueActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
