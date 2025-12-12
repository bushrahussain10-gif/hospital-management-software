import React from 'react'
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import { BsArrowsAngleContract } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const MedicineInventory = () => {
  return (
      <div className="Patient-Info shadow-lg">
            <div>
              <div
                className="d-flex justify-content-between"
                style={{ borderBottom: "1px solid #3497f9 " }}
              >
                <h4 className="mt-3 p-3">MEDICINE INVENTORY</h4>
                <div className="d-flex">
                  <div>
                    <button className="btn btn-primary mt-3 me-4">
                      <FiPlus />
                      Add Product
                    </button>
                  </div>
                  <div>
                    {" "}
                    <BsArrowsAngleContract size={20}
                      style={{ color: "blue" }}
                      className="mt-3 ms-3 me-2 "
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-around mt-4 ps-4 ">
                <div className="input-group date-filter-input search-bar me-5">
                  {" "}
                  <CiSearch size={25} className="pt-1 mb-0 mt-1" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                     
                  />
                </div>
                {/* {Product-Type dropdown button} */}
                <div>
                  <div className="dropdown MedicineInventoryDropdown">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Product Type
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Daily
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
                {/* {In stock dropdown button} */}
                <div>
                  <div className="dropdown MedicineInventoryDropdown">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      In Stock
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Daily
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
                {/* {Expiry date button} */}
                <div>
                  <div className="input-group MedicineInventoryDropdown  date-filter-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Expiry Date"
                    />
                    <HiOutlineCalendarDateRange
                      size={25}
                      className="pt-1 mb-0 mt-1 "
                      style={{ color: "#96999c" }}
                    />
                  </div>
                </div>
                {/* {Manufacturer dropdown button} */}
                <div>
                  <div className="dropdown MedicineInventoryDropdown ">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Manufacturer
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Daily
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
              <div className="p-4 mb-0">
                <table class="table table-hover ">
                  <thead className="text-center">
                    <tr>
                      <th scope="col">
                        {" "}
                        <input
                          class="MedicineCheckbox"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        ></input>
                        Medicine Name{" "}
                      </th>
    
                      <th scope="col">Type</th>
                      <th scope="col">Price</th>
                      <th scope="col">In Stock</th>
                      <th scope="col">Expiry Date</th>
                      <th scope="col">Manufacturer</th>
                      <th scope="col">User Action</th>
                    </tr>
                  </thead>
                  <tbody className="Medicine-table text-center ">
                    <tr>
                      <th className="fw-light" scope="row">
                        <div className="medicine-th-box">
                        <input
                          className="MedicineCheckbox me-2 "
                          class="MedicineCheckbox"
                          type="checkbox"
                          value=""
                        ></input>
                        Aspirin 200 mg
                        </div>
                      </th>
                      <td>Tablet</td>
                      <td><MdCurrencyRupee />28.55</td>
                      <td>100<span className="text-muted ms-1 ">pcs</span></td>
                      <td>07 Dec 2026</td>
                      <td>Cipla Pvt Ltd</td>
                      <td>
                        <button className="MedicinePgeButtonN me-2 p-1">
                          <LuNotepadText size={25} color="#96999c" />
                        </button>
                        <button className="MedicinePgeButtonA me-2 p-1">
                          <FaPlus size={25} color="blue" />
                        </button>
                        <button className="MedicinePgeButtonD me-2 p-1">
                          <MdDeleteForever size={25} color="red" />
                        </button>
                      </td>
                    </tr>
                   <tr>
                      <th className="fw-light" scope="row">
                        <div className="medicine-th-box">
                        <input
                          className="MedicineCheckbox me-2 "
                          class="MedicineCheckbox"
                          type="checkbox"
                          value=""
                        ></input>
                        Cordarone X
                        </div>
                      </th>
                      <td>Tablet</td>
                      <td><MdCurrencyRupee />193.37</td>
                      <td>15<span className="text-muted ms-1 ">pcs</span></td>
                      <td>07 Dec 2026</td>
                      <td>Sun Pharmaceutical </td>
                      <td>
                        <button className="MedicinePgeButtonN me-2 p-1">
                          <LuNotepadText size={25} color="#96999c" />
                        </button>
                        <button className="MedicinePgeButtonA me-2 p-1">
                          <FaPlus size={25} color="blue" />
                        </button>
                        <button className="MedicinePgeButtonD me-2 p-1">
                          <MdDeleteForever size={25} color="red" />
                        </button>
                      </td>
                    </tr>
                   <tr>
                      <th className="fw-light" scope="row">
                      <div className="medicine-th-box">
                        <input
                          className="MedicineCheckbox me-2 "
                          class="MedicineCheckbox"
                          type="checkbox"
                          value=""
                        ></input>
                        Zayo 100 mg
                        </div>
                      </th>
                      <td>Tablet</td>
                      <td><MdCurrencyRupee />350</td>
                      <td>50<span className="text-muted ms-1 ">pcs</span></td>
                      <td>07 Dec 2026</td>
                      <td>Eris Lifesciences Ltd</td>
                      <td>
                        <button className="MedicinePgeButtonN me-2 p-1">
                          <LuNotepadText size={25} color="#96999c" />
                        </button>
                        <button className="MedicinePgeButtonA me-2 p-1">
                          <FaPlus size={25} color="blue" />
                        </button>
                        <button className="MedicinePgeButtonD me-2 p-1">
                          <MdDeleteForever size={25} color="red" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="fw-light" scope="row">
                         <div className="medicine-th-box">
                        <input
                          className="MedicineCheckbox me-2 "
                          class="MedicineCheckbox"
                          type="checkbox"
                          value=""
                        ></input>
                        Met XL 50 mg
                        </div>
                      </th>
                      <td>Tablet</td>
                      <td><MdCurrencyRupee />136.81</td>
                      <td>10<span className="text-muted ms-1 ">pcs</span></td>
                      <td>07 Dec 2026</td>
                      <td>Cipla Pvt Ltd</td>
                      <td>
                        <button className="MedicinePgeButtonN me-2 p-1">
                          <LuNotepadText size={25} color="#96999c" />
                        </button>
                        <button className="MedicinePgeButtonA me-2 p-1">
                          <FaPlus size={25} color="blue" />
                        </button>
                        <button className="MedicinePgeButtonD me-2 p-1">
                          <MdDeleteForever size={25} color="red" />
                        </button>
                      </td>
                    </tr>
                   <tr>
                      <th className="fw-light" scope="row">
                         <div className="medicine-th-box">
                        <input
                          className="MedicineCheckbox me-2 "
                          class="MedicineCheckbox"
                          type="checkbox"
                          value=""
                        ></input>
                        Benadryl 500 ml
                        </div>
                      </th>
                      <td>Syrup</td>
                      <td><MdCurrencyRupee />77.55</td>
                      <td>170<span className="text-muted ms-1 ">pcs</span></td>
                      <td>07 Dec 2026</td>
                      <td>Johnson & Johnson</td>
                      <td>
                        <button className="MedicinePgeButtonN me-2 p-1">
                          <LuNotepadText size={25} color="#96999c" />
                        </button>
                        <button className="MedicinePgeButtonA me-2 p-1">
                          <FaPlus size={25} color="blue" />
                        </button>
                        <button className="MedicinePgeButtonD me-2 p-1">
                          <MdDeleteForever size={25} color="red" />
                        </button>
                      </td>
                    </tr>
                  <tr>
                      <th className="fw-light" scope="row">
                         <div className="medicine-th-box">
                        <input
                          className="MedicineCheckbox me-2 "
                          class="MedicineCheckbox"
                          type="checkbox"
                          value=""
                        ></input>
                        Cipladine 10 g
                        </div>
                      </th>
                      <td>Ointment</td>
                      <td><MdCurrencyRupee />129.77</td>
                      <td>190<span className="text-muted ms-1 ">pcs</span></td>
                      <td>07 Dec 2026</td>
                      <td>Cipla Pvt Ltd</td>
                      <td>
                        <button className="MedicinePgeButtonN me-2 p-1">
                          <LuNotepadText size={25} color="#96999c" />
                        </button>
                        <button className="MedicinePgeButtonA me-2 p-1">
                          <FaPlus size={25} color="blue" />
                        </button>
                        <button className="MedicinePgeButtonD me-2 p-1">
                          <MdDeleteForever size={25} color="red" />
                        </button>
                      </td>
                    </tr>
                   <tr>
                      <th className="fw-light" scope="row">
                       <div className="medicine-th-box">
                        <input
                          className="MedicineCheckbox me-2 "
                          class="MedicineCheckbox"
                          type="checkbox"
                          value=""
                        ></input>
                        Cetaphil
                        </div>
                      </th>
                      <td>Soap</td>
                      <td><MdCurrencyRupee />234.43</td>
                      <td>100<span className="text-muted ms-1 ">pcs</span></td>
                      <td>07 Dec 2026</td>
                      <td>Galderma Pvt Ltd</td>
                      <td>
                        <button className="MedicinePgeButtonN me-2 p-1">
                          <LuNotepadText size={25} color="#96999c" />
                        </button>
                        <button className="MedicinePgeButtonA me-2 p-1">
                          <FaPlus size={25} color="blue" />
                        </button>
                        <button className="MedicinePgeButtonD me-2 p-1">
                          <MdDeleteForever size={25} color="red" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
  )
}

export default MedicineInventory;
