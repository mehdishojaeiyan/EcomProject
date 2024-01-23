import Navbar from "../navbar/navbar";
import Footer from '../footer/footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
