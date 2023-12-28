import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AppLayout, CreatePost } from "./Pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
