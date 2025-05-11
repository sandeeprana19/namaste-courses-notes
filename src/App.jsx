import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="pt-28 pb-14 lg:py-28">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
