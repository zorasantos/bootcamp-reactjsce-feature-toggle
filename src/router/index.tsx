import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../views/Login";
import { MainPage } from "../views/MainPage";
import { Page404 } from "../views/Page404";

export const RoutesTree = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="page-main" element={<MainPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

