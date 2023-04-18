import { useContext } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { FormContext } from "./context/FormProvider";
import FormSection from "./Components/FormSection/FormSection";

function App() {
  const { name } = useContext(FormContext);
  console.log(name);
  return (
    <div>
      <Navbar />
      <div>
        <FormSection />
      </div>
    </div>
  );
}

export default App;
