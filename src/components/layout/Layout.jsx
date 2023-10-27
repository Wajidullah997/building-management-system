// import React from "react";
// import Navbar from "../layout/Navbar";
// import Sidebar from "../layout/Sidebar";
// import { Outlet } from "react-router-dom";
// export default function Layout() {
//   return (
//     <>
//       <Navbar />
//       <Sidebar />
//       <Outlet />
//     </>
//   );
// }

    // <div className="md:flex">

    import React from "react";
    import Navbar from "../layout/Navbar";
    import Sidebar from "../layout/Sidebar";
    import { Outlet } from "react-router-dom";

    export default function Layout() {
      return (
        <div>
          <Navbar />
          <Sidebar />
          <Outlet />
        </div>
      );
    }
