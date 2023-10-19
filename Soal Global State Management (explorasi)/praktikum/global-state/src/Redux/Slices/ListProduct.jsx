import { createSlice } from "@reduxjs/toolkit";

const storedFormValues = JSON.parse(localStorage.getItem('tableData'));

const ListProduct = createSlice({
  name: 'list',
  initialState: {
    formValues: storedFormValues || {
      id: '1001',
      productname: 'Meja TV',
      productcategory: 'Furniture',
      imageproduct: 'Meja TV Kayu',
      productfreshness: 'Refubished',
      productdescription: 'Design modern',
      productprice: '250000',
    }
  },
  reducers: {
    updateFormValue: (state, action) => {
      const { name, value } = action.payload;
      state.formValues = { ...state.formValues, [name]: value };
    },
  },
});

export const { updateFormValue } = ListProduct.actions;
export default ListProduct.reducer;