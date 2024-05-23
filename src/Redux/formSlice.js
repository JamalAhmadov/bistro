import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sendFormData = createAsyncThunk(
  'form/sendFormData',
  async (formData, thunkAPI) => {
    const response = await fetch('https://664f6f33ec9b4a4a602ec793.mockapi.io/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error('Failed to send form data');
    }
    return response.json();
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState: {
    loading: false,
    error: null,
    success: false
  },
  reducers: {
    resetFormState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendFormData.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendFormData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { resetFormState } = formSlice.actions;
export default formSlice.reducer
