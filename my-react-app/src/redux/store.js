import { configureStore} from '@reduxjs/toolkit';
import cartreducer from "../features/cartSlice"

const store= configureStore({
    reducer: {
        cart: cartreducer
    },
});
export default store;