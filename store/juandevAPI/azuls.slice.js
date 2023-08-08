import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_azul_list = createAsyncThunk(
  "azuls/api_v1_azul_list",
  async payload => {
    const response = await apiService.api_v1_azul_list(payload)
    return response.data
  }
)
export const api_v1_azul_create = createAsyncThunk(
  "azuls/api_v1_azul_create",
  async payload => {
    const response = await apiService.api_v1_azul_create(payload)
    return response.data
  }
)
export const api_v1_azul_retrieve = createAsyncThunk(
  "azuls/api_v1_azul_retrieve",
  async payload => {
    const response = await apiService.api_v1_azul_retrieve(payload)
    return response.data
  }
)
export const api_v1_azul_update = createAsyncThunk(
  "azuls/api_v1_azul_update",
  async payload => {
    const response = await apiService.api_v1_azul_update(payload)
    return response.data
  }
)
export const api_v1_azul_partial_update = createAsyncThunk(
  "azuls/api_v1_azul_partial_update",
  async payload => {
    const response = await apiService.api_v1_azul_partial_update(payload)
    return response.data
  }
)
export const api_v1_azul_destroy = createAsyncThunk(
  "azuls/api_v1_azul_destroy",
  async payload => {
    const response = await apiService.api_v1_azul_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const azulsSlice = createSlice({
  name: "azuls",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_azul_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_azul_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_azul_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_azul_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_azul_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_azul_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_azul_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_azul_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_azul_list,
  api_v1_azul_create,
  api_v1_azul_retrieve,
  api_v1_azul_update,
  api_v1_azul_partial_update,
  api_v1_azul_destroy,
  slice: azulsSlice
}
