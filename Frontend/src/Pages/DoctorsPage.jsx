import React from "react";
import Layout from "../Components/common/Layout";
import Doctors from "../Components/doctors/Doctors";

const DoctorsPage = () => {
  return (
    <Layout>
      <div>
        <Doctors />
      </div>
    </Layout>
  );
};

export default DoctorsPage;
