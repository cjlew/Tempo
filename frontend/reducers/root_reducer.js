import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session/session_reducer';
import playerReducer from './player/player_reducer';
import searchReducer from './search/search_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  player: playerReducer,
  search: searchReducer
});

export default rootReducer;
