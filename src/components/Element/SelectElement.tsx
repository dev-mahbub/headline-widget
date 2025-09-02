import React, { useState } from "react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import SelectInput from "./SelectInput";

interface FormData {
  dummy_select_1: string;
  dummy_select_2: string;
  dummy_select_3: string;
  dummy_select_4: string;
  dummy_select_5: string;
}

const SelectElements: React.FC = () => {
  const [data, setData] = useState<FormData>({
    dummy_select_1: "",
    dummy_select_2: "",
    dummy_select_3: "",
    dummy_select_4: "",
    dummy_select_5: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (name: keyof FormData, value: string) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy validation example
    if (!data.dummy_select_1) {
      setErrors({ dummy_select_1: "This field is required." });
    } else {
      setErrors({});
    }

    console.log("Form submitted ✅", data);
  };

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  return (
    <div className="bg-white/70 shadow-[0_2px_10px_0px_rgba(0,0,0,0.08)] p-[30px] pt-[25px] maxXs:p-[15px] rounded-lg mb-5">
      <h5 className="text-[16px] text-gray-800 font-primary mb-3 font-semibold">
        Select Style
      </h5>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6">
            <div className="educare-input-field-styles">
              <InputLabel htmlFor="dummy_select_1" value="Non Required" />

              <SelectInput
                id="dummy_select_1"
                data_label="Select an option"
                data={options}
                value={data.dummy_select_1}
                onChange={(e) => handleChange("dummy_select_1", e.target.value)}
                className="block"
              />

              <InputError message={errors.dummy_select_1} className="mt-2" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SelectElements;
