import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-zinc-900 min-h-screen mb-6">
      <Header />
      <div className="container p-2 xl:max-w-screen-xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;