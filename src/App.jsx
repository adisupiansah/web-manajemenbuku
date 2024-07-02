import "./style/style.css";
import NavigasiBar from "./Components/NavigasiBar";
import Home from "./Components/Home";
import BookAvailable from "./Components/BookAvailable";
import Footer from "./Components/Footer";
// import rrouter
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import AddBooks from "./Pages/AddBooks";
import DetailBuku from "./Pages/DetailBuku";
import EditBooks from "./Pages/EditBooks";
import { BooksProvider } from "./Context/BooksContext";
import Register from "./Authentication/Register";
import { AuthProvider } from "./Context/AuthProvider";
import Login from "./Authentication/Login";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const Require = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  // buat fungsi jika ada user, tidak boleh balik ke /login lagi
  const RequireNoLogin = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <div>
      <AuthProvider>
        <BooksProvider>
          <Router>
            <Routes>
              <Route
                path="/login"
                element={
                  <RequireNoLogin>
                    <>
                      <Login />
                    </>
                  </RequireNoLogin>
                }
              />

              <Route
                path="/register"
                element={
                  <RequireNoLogin>
                    <>
                      <Register />
                    </>
                  </RequireNoLogin>
                }
              />

              <Route
                path="/"
                element={
                    <>
                      <NavigasiBar />
                      <Home />
                      <BookAvailable />
                      <Footer />
                    </>
                }
              />

              <Route
                path="/addbooks"
                element={
                  <>
                    <AddBooks />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/detailbuku/:id"
                element={
                  <Require>
                    <>
                      <DetailBuku />
                      <Footer />
                    </>
                  </Require>
                }
              />

              <Route
                path="/editbuku/:id"
                element={
                  <Require>
                    <>
                      <EditBooks />
                    </>
                  </Require>
                }
              />

            </Routes>
          </Router>
        </BooksProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
