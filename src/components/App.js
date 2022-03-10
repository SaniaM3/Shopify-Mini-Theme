import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import HomePage from "../pages/HomePage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ShopProvider from "../context/shopContext";


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <Routes>
      <Route path="/*" element = {<HomePage />} />
      <Route path="/product" element = {<ProductPage />}/>
      </Routes>
  </StyletronProvider>
  </ShopProvider>
  );
}

export default App;
