import { Route, Routes } from "react-router-dom";
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<h1>This is a broken Link</h1>} />
        </Routes>
    )
}