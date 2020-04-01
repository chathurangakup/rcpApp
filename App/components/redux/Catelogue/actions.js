const actions = {

  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

  GET_CATELOGUE_PDF:"GET_CATELOGUE_PDF",
  GET_CATELOGUE_PDF_RESULT:"GET_CATELOGUE_PDF_RESULT",
  GET_CATELOGUE_PDF_ERROR:"GET_CATELOGUE_PDF_ERROR",


  CLEAR_PROPS:"CLEAR_PROPS",



  getPdf:(access_token)=>({
    type: actions.GET_CATELOGUE_PDF,
    access_token
   
  }),



  defaultFunc: (value) => ({
    type: actions.DEFAULT,
    value
  }),
};

export default actions;