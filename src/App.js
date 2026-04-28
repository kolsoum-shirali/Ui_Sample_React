import { Route, Routes, Outlet } from "react-router-dom";
import {
  HomePage,
  Footer,
  Header
} from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App bg-Slate-100">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

function MainLayout() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
