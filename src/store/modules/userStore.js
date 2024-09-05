import { createSlice } from '@reduxjs/toolkit';
import { login } from '@/api/login';
const userStore = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      userName: '',
      nickName: '',
      email: '',
      mobile: '',
      sex: 0,
      avatar: '',
      roles: ['admin'],
      perms: [],
      permissions: [],
      isPlatFormAccount: false,
      doctorIdList: null
    }
  },
  reducers: {
    // 同步
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    }
  }
});

const { setUserInfo } = userStore.actions;
const reducer = userStore.reducer;
// 异步请求
const fetchUserInfo = (payload) => {
  return async (dispatch) => {
    let [err, res] = await login(payload);
    // 提交错误,重置code码
    if (err) {
      console.log(err);
    }
    let { data } = res;
    dispatch(setUserInfo(data));
    console.log(data, '登陆');
  };
};
export { setUserInfo, fetchUserInfo };
export default reducer;
