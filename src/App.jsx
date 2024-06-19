import "./style/style.css";
import NavigasiBar from "./Components/NavigasiBar";
import Home from "./Components/Home";
import BookAvailable from "./Components/BookAvailable";
import Footer from "./Components/Footer";
// import rrouter
import { Routes, Route } from "react-router-dom";
import AddBooks from "./Pages/AddBooks";
import DetailBuku from "./Pages/DetailBuku";
import EditBooks from "./Pages/EditBooks";
import { BooksProvider } from "./Context/BooksContext";

const App = () => {

  return (
    <div>
      <BooksProvider>
        <Routes>
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
        </Routes>

        <Routes>
          <Route
            path="/addbooks"
            element={
              <>
                <AddBooks />
                <Footer />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route path="/detailbuku/:id" element={
            <>
              <DetailBuku />
              <Footer />
            </>
          } />
        </Routes>

        <Routes>
          <Route path="/editbuku/:id" element={<EditBooks/>}/>
        </Routes>
      </BooksProvider>
    </div>
  );
};

export default App;
