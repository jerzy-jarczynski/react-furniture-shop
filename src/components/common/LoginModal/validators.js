export const emailValidator = email => {
  if (!email) {
    return 'Email is required';
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return 'Incorrect email format';
  }
  return '';
};

export const passwordValidator = password => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 8) {
    return 'Password must have a minimum 8 characters';
  }
  return '';
};
