export const fetchTodosApi = () => {
  return fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => {
      return res.json();
    })
    .catch(e => {
      return Promise.reject(handleError(e));
    });
};
