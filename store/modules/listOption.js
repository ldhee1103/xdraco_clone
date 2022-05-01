import { createSlice } from '@reduxjs/toolkit';

const listOptionSlice = createSlice({
  name: 'listOption',
  initialState: {
    listOption: null,
    listTarget: null,
  },
  reducers: {
    optionChange: (state, action) => {
      state.listOption = action.payload;
    },
  },
});

export const { optionChange, listOption } = listOptionSlice.actions; // 액션 생성함수
export const selectOption = (state) => state.listOption.listOption;
export default listOptionSlice.reducer; // 리듀서`
