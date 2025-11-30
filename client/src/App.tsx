import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/Login";
import RequestAccessPage from "./Pages/RequestAccessPage";
import AdminPage from "./Pages/AdminPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ProfilePage from "./Pages/ProfilePage";
import MainPage from "./Pages/Mainpage";

function App() {

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <Routes>
        <Route path="/" element={<Homepage/>} />

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/request-access" element={<RequestAccessPage/>} />

        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />

        <Route path="/home" element={<MainPage/>} />

        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/admin-page" element={<AdminPage/>} />
      </Routes>
    </div>
  )
}

export default App;
