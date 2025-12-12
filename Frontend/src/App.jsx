import React from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import SideNav from "./Components/common/SideNav";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/common/Header";
import Login from "./Components/auth/Login";
import PatientsPage from "./Pages/PatientsPage";
import AppointmentsPage from "./Pages/AppointmentsPage";
import DoctorsPage from "./Pages/DoctorsPage";
import MessagesPage from "./Pages/MessagesPage";
import EducationContentPage from "./Pages/EducationContentPage";
import MedicineInventoryPage from "./Pages/MedicineInventoryPage";
import SettingsPage from "./Pages/SettingsPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/education-content" element={<EducationContentPage />} />
        <Route path="/medicine-inventory" element={<MedicineInventoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      {/* <LoginPage /> */}
      {/* <DashboardPage /> */}
      {/* <SideNav /> */}
    </div>
  );
};

export default App;
