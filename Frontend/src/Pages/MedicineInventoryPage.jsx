import React from "react";
import Layout from "../Components/common/Layout";
import MedicineInventory from "../Components/medicine-inventory/MedicineInventory";


const MedicineInventoryPage = () => {
  return (
    <Layout>
      <div>
        <MedicineInventory />
      </div>
    </Layout>
  );
};

export default MedicineInventoryPage;
