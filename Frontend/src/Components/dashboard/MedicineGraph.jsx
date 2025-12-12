import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Paracetamol ml", "Vitamin Tablets", "Antacid Tablets", "Others"],
  datasets: [
    {
      label: "Medicine Sold",
      data: [55, 12, 25, 8],
      backgroundColor: ["#3497f9", "#4ee578", "#A056FF", "#FFEE55"],
      border: "none",
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false, //hides the legend
    },

    datalabels: {
      color: "#fff",
      font: {
        size: 14,
        weight: "light",
      },
      formatter: (value, context) => {
        const dataArr = context.chart.data.datasets[0].data;
        const total = dataArr.reduce((acc, val) => acc + val, 0);
        const percentage = ((value / total) * 100).toFixed(0);
        return `${percentage}%`;
      },
    },
  },
  cutout: "60%", //makes doughnut hole larger
};

const MedicineGraph = () => {
  return (
    <div className="p-3 shadow-lg  bg-white rounded" style={{ width: "35%" }}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6>Top Medicines Sold</h6>
        </div>
        <div>
          <div className="btn-group ">
            {/* fw-bold */}
            <div className="dropdown">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Daily
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <div className="d-flex flex-column gap-2 w-50">
          {/* {First List} */}
          <div className="d-flex justify-content-start align-items-center gap-2">
            <div className="medicineGraphList blueList"></div>
            <div><GoDotFill style={{color: "blue"}} />Paracetamol</div>
          </div>

          {/* {second List} */}
          <div className="d-flex justify-content-start align-items-center gap-2">
            <div className="medicineGraphList greenList"></div>
            <div><GoDotFill style={{color: "green"}} />Vitamin Tablets</div>
          </div>

          {/* Third List */}
          <div className="d-flex justify-content-start align-items-center gap-2">
            <div className="medicineGraphList purpleList"></div>
            <div><GoDotFill style={{color: "purple"}} />Antacid Tablets</div>
          </div>

          {/* {Fourth List} */}
          <div>
          <div className="medicineGraphList yellowList"></div>
          <div><GoDotFill style={{color: "yellow"}} />Others</div>
        </div>
        </div>
        <div className="w-50 d-flex">
          <Doughnut
            style={{ width: "35%", height: "35%" }}
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default MedicineGraph;
