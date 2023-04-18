import React from "react";

const FormSection = () => {
  return (
    <div className=" flex justify-center items-center min-h-[70vh] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div>
        <div>
          <h3 className="text-3xl text-center font-bold">
            Hi Khalid, Welcome to Info Collector!
          </h3>
        </div>
        <form>
          <div>
            <p className="text-black text-xl font-semibold" htmlFor="study">
              Are you currently studying?
            </p>
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-4">
                <input
                  type="radio"
                  name="study"
                  value={true}
                  className="radio "
                  checked
                />{" "}
                Yes
              </label>
              <label className="flex items-center gap-4">
                <input
                  type="radio"
                  name="study"
                  value={false}
                  className="radio "
                  checked
                />{" "}
                No
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
