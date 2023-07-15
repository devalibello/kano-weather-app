// import { configureStore } from '@reduxjs/toolkit';
// import mainReducer from './main/mainSlice';

// const store = configureStore({
//   reducer: {
//     main: mainReducer,
//   },
// });

// export default store;


import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import mainReducer from './main/mainSlice';

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
