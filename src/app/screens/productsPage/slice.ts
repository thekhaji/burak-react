import {createSlice} from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../lib/types/screen";

const initialState: ProductsPageState = {
    restaurant: null,
    chosenProduct: null,
    products: [],
}

const productsPageSlice = createSlice({
    name: "productsPage",
    initialState,
    reducers: {
        setRestaurant: (state,action)=>{
            state.restaurant = action.payload;
        },
        setChosenProduct: (state,action)=>{
            state.chosenProduct = action.payload;
        },
        setProducts: (state,action)=>{
            state.products = action.payload;
        },
    }
});

export const {setChosenProduct, setRestaurant, setProducts} = productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;