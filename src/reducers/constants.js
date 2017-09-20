import keyMirror from 'key-mirror';

export default keyMirror({

  // global
  HANDLE_EXCEPTION: null,

  // for hot loading in react native
  SET_STATE: null,
  GET_STATE: null,
  SET_STORE: null,

  // device
  SET_PLATFORM: null,
  SET_VERSION: null,

  // qiniu
  REQUEST_QINIU_TOKEN: null,
  REQUEST_QINIU_TOKEN_SUCCESS: null,
  REQUEST_QINIU_TOKEN_FAILURE: null,
  UPLOAD_IMAGE: null,
  UPLOAD_ATTACH: null,

  // auth
  SESSION_TOKEN_REQUEST: null,
  SESSION_TOKEN_SUCCESS: null,
  SESSION_TOKEN_FAILURE: null,

  DELETE_TOKEN_REQUEST: null,
  DELETE_TOKEN_SUCCESS: null,

  ON_LOGIN_STATE_CHANGE: null,
  LOGOUT: null,

  SIGNUP_REQUEST: null,
  SIGNUP_SUCCESS: null,
  SIGNUP_FAILURE: null,

  LOGIN_REQUEST: null,
  LOGIN_SUCCESS: null,
  LOGIN_FAILURE: null,

  LOGGED_IN: null,
  LOGGED_OUT: null,

  RESET_PASSWORD_REQUEST: null,
  RESET_PASSWORD_SUCCESS: null,
  RESET_PASSWORD_FAILURE: null,

  SEND_CODE_REQUEST: null,
  SEND_CODE_SUCCESS: null,
  SEND_CODE_FAILURE: null,

  LOGOUT_REQUEST: null,
  LOGOUT_SUCCESS: null,
  LOGOUT_FAILURE: null,

  SEND_ACTIVATE_EMAIL_REQUEST: null,
  SEND_ACTIVATE_EMAIL_SUCCESS: null,
  SEND_ACTIVATE_EMAIL_FAILURE: null,

  // profile
  GET_PROFILE_REQUEST: null,
  GET_PROFILE_SUCCESS: null,
  GET_PROFILE_FAILURE: null,

  GET_NAMECARD_REQUEST: null,
  GET_NAMECARD_SUCCESS: null,
  GET_NAMECARD_FAILURE: null,

  PROFILE_UPDATE_REQUEST: null,
  PROFILE_UPDATE_SUCCESS: null,
  PROFILE_UPDATE_FAILURE: null,

  PERFECT_REQUEST: null,
  PERFECT_SUCCESS: null,
  PERFECT_FAILURE: null,

  CHANGE_NICKNAME_REQUEST: null,
  CHANGE_NICKNAME_SUCCESS: null,
  CHANGE_NICKNAME_FAILURE: null,

  CHANGE_MOBILE_REQUEST: null,
  CHANGE_MOBILE_SUCCESS: null,
  CHANGE_MOBILE_FAILURE: null,

  CHANGE_COMPANY_REQUEST: null,
  CHANGE_COMPANY_SUCCESS: null,
  CHANGE_COMPANY_FAILURE: null,

  CHANGE_PASSWORD_REQUEST: null,
  CHANGE_PASSWORD_SUCCESS: null,
  CHANGE_PASSWORD_FAILURE: null,

  CHANGE_SWITCH_REQUEST: null,
  CHANGE_SWITCH_SUCCESS: null,
  CHANGE_SWITCH_FAILURE: null,

  // account third
  GET_THIRD_LOGIN_REQUEST: null,
  GET_THIRD_LOGIN_SUCCESS: null,
  GET_THIRD_LOGIN_FAILURE: null,

  REDIRECT_OAUTH_REQUEST: null,
  REDIRECT_OAUTH_SUCCESS: null,
  REDIRECT_OAUTH_FAILURE: null,

  BIND_THIRD_ACCOUNT_REQUEST: null,
  BIND_THIRD_ACCOUNT_SUCCESS: null,
  BIND_THIRD_ACCOUNT_FAILURE: null,

  GET_BINDED_THIRD_REQUEST: null,
  GET_BINDED_THIRD_SUCCESS: null,
  GET_BINDED_THIRD_FAILURE: null,

  // Case
  CREATE_CASE_REQUEST: null,
  CREATE_CASE_SUCCESS: null,
  CREATE_CASE_FAILURE: null,

  MODIFY_CASE_REQUEST: null,
  MODIFY_CASE_SUCCESS: null,
  MODIFY_CASE_FAILURE: null,

  REJECT_CASE_REQUEST: null,
  REJECT_CASE_SUCCESS: null,
  REJECT_CASE_FAILURE: null,

  // Form type, for form to change render ui
  FORGOT_PASSWORD: null,
  LOGIN: null,
  REGISTER: null,

  // Product List
  GET_PRODUCT_LIST_REQUEST: null,
  GET_PRODUCT_LIST_SUCCESS: null,
  GET_PRODUCT_LIST_FAILURE: null,

  // Product
  GET_PRODUCT_DETAIL: null,
  GET_PRODUCT_DETAIL_REQUEST: null,
  GET_PRODUCT_DETAIL_SUCCESS: null,
  GET_PRODUCT_DETAIL_FAILURE: null,

  CREATE_PRODUCT_REQUEST: null,
  CREATE_PRODUCT_SUCCESS: null,
  CREATE_PRODUCT_FAILURE: null,


  BEFORE_CREATE_PRODUCT_REQUEST: null,
  BEFORE_CREATE_PRODUCT_SUCCESS: null,
  BEFORE_CREATE_PRODUCT_FAILURE: null,
  MODIFY_PRODUCT_REQUEST: null,
  MODIFY_PRODUCT_SUCCESS: null,
  MODIFY_PRODUCT_FAILURE: null,
  CANCEL_PRODUCT_REQUEST: null,
  CANCEL_PRODUCT_SUCCESS: null,
  CANCEL_PRODUCT_FAILURE: null,

  // Case List
  GET_CASE_LIST_REQUEST: null,
  GET_CASE_LIST_SUCCESS: null,
  GET_CASE_LIST_FAILURE: null,

  // Case
  GET_KASE_DETAIL_REQUEST: null,
  GET_KASE_DETAIL_SUCCESS: null,
  GET_KASE_DETAIL_FAILURE: null,
  GET_KASE_DETAIL: null,

  // BidAuth
  GET_APPLY_LIST_REQUEST: null,
  GET_APPLY_LIST_SUCCESS: null,
  GET_APPLY_LIST_FAILURE: null,

  PASS_BID_AUTH_REQUEST: null,
  PASS_BID_AUTH_SUCCESS: null,
  PASS_BID_AUTH_FAILURE: null,

  REJECT_BID_AUTH_REQUEST: null,
  REJECT_BID_AUTH_SUCCESS: null,
  REJECT_BID_AUTH_FAILURE: null,

  APPLY_BID_AUTH_REQUEST: null,
  APPLY_BID_AUTH_SUCCESS: null,
  APPLY_BID_AUTH_FAILURE: null,

  // Bid
  START_BID_REQUEST: null,
  START_BID_REQUEST_SUCCESS: null,
  START_BID_REQUEST_FAILURE: null,
  DROP_BID_REQUEST: null,
  DROP_BID_SUCCESS: null,
  DROP_BID_FAILURE: null,
  WIN_BID_REQUEST: null,
  WIN_BID_SUCCESS: null,
  WIN_BID_FAILURE: null,
  REJECT_BID_REQUEST: null,
  REJECT_BID_SUCCESS: null,
  REJECT_BID_FAILURE: null,
  SHARE_CUSTOMER_INFO_REQUEST: null,
  SHARE_CUSTOMER_INFO_SUCCESS: null,
  SHARE_CUSTOMER_INFO_FAILURE: null,

  // comment list
  GET_COMMENT_LIST_REQUEST: null,
  GET_COMMENT_LIST_SUCCESS: null,
  GET_COMMENT_LIST_FAILURE: null,

  SAVE_COMMENT_REQUEST: null,
  SAVE_COMMENT_SUCCESS: null,
  SAVE_COMMENT_FAILURE: null,

  DELETE_COMMENT_REQUEST: null,
  DELETE_COMMENT_SUCCESS: null,
  DELETE_COMMENT_FAILURE: null,

  // inbox
  GET_MSG_LIST_REQUEST: null,
  GET_MSG_LIST_SUCCESS: null,
  GET_MSG_LIST_FAILURE: null,

  GET_NEW_MSG_COUNT_REQUEST: null,
  GET_NEW_MSG_COUNT_SUCCESS: null,
  GET_NEW_MSG_COUNT_FAILURE: null,

  CLEAR_NEW_MSG_COUNT_REQUEST: null,
  CLEAR_NEW_MSG_COUNT_SUCCESS: null,
  CLEAR_NEW_MSG_COUNT_FAILURE: null,

  // nav
  SET_DOCUMENT_TITLE: null,
});
