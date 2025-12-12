import React from "react";
import ActivityOverview from "../Components/dashboard/ActivityOverview";
import DashboardAppointments from "../Components/dashboard/DashboardAppointments";
import Layout from "../Components/common/Layout";
import DashboardEducationContent from "../Components/dashboard/DashboardEducationContent";
import PatientsPage from "./PatientsPage";
import DashboardPatientFee  from "../Components/dashboard/DashboardPatientFee";
import MedicineGraph from "../Components/dashboard/MedicineGraph";


const DashboardPage = () => {
  return (
 <Layout>
     <div className="bg-color d-flex justify-content-between  p-4">
      <ActivityOverview />
      <DashboardAppointments />
    </div>
      <div className="bg-color d-flex justify-content-between  p-4">
     <DashboardEducationContent />
     <MedicineGraph />
     <DashboardPatientFee />
    </div>
 </Layout>
  );
};

export default DashboardPage;
