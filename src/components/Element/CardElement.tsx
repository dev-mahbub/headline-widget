import { useState, type FormEvent } from "react";
import InputLabel from "./InputLabel";
import SelectInput from "./SelectInput";
import InputError from "./InputError";

const CardElements = () => {
  const [data, setData] = useState({
    dummy_1: "",
    dummy_select_1: "",
    dummy_textarea_1: "",
    dummy_card_check_4: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle input changes
  const handleChange = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Example: validate before submit
    if (!data.dummy_select_1) {
      setErrors({ dummy_select_1: "This field is required." });
      return;
    }

    // Reset errors
    setErrors({});

    // Example: post data (replace with fetch/axios)
    console.log("Submitting form data:", data);

    // Reset form
    setData({
      dummy_1: "",
      dummy_select_1: "",
      dummy_textarea_1: "",
      dummy_card_check_4: "",
    });
  };

  return (
    <div className="educare-common-card">
      <div className="bg-white/70 shadow-[0_2px_10px_0px_rgba(0,0,0,0.08)] p-[30px] pt-[27px] maxXs:p-[15px] rounded-lg mb-5">
        <div className="educare-common-card-title">
          <h5>
            <i className="icon-BookBookmark"></i>
            Common Card Style
          </h5>
        </div>
        <div className="educare-common-card-wrap-border border-t border-grayLight/20 pt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6 max2Xl:col-span-12 minMaxMd:col-span-6">
                <div className="educare-input-field-styles">
                  <InputLabel htmlFor="dummy_select_1" value="Non Required" />
                  <SelectInput
                    id="dummy_select_1"
                    data_label="Class"
                    data={[]} // your select options
                    value={data.dummy_select_1}
                    onChange={(e) =>
                      handleChange("dummy_select_1", e.target.value)
                    }
                    className="block"
                  />
                  <InputError
                    message={errors.dummy_select_1}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardElements;
