import React, { createContext, useState } from "react";

export const FormContext = createContext();
const FormProvider = ({ children }) => {
  const [study, setStudy] = useState(null);
  const [readIn, setReadIn] = useState(null);
  const [looking, setLooking] = useState(null);
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  console.log(modalData);
  const handleForm = (e) => {
    e.preventDefault();
    if (study && readIn === "school") {
      const studyDataSchool = {
        study,
        readIn,
        schoolName: e.target.schoolName.value,
        schoolGrade: e.target.grade.value,
      };
      return setModalData(studyDataSchool);
    } else if (study && readIn === "college") {
      const studyDataCollege = {
        study,
        readIn,
        collegeName: e.target.collegeName.value,
        degree: e.target.degree.value,
        gradutionYear: e.target.gradutionYear.value,
      };
      return setModalData(studyDataCollege);
    } else if (!study && looking === "Job") {
      const jobData = {
        study,
        looking,
        collegeName: e.target.collegeName.value,
        degree: e.target.degree.value,
        gradutionYear: e.target.gradutionYear.value,
      };
      return setModalData(jobData);
    } else if (!study && looking === "Working") {
      const workData = {
        study,
        looking,
        companyName: e.target.companyName.value,
        experience: e.target.experience.value,
        jobTitle: e.target.jobTitle.value,
      };
      return setModalData(workData);
    }
  };
  const value = {
    study,
    setStudy,
    readIn,
    setReadIn,
    handleForm,
    looking,
    modalData,
    setLooking,
    setModalData,
    setShowModal,
    showModal,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
