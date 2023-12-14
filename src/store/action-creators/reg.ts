import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegByEmailResponse } from 'services/reg/reg.model';
import { RegByEmailParams, postRegByEmailAPI } from 'services/reg/reg.service';

export const postRegByEmail = createAsyncThunk<RegByEmailResponse, RegByEmailParams>(
  'reg/postRegByEmail',
  async (params, thunkAPI) => {
    try {
      const response = await postRegByEmailAPI(params);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
