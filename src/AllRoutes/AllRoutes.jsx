import { Route, Routes } from "react-router-dom";
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import News from "../Components/News";
import Favourites from "../Components/Favourites";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/news/:title" element={<PrivateRoute><News /></PrivateRoute>} />
            <Route path="/favourites" element={<PrivateRoute><Favourites /></PrivateRoute>} />
            <Route path="*" element={<h1>This is a broken Link</h1>} />
        </Routes>
    )
}