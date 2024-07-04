import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ResearcherDashboard from "./pages/Researcher/Dashboard";
import PeerReviewerDashboard from "./pages/PeerReviewer/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminManuscript from "./pages/Admin/Manuscript";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin/" element={<AdminDashboard />} />
        <Route path="/admin/manuscript" element={<AdminManuscript />} />
      </Routes>
    </div>
  );
}
