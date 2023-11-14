import { configureStore } from '@reduxjs/toolkit';

import rootReducers from './Index';

const store = configureStore({ reducer: rootReducers });
console.log('store: ', store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
