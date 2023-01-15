import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header, Layout } from "./components";
import {
  About,
  Contact,
  Error,
  Home,
  Login,
  QuizHome,
  QuizPage,
  Result,
  Signup,
} from "./pages";
import PrivateRoute from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<PrivateRoute />}>
            <Route path="/quizhome" element={<QuizHome />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/quizpage/:id" element={<QuizPage />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
