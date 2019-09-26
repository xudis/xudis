import { createStore } from 'redux'
import reducer from './reducer'
const newStore = createStore(reducer);
export default newStore;