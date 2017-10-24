import { combineReducers } from 'redux';
import errorsReducer from '/errors_reducer';
import entitiesReducer from '/entites_reducer';
import sessionReducer from './session/session_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
});
