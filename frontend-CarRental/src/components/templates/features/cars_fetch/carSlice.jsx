import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { carService, locService } from "./carService";

const initialState = {
  cars: null,
  locations: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const viewLocations = createAsyncThunk(
  "cars/locations",
  async (thunkApi) => {
    try {
      return await locService.viewLocations();
    } catch (error) {
      let message = 
        (error.response && error.response.data && error.response.data.message) || 
        error.message || 
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getCar = createAsyncThunk(
  "cars/carById",
  async (car_id, thunkApi) => {
    try {
      return await carService.getCar(car_id);
    } catch (error) {
      let message = 
        (error.response && error.response.data && error.response.data.message) || 
        error.message || 
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const availableCars = createAsyncThunk(
  "cars/carAtLocation",
  async (location, thunkApi) => {
    try {
      return await carService.availableCars(location);
    } catch (error) {
      let message = 
        (error.response && error.response.data && error.response.data.message) || 
        error.message || 
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const availableAtDate = createAsyncThunk(
  "cars/availableAtDate",
  async (pickup_date, thunkApi) => {
    try {
      return await carService.availableAtDate(pickup_date);
    } catch (error) {
      let message = 
        (error.response && error.response.data && error.response.data.message) || 
        error.message || 
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewLocations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(viewLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.locations = action.payload;
      })
      .addCase(viewLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(availableAtDate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(availableAtDate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cars = action.payload;
      })
      .addCase(availableAtDate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(availableCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(availableCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cars = action.payload;
      })
      .addCase(availableCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.car = action.payload;
      })
      .addCase(getCar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = carSlice.actions;

export default carSlice.reducer;
