import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/pages/Login";
import Workers from "./components/worker/Workers";
import Queries from "./components/query/Queries";
import Promotion from "./components/promotion/Promotion";
import Services from "./components/services/Services";
import Message from "./components/Chat/Message";
import Building from "./components/building/Building";
import Layout from "./components/layout/Layout";
import Setting from "./components/Setting/Setting";
import Help from "./components/Help/HelpAndSupport";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/worker" element={<Workers />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/building" element={<Building />} />
          <Route path="/services" element={<Services />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </>
    )
  );
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
