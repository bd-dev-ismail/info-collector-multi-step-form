import { useContext } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { FormContext } from "./context/FormProvider";
import FormSection from "./Components/FormSection/FormSection";
import CustomModal from "./Components/CustomModal/CustomModal";

function App() {
  const { modalData, setModalData } = useContext(FormContext);
  console.log(modalData);
  return (
    <div>
      <Navbar />
      <div>
        <FormSection />
      </div>
      <div>
        <CustomModal />
      </div>
    </div>
  );
}

export default App;
