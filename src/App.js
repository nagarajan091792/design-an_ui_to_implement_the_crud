import Admin from "./admin";

import Users from "./list-users";
import Createuser from "./create-user";
import Sidebar from "./sidebar";
import "./sb-admin-2.css";
import "./fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewUser from "./view-user";
import EditUser from "./edit-user";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Routes>
              <Route path="/" element={<Admin />}></Route>

              <Route path="/list-users" element={<Users />}></Route>
              <Route path="/create-user" element={<Createuser />}></Route>
              <Route path="/edit-user/:id" element={<EditUser />}></Route>

              <Route path="view-user/:id" element={<ViewUser />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
