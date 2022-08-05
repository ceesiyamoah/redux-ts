import { combineReducers } from 'redux';
import RepositoriesReducer from './repositoriesReducer';

export default combineReducers({
	repositories: RepositoriesReducer,
});
