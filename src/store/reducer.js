import headerReducer from '../common/header/store/reducer';
import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer =  combineReducers({
    headerReducer,
    homeReducer,
    detailReducer,
    loginReducer
})
export default reducer;