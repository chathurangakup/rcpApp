const actions = {

  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

  LOGOUT:"LOGOUT",
  LOGOUT_RESULT:"LOGOUT_RESULT",
  LOGOUT_ERROR:"LOGOUT_ERROR",

  GET_INDUSTRIES:"GET_INDUSTRIES",
  GET_INDUSTRIES_RESULT:"GET_INDUSTRIES_RESULT",
  GET_INDUSTRIES_ERROR:"GET_INDUSTRIES_ERROR",

  GET_COUNTRIES:"GET_COUNTRIES",
  GET_COUNTRIES_RESULT:"GET_COUNTRIES_RESULT",
  GET_COUNTRIES_ERROR:"GET_COUNTRIES_ERROR",

  GET_PROFILE_DETAILS:"GET_PROFILE_DETAILS",
  GET_PROFILE_DETAILS_RESULT:"GET_PROFILE_DETAILS_RESULT",
  GET_PROFILE_DETAILS_ERROR:"GET_PROFILE_DETAILS_ERROR",

  EDIT_PROFILE_DETAILS:"EDIT_PROFILE_DETAILS",
  EDIT_PROFILE_DETAILS_RESULT:"EDIT_PROFILE_DETAILS_RESULT",
  EDIT_PROFILE_DETAILS_ERROR:"EDIT_PROFILE_DETAILS_ERROR",

  CHANGE_PASSWORD:"CHANGE_PASSWORD",
  CHANGE_PASSWORD_RESULT:"CHANGE_PASSWORD_RESULT",
  CHANGE_PASSWORD_ERROR:"CHANGE_PASSWORD_ERROR",


  CLEAR_PROPS:"CLEAR_PROPS",


  changePassword:(access_token,data)=>({
    type: actions.CHANGE_PASSWORD,
    access_token,
    data
  }),

  editProfiledetails:(access_token,data)=>({
    type: actions.EDIT_PROFILE_DETAILS,
    access_token,
    data
  }),

getProfiledetails:(access_token)=>({
  type: actions.GET_PROFILE_DETAILS,
  access_token
}),


  getCountries:()=>({
    type: actions.GET_COUNTRIES,
   
  }),

  getIndustries: (data) => ({
    type: actions.GET_INDUSTRIES,
    data
  }),

  logout:(access_token)=>({
    type: actions.LOGOUT,
    access_token
   
  }),

  clearProps: () =>({
    type: actions.CLEAR_PROPS,
    
  }),

  defaultFunc: (value) => ({
    type: actions.DEFAULT,
    value
  }),
};

export default actions;