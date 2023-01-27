// Configure store and import the reducers
import { configureStore } from "@reduxjs/toolkit"
import hangmanImagesReducer from "./hangmanImages"
import wordReducer from "./word"


// Export the store
export default configureStore({
    reducer: {
        images: hangmanImagesReducer,
        createWord: wordReducer,

    }
})