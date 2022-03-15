import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage
}

const pReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(pReducer) // truyền pReducer (hàm persistReducer) vào hàm 
// creatStore để đóng gói reducer gốc 
const persistor = persistStore(store) // truyền store vào hàm persistStore để state được
// lưu vào localStorage mỗi khi nó thay đổi  


export { store, persistor } 