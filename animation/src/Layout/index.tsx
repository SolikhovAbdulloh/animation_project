import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Layout = () => {
  return (
    <div className="contiener bg-[white] flex flex-col gap-[30px]">
      <Navbar />
      <main className="pt-[20px] pb-[20px]">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

export default Layout;
