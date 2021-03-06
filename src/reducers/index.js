import { combineReducers } from 'redux';
import issues from './issues-reducer';
import users from './users-reducer';
import uiState from './ui-state-reducer';

export default combineReducers({
    issues,
    users,
    uiState
});
