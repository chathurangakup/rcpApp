const actions = {

  DEFAULT: "DEFAULT",
  DEFAULT_RESULT: "DEFAULT_RESULT",
  DEFAULT_ERROR: "DEFAULT_ERROR",

  GET_CATEGORIES:"GET_CATEGORIES",
  GET_CATEGORIES_RESULT:"GET_CATEGORIES_RESULT",
  GET_CATEGORIES_ERROR:"GET_CATEGORIES_ERROR",

  GET_VIDEO_LIST:"GET_VIDEO_LIST",
  GET_VIDEO_LIST_RESULT_SUCCESS:"GET_VIDEO_LIST_RESULT_SUCCESS",
  GET_VIDEO_LIST_RESULT_ERROR:"GET_VIDEO_LIST_RESULT_ERROR",
  GET_VIDEO_LIST_ERROR:"GET_VIDEO_LIST_ERROR",

  GET_VIDEO_PLAYER_LIST:"GET_VIDEO_PLAYER_LIST",
  GET_VIDEO_PLAYER_LIST_RESULT_SUCCESS:"GET_VIDEO_PLAYER_LIST_RESULT_SUCCESS",
  GET_VIDEO_PLAYER_LIST_RESULT_ERROR:"GET_VIDEO_PLAYER_LIST_RESULT_ERROR",
  GET_VIDEO_PLAYER_LIST_ERROR:"GET_VIDEO_PLAYER_LIST_ERROR",


  GET_PDF_LIST:"GET_PDF_LIST",
  GET_PDF_LIST_RESULT_SUCCESS:"GET_PDF_LIST_RESULT_SUCCESS",
  GET_PDF_LIST_RESULT_ERROR:"GET_PDF_LIST_RESULT_ERROR",
  GET_PDF_LIST_ERROR:"GET_PDF_LIST_ERROR",


  GET_PRODUCTS_HOME:"GET_PRODUCTS_HOME",
  GET_PRODUCTS_HOME_RESULT:"GET_PRODUCTS_HOME_RESULT",
  GET_PRODUCTS_HOME_ERROR:"GET_PRODUCTS_HOME_ERROR",

  SELECT_HOME_FAVOURITE_VIDEO:"SELECT_HOME_FAVOURITE_VIDEO",
  SELECT_HOME_FAVOURITE_VIDEO_RESULT_SUCCESS:"SELECT_HOME_FAVOURITE_VIDEO_RESULT_SUCCESS",
  SELECT_HOME_FAVOURITE_VIDEO_RESULT_ERROR:"SELECT_HOME_FAVOURITE_VIDEO_RESULT_ERROR",
  SELECT_HOME_FAVOURITE_VIDEO_ERROR:"SELECT_HOME_FAVOURITE_VIDEO_ERROR",

  SELECT_HOME_FAVOURITE_DOCUMENTS:"SELECT_HOME_FAVOURITE_DOCUMENTS",
  SELECT_HOME_FAVOURITE_DOCUMENTS_RESULT_SUCCESS:"SELECT_HOME_FAVOURITE_DOCUMENTS_RESULT_SUCCESS",
  SELECT_HOME_FAVOURITE_DOCUMENTS_RESULT_ERROR:"SELECT_HOME_FAVOURITE_DOCUMENTS_RESULT_ERROR",
  SELECT_HOME_FAVOURITE_DOCUMENTS_ERROR:"SELECT_HOME_FAVOURITE_DOCUMENTS_ERROR",


  CLEAR_PROPS:"CLEAR_PROPS",

  getProductsHome: (data) => ({
    type: actions.GET_PRODUCTS_HOME,
    data
  }),

  selecthomeFavouriteVedio:(access_token,vedioid)=>({
    type: actions.SELECT_HOME_FAVOURITE_VIDEO,
    access_token,
    vedioid
  }),

  selecthomeFavouriteDocuments:(access_token,docid)=>({
    type: actions.SELECT_HOME_FAVOURITE_DOCUMENTS,
    access_token,
    docid
  }),


  getVedioPlayerList:(access_token,categoryid,vedioid)=>({
    type: actions.GET_VIDEO_PLAYER_LIST,
     access_token,
     categoryid,
     vedioid
   }),



  getPdfList:(access_token,categoryid,productid,searchtext,orderby,pageno)=>({
    type: actions.GET_PDF_LIST,
     access_token,
     categoryid,
     searchtext,
     productid,
     orderby,
     pageno
   }),


  getVideoList:(access_token,categoryid,productid,searchtext,orderby,pageno)=>({
   type: actions.GET_VIDEO_LIST,
    access_token,
    categoryid,
    searchtext,
    productid,
    orderby,
    pageno
    

  }),


  getCategories:(access_token)=>({
    type: actions.GET_CATEGORIES,
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