import { Route, Routes } from "react-router-dom";
import "./App.css";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";
import RequireAuth from "./authentication/RequireAuth";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <Navbar />
      <Routes>
        {/* publicRoutes  */}
        {publicRoutes.map(({ Path, Copmonent }, index) => (
          <Route key={index} path={Path} element={<Copmonent />} />
        ))}
        {/* privateRoutes */}
        <Route element={<RequireAuth />}>
          {privateRoutes.map(({ Path, Copmonent }, index) => (
            <Route key={index} path={Path} element={<Copmonent />} />
          ))}
        </Route>
        {/* dashboard  */}
      </Routes>
      <Footer />
    </ProductProvider>
  );
}

export default App;
