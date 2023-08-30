import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_newmo45_list = createAsyncThunk("newMo45s/api_v1_newmo45_list", async payload => {
  const response = await apiService.api_v1_newmo45_list(payload);
  return response.data;
});
export const api_v1_newmo45_create = createAsyncThunk("newMo45s/api_v1_newmo45_create", async payload => {
  const response = await apiService.api_v1_newmo45_create(payload);
  return response.data;
});
export const api_v1_newmo45_retrieve = createAsyncThunk("newMo45s/api_v1_newmo45_retrieve", async payload => {
  const response = await apiService.api_v1_newmo45_retrieve(payload);
  return response.data;
});
export const api_v1_newmo45_update = createAsyncThunk("newMo45s/api_v1_newmo45_update", async payload => {
  const response = await apiService.api_v1_newmo45_update(payload);
  return response.data;
});
export const api_v1_newmo45_partial_update = createAsyncThunk("newMo45s/api_v1_newmo45_partial_update", async payload => {
  const response = await apiService.api_v1_newmo45_partial_update(payload);
  return response.data;
});
export const api_v1_newmo45_destroy = createAsyncThunk("newMo45s/api_v1_newmo45_destroy", async payload => {
  const response = await apiService.api_v1_newmo45_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const newMo45sSlice = createSlice({
  name: "newMo45s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(api_v1_newmo45_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_newmo45_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_newmo45_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_newmo45_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_newmo45_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_newmo45_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_destroy.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_newmo45_destroy.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_newmo45_destroy.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  api_v1_newmo45_list,
  api_v1_newmo45_create,
  api_v1_newmo45_retrieve,
  api_v1_newmo45_update,
  api_v1_newmo45_partial_update,
  api_v1_newmo45_destroy,
  slice: newMo45sSlice
};