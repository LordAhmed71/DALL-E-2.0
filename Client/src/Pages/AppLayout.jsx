import { Header } from "../Components";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="sm:px-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
