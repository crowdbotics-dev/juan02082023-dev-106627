import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vik_list = createAsyncThunk(
  "viks/api_v1_vik_list",
  async payload => {
    const response = await apiService.api_v1_vik_list(payload)
    return response.data
  }
)
export const api_v1_vik_create = createAsyncThunk(
  "viks/api_v1_vik_create",
  async payload => {
    const response = await apiService.api_v1_vik_create(payload)
    return response.data
  }
)
export const api_v1_vik_retrieve = createAsyncThunk(
  "viks/api_v1_vik_retrieve",
  async payload => {
    const response = await apiService.api_v1_vik_retrieve(payload)
    return response.data
  }
)
export const api_v1_vik_update = createAsyncThunk(
  "viks/api_v1_vik_update",
  async payload => {
    const response = await apiService.api_v1_vik_update(payload)
    return response.data
  }
)
export const api_v1_vik_partial_update = createAsyncThunk(
  "viks/api_v1_vik_partial_update",
  async payload => {
    const response = await apiService.api_v1_vik_partial_update(payload)
    return response.data
  }
)
export const api_v1_vik_destroy = createAsyncThunk(
  "viks/api_v1_vik_destroy",
  async payload => {
    const response = await apiService.api_v1_vik_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const viksSlice = createSlice({
  name: "viks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_vik_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vik_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vik_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vik_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vik_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vik_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vik_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vik_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_vik_list,
  api_v1_vik_create,
  api_v1_vik_retrieve,
  api_v1_vik_update,
  api_v1_vik_partial_update,
  api_v1_vik_destroy,
  slice: viksSlice
}
