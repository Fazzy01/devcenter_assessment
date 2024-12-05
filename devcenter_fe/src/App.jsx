import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/login";
import Register from "./pages/register";
import TansStackProvider from "./components/providers/TansStackProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashbord from "./pages/UserDashbord";

function App() {
  return (

    <TansStackProvider>
        <BrowserRouter>
        <div className="App">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* to be protected  */}
            <Route path="/dashboard" element={<UserDashbord />} />
            </Routes>
        </div>
        <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

        </BrowserRouter>
    </TansStackProvider>
  );
}


export default App;
