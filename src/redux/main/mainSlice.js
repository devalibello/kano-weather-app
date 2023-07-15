import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=kano&appid=ae7d13e04687fe4d2aa4951eff32b8bd';

const getWeather = createAsyncThunk(
  'kano/getWeather',
  async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const weatherSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
export { getWeather };
