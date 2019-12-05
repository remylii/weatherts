import { routerMiddleware, connectRouter } from "connected-react-router";
import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
  Reducer,
  Store
} from "redux";
import { History } from "history";
import { prefectureReducer, PrefectureState } from "./reducers/prefecture";

export type AppState = {
  router: any;
  prefectures: PrefectureState;
};

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (history: History): Store => {
  const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    router: connectRouter(history),
    prefectures: prefectureReducer
  });

  const store = createStore(
    rootReducer,
    composeReduxDevToolsEnhancers(applyMiddleware(routerMiddleware(history)))
  );

  return store;
};

export default configureStore;
