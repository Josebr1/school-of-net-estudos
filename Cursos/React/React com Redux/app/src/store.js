import { createStore } from 'redux';
import reducers from './reducers';

const configStore = () => {
    return createStore(
        reducers
    )
}

export default configStore;