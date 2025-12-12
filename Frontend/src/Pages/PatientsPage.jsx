import React from "react";
import Layout from "../Components/common/Layout";
import Patients from "../Components/patients/Patients";

const PatientsPage = () => {
  return (
    <Layout>
      <div>
      <Patients />
      </div>
    </Layout>
  );
};

export default PatientsPage;
