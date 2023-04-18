import React, { useContext, useState } from "react";

import { FormContext } from "../../context/FormProvider";
import { useEffect } from "react";
import Modal from "../Modal/Modal";
import CustomModal from "../CustomModal/CustomModal";

const FormSection = () => {
  const [something, setSometing] = useState(false);
  const {
    study,
    setStudy,
    readIn,
    setReadIn,
    handleForm,
    looking,
    setLooking,
    setShowModal,
    showModal,
  } = useContext(FormContext);
  console.log(study, readIn, looking);
  useEffect(() => {
    if (study === null) {
      setSometing(false);
    } else {
      setSometing(true);
    }
  }, [study]);
  return (
    <div className=" flex justify-center items-center min-h-[70vh] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div>
        <div>
          <h3 className="text-3xl text-center font-bold my-8">
            Hi User, Welcome to Info Collector!
          </h3>
        </div>
        <form id="myform" onSubmit={handleForm}>
          <div>
            <p className="text-black text-xl font-semibold">
              Are you currently studying?
            </p>
            <div className="flex justify-between items-center mt-3">
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  type="radio"
                  name="study"
                  value={true}
                  className="radio "
                  onClick={() => setStudy(true)}
                />{" "}
                Yes, I am Studying
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  type="radio"
                  name="study"
                  value={false}
                  className="radio "
                  onClick={() => setStudy(false)}
                />{" "}
                No, I am not Studying
              </label>
            </div>
            {study && (
              <>
                <div>
                  <p className="text-black mt-3 text-xl font-semibold">
                    Are you currently?
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="radio"
                        name="readIn"
                        value="school"
                        className="radio "
                        onClick={() => setReadIn("school")}
                      />{" "}
                      in School
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="radio"
                        name="readIn"
                        value="college"
                        className="radio "
                        onClick={() => setReadIn("college")}
                      />{" "}
                      in College
                    </label>
                  </div>
                </div>
              </>
            )}
            {study && readIn === "school" && (
              <>
                <div className="my-3">
                  <p className="text-black mb-2 text-xl font-semibold">
                    School Name?
                  </p>{" "}
                  <input
                    type="text"
                    placeholder="Type here"
                    name="schoolName"
                    className="input  input-bordered w-full"
                  />
                </div>
                <div className="my-4 flex justify-between items-center">
                  <label
                    className="text-black  text-xl font-semibold"
                    htmlFor="grade"
                  >
                    Select Your grade
                  </label>
                  <select
                    name="grade"
                    className="select  select-sm select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Chosse Grade?
                    </option>
                    <option value="Six">Six</option>
                    <option value="Seven">Seven</option>
                    <option value="Eight">Eight</option>
                    <option value="Nine">Nine</option>
                    <option value="Ten">Ten</option>
                  </select>
                </div>
              </>
            )}
            {study && readIn === "college" && (
              <>
                <div className="my-3">
                  <p className="text-black mb-2 text-xl font-semibold">
                    Collge Name?
                  </p>{" "}
                  <input
                    type="text"
                    placeholder="Type here"
                    name="collegeName"
                    className="input  input-bordered w-full"
                  />
                </div>
                <div className="my-4 flex justify-between items-center">
                  <label
                    className="text-black  text-xl font-semibold"
                    htmlFor="grade"
                  >
                    Your latest degree
                  </label>
                  <select
                    name="degree"
                    className="select  select-sm select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select latest degree?
                    </option>
                    <option value="BSS">BSS</option>
                    <option value="BBA">BBA</option>
                    <option value="BSC">BSC</option>
                    <option value="MBA">MBA</option>
                    <option value="BTech">BTech</option>
                  </select>
                </div>
                <div className="my-4 flex justify-between items-center">
                  <label
                    className="text-black  text-xl font-semibold"
                    htmlFor="grade"
                  >
                    Your gradution year
                  </label>
                  <select
                    name="gradutionYear"
                    className="select  select-sm select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select gradution year?
                    </option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
              </>
            )}
            {something && !study && (
              <>
                <div>
                  <p className="text-black mt-3 text-xl font-semibold">
                    Are you currently?
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="radio"
                        name="looking"
                        value="Job"
                        className="radio "
                        onClick={() => setLooking("Job")}
                      />{" "}
                      Looking for a job
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="radio"
                        name="looking"
                        value="Working"
                        className="radio "
                        onClick={() => setLooking("Working")}
                      />{" "}
                      Currently Working
                    </label>
                  </div>
                </div>
              </>
            )}
            {something && !study && looking === "Job" && (
              <>
                <>
                  <div className="my-3">
                    <p className="text-black mb-2 text-xl font-semibold">
                      Collge Name?
                    </p>{" "}
                    <input
                      type="text"
                      placeholder="Type here"
                      name="collegeName"
                      className="input  input-bordered w-full"
                    />
                  </div>
                  <div className="my-4 flex justify-between items-center">
                    <label
                      className="text-black  text-xl font-semibold"
                      htmlFor="grade"
                    >
                      Your latest degree
                    </label>
                    <select
                      name="degree"
                      className="select  select-sm select-bordered w-full max-w-xs"
                    >
                      <option disabled selected>
                        Select latest degree?
                      </option>
                      <option value="BSS">BSS</option>
                      <option value="BBA">BBA</option>
                      <option value="BSC">BSC</option>
                      <option value="MBA">MBA</option>
                      <option value="BTech">BTech</option>
                    </select>
                  </div>
                  <div className="my-4 flex justify-between items-center">
                    <label
                      className="text-black  text-xl font-semibold"
                      htmlFor="grade"
                    >
                      Your gradution year
                    </label>
                    <select
                      name="gradutionYear"
                      className="select  select-sm select-bordered w-full max-w-xs"
                    >
                      <option disabled selected>
                        Select gradution year?
                      </option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>
                </>
              </>
            )}
            {something && !study && looking === "Working" && (
              <>
                <div className="my-3">
                  <p className="text-black mb-2 text-xl font-semibold">
                    Company Name?
                  </p>{" "}
                  <input
                    type="text"
                    placeholder="Type here"
                    name="companyName"
                    className="input  input-bordered w-full"
                  />
                </div>
                <div className="my-4 flex justify-between items-center">
                  <label
                    className="text-black  text-xl font-semibold"
                    htmlFor="grade"
                  >
                    Your Experience
                  </label>
                  <select
                    name="experience"
                    className="select  select-sm select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select your experience?
                    </option>
                    <option value="1 Years">1 Years</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="4 Years">4 Years</option>
                    <option value="5 Years">5 Years</option>
                  </select>
                </div>
                <div className="my-4 flex justify-between items-center">
                  <label
                    className="text-black  text-xl font-semibold"
                    htmlFor="grade"
                  >
                    Your Job Title
                  </label>
                  <select
                    name="jobTitle"
                    className="select  select-sm select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      Occupation?
                    </option>
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>

                    <option value="Sr. Full Stack Developer">
                      Sr. Full Stack Developer
                    </option>
                    <option value="Ai Enginner">Ai Enginner</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/**Submit button */}
          <button
            type="submit"
            onClick={() => setShowModal(true)}
            className="btn w-full bg-[#4835D4] mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
