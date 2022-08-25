import { configureStore} from '@reduxjs/toolkit';
import cSlice from './cSlice';

const store = configureStore({
  reducer: {
    counter: cSlice.reducer
  }
});


export default store;