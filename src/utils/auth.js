import Cookies from 'js-cookie';

export const isLoggedIn = () => {
  console.log(!!Cookies.get('authToken'));
  return !!Cookies.get('authToken');
};

export const login = (token) => {
  Cookies.set('authToken', token, { expires: 1 }); // 1日有効
};

export const logout = () => {
  Cookies.remove('authToken');
};
