import React, { useContext, useState } from "react";
import { FormContext } from "../../context/FormProvider";

const CustomModal = () => {
  //   const [showModal, setShowModal] = useState(false);
  const { setShowModal, showModal, modalData } = useContext(FormContext);
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  {modalData.study && (
                    <h3 className="text-3xl font-semibold">I am In Studying</h3>
                  )}
                  {!modalData.study && (
                    <h3 className="text-3xl font-semibold">
                      I am Not Studying
                    </h3>
                  )}

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {modalData.looking === "Job" && (
                    <ul>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          I am currently Looking for
                          {modalData.looking}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          College Name: {modalData.collegeName}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Latest Degree: {modalData.degree}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Gradution Year: {modalData.gradutionYear}
                        </p>
                      </li>
                    </ul>
                  )}
                  {modalData.looking === "Working" && (
                    <ul>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          I am currently
                          {modalData.looking}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Company Name: {modalData.companyName}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Experience: {modalData.experience}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Job Title: {modalData.jobTitle}
                        </p>
                      </li>
                    </ul>
                  )}
                  {modalData.readIn === "school" && (
                    <ul>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          I am currently In
                          {modalData.readIn}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          School Name: {modalData.schoolName}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          School Grade: {modalData.schoolGrade}
                        </p>
                      </li>
                    </ul>
                  )}
                  {modalData.readIn === "college" && (
                    <ul>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          I am currently In
                          {modalData.readIn}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          College Name: {modalData.collegeName}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Latest Degree: {modalData.degree}
                        </p>
                      </li>
                      <li>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Gradution Year: {modalData.gradutionYear}
                        </p>
                      </li>
                    </ul>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CustomModal;
