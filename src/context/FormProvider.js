import React, { createContext, useState } from "react";
export const FormContext = createContext();
const FormProvider = ({ children }) => {
  const [name, setName] = useState("Amir");
  const value = { name };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
