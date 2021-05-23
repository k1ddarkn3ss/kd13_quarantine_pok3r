export default () => {
  if (process.env.NODE_ENV === 'dev') {
    return {
      apiKey: process.env.API_KEY,
      authDomain: 'qpoker-dev.firebaseapp.com',
      databaseURL: 'https://qpoker-dev-default-rtdb.firebaseio.com',
      projectId: 'qpoker-dev',
      storageBucket: 'qpoker-dev.appspot.com',
      messagingSenderId: '424306671999',
      appId: '1:424306671999:web:7c98044d8d27c025435a4a',
      measurementId: 'G-YQHPHQLE2B',
    };
  } else {
    return {
      apiKey: process.env.API_KEY,
      authDomain: 'qpoker-dev.firebaseapp.com',
      databaseURL: 'https://qpoker-dev-default-rtdb.firebaseio.com',
      projectId: 'qpoker-dev',
      storageBucket: 'qpoker-dev.appspot.com',
      messagingSenderId: '424306671999',
      appId: '1:424306671999:web:7c98044d8d27c025435a4a',
      measurementId: 'G-YQHPHQLE2B',
    };
  }
};
