import { combineReducers } from 'redux';
import RepositoriesReducer from './repositoriesReducer';

export const reducers = combineReducers({
	repositories: RepositoriesReducer,
});

export type RootState = ReturnType<typeof reducers>;
