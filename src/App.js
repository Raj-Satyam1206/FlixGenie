import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore, { persistor } from "./utils/appStore";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Body />
      </PersistGate>
    </Provider>
  );
}

export default App;


// <Provider store={appStore}>:
// - This wraps the entire application and provides the Redux store (appStore) to all components.
// - It allows any component to access the centralized application state managed by Redux.


// <PersistGate loading={null} persistor={persistor}>:
// - This is part of Redux Persist, which saves and restores certain parts of the Redux state even if the page is refreshed.
// - PersistGate delays rendering the child components (like Body) until the persisted state is loaded and rehydrated from storage.
// - loading={null} specifies what to display while the state is being restored (in this case, nothing).
