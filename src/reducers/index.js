import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import notification from './notification';
import contents from './contents';
import mypage from './mypage';
import main from './main';

const reducer = combineReducers({
  auth,
  notification,
  contents,
  mypage,
  main,
});

export default reducer;
