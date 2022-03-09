import logo from "./logo.svg";
import "./App.css";
import CakeShop from "./components/Cakeshop/CakeShop";
import { Provider } from "react-redux";
import { store } from "./components/Redux-demo/store";
import ComponentA from "./components/Hooks/Context/ComponentA";
import DataFetching from "./components/Hooks/DataFetching";
import FetchData from "./components/FetchData/FetchData";

function App() {
  return (
    // <Provider store={store}>
    //   <CakeShop />
    // </Provider>
    // <ComponentA />
    // <DataFetching />
    <FetchData />
  );
}

export default App;
