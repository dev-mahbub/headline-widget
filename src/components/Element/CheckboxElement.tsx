import React, { useState } from "react";
import Checkbox from "./Checkbox";
import InputLabel from "./InputLabel";

interface FormData {
  dummy_checkbox_1: boolean;
  dummy_checkbox_2: boolean;
  dummy_checkbox_3: boolean;
  select_all_days_id: boolean;
  monday_id: boolean;
  tuesday_id: boolean;
  wednesday_id: boolean;
  thursday_id: boolean;
  friday_id: boolean;
  saturday_id: boolean;
  sunday_id: boolean;
}

const CheckboxElements: React.FC = () => {
  const [data, setData] = useState<FormData>({
    dummy_checkbox_1: false,
    dummy_checkbox_2: false,
    dummy_checkbox_3: false,
    select_all_days_id: false,
    monday_id: false,
    tuesday_id: false,
    wednesday_id: false,
    thursday_id: false,
    friday_id: false,
    saturday_id: false,
    sunday_id: false,
  });

  const handleChange = (name: keyof FormData, value: boolean) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted ✅", data);
  };

  return (
    <div className="bg-white/70 shadow-[0_2px_10px_0px_rgba(0,0,0,0.08)] p-[30px] pt-[25px] maxXs:p-[15px] rounded-lg mb-5">
      <h5 className="text-[16px] text-gray-800 font-primary mb-3 font-semibold">
        Checkbox Style
      </h5>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-4 md:col-span-6">
            <div className="flex items-center justify-between">
              <InputLabel htmlFor="dummy_checkbox_3" value="Left Side Label" />

              <Checkbox
                id="dummy_checkbox_3"
                name="dummy_checkbox_3"
                checked={data.dummy_checkbox_3}
                onChange={(e) =>
                  handleChange("dummy_checkbox_3", e.target.checked)
                }
              />
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

export default CheckboxElements;
