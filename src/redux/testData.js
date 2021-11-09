// in real, axios.post => and patch this in the redux store
export const database = [
  { carName: 'Ford', carPrice: 17000, carCode: 'FD' },
  { carName: 'Toyota', carPrice: 15000, carCode: 'TY' },
  { carName: 'Honda', carPrice: 20000, carCode: 'HD' },
  { carName: 'Nissan', carPrice: 17000, carCode: 'NS' },
  { carName: 'Tesla', carPrice: 17000, carCode: 'TSL' },
  { carName: 'HYONDAI', carPrice: 17000, carCode: 'HON' },
];

export const axios = {
  GET: (url) =>
    new Promise((resolve, reject) => {
      if (url === '/car') {
        setTimeout(() => resolve(database), 5000);
        // resolve(database);
      } else {
        reject(new Error('this is error message'));
      }
    }),
};
