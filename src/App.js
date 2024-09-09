import { Provider } from "react-redux";
import "./App.css";
import Header from "./component/Header";
import { Store } from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Header />
      </Provider>
    </>
  );
}

export default App;
