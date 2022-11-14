import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
