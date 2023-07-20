import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
import Home from "./pages/Home";
import AdminLayout from "./Layout/AdminLayout";
import ArticleAdmin from "./pages/Admin/ArticleAdmin";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="article" element={<ArticleAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
