export const loginUser = (user, pass) => {
  return new Promise((resolve, reject) => {
    if (
      user.toLocaleLowerCase() === 'admin' &&
      pass.toLocaleLowerCase() === 'admin'
    ) {
      setTimeout(() => {
        resolve('Valid Login');
      }, 1500);
    } else {
      setTimeout(() => {
        reject(new Error('Invalid Login'));
      }, 1500);
    }
  });
};
