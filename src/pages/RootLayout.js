import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const RootLayout = (props) => {
  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);

  const toggleSidebarHandler = () => {
    setSidebarIsOpened((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Header onOpen={toggleSidebarHandler} />
      <main className="flex">
        <Sidebar isOpened={sidebarIsOpened} />
        <div className="content">
          <Outlet />
        </div>
      </main>
    </Fragment>
  );
};

export default RootLayout;
