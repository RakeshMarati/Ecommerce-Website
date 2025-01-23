// authService.js


const API_URL = "https://your-backend-api.com/api/auth/";

export const signIn = async (email, password) => {
  const response = await fetch(API_URL + 'signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

export const signUp = async (email, password) => {
  const response = await fetch(API_URL + 'signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
};
