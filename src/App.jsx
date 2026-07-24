import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}
