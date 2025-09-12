import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import RoleSelection from "./pages/RoleSelection.jsx";
import "./App.css";
import Signup from "./features/auth/Signup.jsx";
import Login from "./features/auth/Login.jsx";
import UserHome from "./features/User/UserHome.jsx";
import AnimalRegistry from "./features/User/AnimalRegistry.jsx";
import UserProfile from "./features/User/UserProfile.jsx";
import Complaint from "./features/User/Complaint.jsx";
import Report from "./features/User/Report.jsx";
import VetHome from "./features/Veterinarian/VetHome.jsx";
import PrescriptionForm from "./features/Veterinarian/PrescriptionForm.jsx";
import VetReport from "./features/Veterinarian/VetReport.jsx";
import VetDashboard from "./features/Veterinarian/VetDashboard.jsx";
import UserDashboard from "./features/User/Userdashboard.jsx";
import MedicalRecords from "./features/Veterinarian/MedicalRecord.jsx";
import AddPatientForm from "./features/Veterinarian/AddPatientForm.jsx";
import Appoinments from "./features/Veterinarian/Appoinments.jsx";
import VeterinarianProfile from "./features/Veterinarian/VeterinarianProfile.jsx";
// import AnimalsPage from "./features/User/AnimalsPage";
import AnimalData from "./features/User/AnimalData.jsx";
import AdminHome from "./features/Admin/AdminHome.jsx";
import UserManagement from "./features/Admin/UserManagement.jsx";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* User Pages */}
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/animalregistry" element={<AnimalRegistry />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/report" element={<Report />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/animaldata" element={<AnimalData />} />

      {/* <Route path="/animals" element={<AnimalsPage />} /> */}

      {/* Veterinarian Pages */}
      <Route path="/vethome" element={<VetHome />} />
      <Route path="/vetreport" element={<VetReport />} />
      <Route path="/vetdashboard" element={<VetDashboard />} />
      <Route path="/medical-records" element={<MedicalRecords />} />
      <Route path="/add-patient" element={<AddPatientForm />} />
      <Route path="/appointments" element={<Appoinments />} />
      <Route path="/prescriptionForm" element={<PrescriptionForm />} />
      <Route path="/veterinarianprofile" element={<VeterinarianProfile />} />

      {/* Admin Pages */}

      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/usermanagement" element={<UserManagement />} />
    </Routes>
  );
}

export default App;
