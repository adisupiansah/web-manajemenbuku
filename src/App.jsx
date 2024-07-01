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
      return <Navigate to="/login" state={{ from: location }} replace/>;
    }
    return children;
  };

  return (
    <div>
      <AuthProvider>
        <BooksProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/"
                element={
                  <Require>
                    <>
                      <NavigasiBar />
                      <Home />
                      <BookAvailable />
                      <Footer />
                    </>
                  </Require>
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

              <Route path="/editbuku/:id" element={<EditBooks />} />
            </Routes>
          </Router>
        </BooksProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
