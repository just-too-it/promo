import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RegByEmailResponse } from 'services/reg/reg.model';
import { RegByEmailParams } from 'services/reg/reg.service';
import { postRegByEmail } from 'store/action-creators/reg';

export interface RegState {
  status: 'loading' | 'success' | 'error' | null;
  params: RegByEmailParams;
  regResponse: RegByEmailResponse;
}

const initialState: RegState = {
  status: null,
  params: {
    name: '',
    phone: '',
    email: '',
    assent: false,
  },
  regResponse: {
    result: false,
    data: {
      password: '',
    },
    error: {
      phone: [],
      rules1: [],
      login: [],
      name: [],
    },
  },
};

export const regSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {
    setParams(state, action: PayloadAction<RegByEmailParams>) {
      state.params = action.payload;
    },
    resetRegResponse(state) {
      state.regResponse = {
        result: false,
        data: {
          password: '',
        },
        error: {
          phone: [],
          rules1: [],
          login: [],
          name: [],
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postRegByEmail.fulfilled, (state, action: PayloadAction<RegByEmailResponse>) => {
      state.status = 'success';
      state.regResponse = action.payload;
    });
    builder.addCase(postRegByEmail.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(postRegByEmail.rejected, (state, action: PayloadAction<any>) => {
      state.status = 'error';
    });
  },
});
export const { setParams, resetRegResponse } = regSlice.actions;
export default regSlice.reducer;
