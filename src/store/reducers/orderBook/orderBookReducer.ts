// createAsyncThunk, 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// AppThunk
import { RootState } from '../../store'

interface OrderBookState {
    testValue: number,
    grouping: number[],
    selectedMarket: string,
    selectedGroup: number,
    buyArray: object[],
    sellArray: object[],
}

const initialState: OrderBookState = {
    testValue: 1,
    grouping: [0.5, 1, 2.5],
    selectedMarket: 'XBT',
    selectedGroup: .5,
    buyArray: [],
    sellArray: [],
}

export const orderBookSlice = createSlice({
    name: 'orderBook',
    initialState,
    reducers: {
    // Toggles between the XBT/ETH markets and sets the appropriate grouping values
    changeSelectedMarket: (state) => {
        if (state.selectedMarket === 'XBT' ){
            state.selectedMarket = 'ETH';
            state.selectedGroup = state.selectedGroup / 10
            state.grouping = [0.05, .1, .25];
        } else {
            state.selectedMarket = 'XBT';
            state.selectedGroup = state.selectedGroup * 10
            state.grouping = [0.5, 1, 2.5];
        }
    },
    changeSelectedGroup: (state, action: PayloadAction<number>) => {
        state.selectedGroup = action.payload;
    },
    changeBuyArray: (state, action: PayloadAction<object[]>) => {
        state.buyArray = action.payload;
    },
    changeSellArray: (state, action: PayloadAction<object[]>) => {
        state.sellArray = action.payload;
    },
    //   decrement: (state) => {
    //     state.value -= 1;
    //   },
    //   // Use the PayloadAction type to declare the contents of `action.payload`
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload;
    //   },
    // },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(incrementAsync.pending, (state) => {
    //       state.status = 'loading';
    //     })
    //     .addCase(incrementAsync.fulfilled, (state, action) => {
    //       state.status = 'idle';
    //       state.value += action.payload;
    //     });
    },
  });

  export const selectMarket = (state: RootState) => state.orderBook.selectedMarket;
  export const selectGrouping = (state: RootState) => state.orderBook.grouping;
  export const selectGroup = (state: RootState) => state.orderBook.selectedGroup;
  export const selectBuyArray = (state: RootState) => state.orderBook.buyArray
  export const selectSellArray = (state: RootState) => state.orderBook.sellArray

  export const { changeSelectedMarket, changeSelectedGroup, changeBuyArray, changeSellArray } = orderBookSlice.actions;

  export default orderBookSlice.reducer;