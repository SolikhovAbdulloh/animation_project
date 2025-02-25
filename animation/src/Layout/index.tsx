import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Layout = () => {
  return (
    <div className="w-[90%] m-auto p-2 bg-[#1E1E1E]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout