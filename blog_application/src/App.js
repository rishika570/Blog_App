import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Blogs from "./Pages/Blogs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserBlogs from "./Pages/UserBlogs";
import CreateBlog from "./Pages/CreateBlog";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/my-blogs" element={<UserBlogs/>}/>
        <Route path="/create-blog" element={<CreateBlog/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
