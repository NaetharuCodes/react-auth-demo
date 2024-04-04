import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth } from "./contexts/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Protected from "./pages/Protected";

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-start min-h-svh p-10 bg-slate-950 text-slate-200 font-bold text-lg font-mono">
        <h1 className="p-10">React Auth Example</h1>
        <div className="p-10">
          <p>Auth Status: {isAuthenticated.toString()}</p>
        </div>
        <div className="p-10">
          <button
            className="border-2 border-white px-6 py-2 m-4"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
          <button
            className="border-2 border-white px-6 py-2 m-4"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
        <div className="px-10 bg-slate-400 text-black">
          <Link to="protected">Link to Protected Route</Link>
        </div>
        <div className="m-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/protected" element={<Protected />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
