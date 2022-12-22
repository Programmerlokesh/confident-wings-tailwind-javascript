import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "./components";
import { About, Contact, Error, Home, Login, Quiz, Signup } from "./pages";
import PrivateRoute from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<PrivateRoute />}>
          <Route path="/quiz" element={<Quiz />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
