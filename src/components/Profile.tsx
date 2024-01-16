// import { useState } from "react";
// import { supabase } from "./lib/helper/supabaseClient";
// import { useUser } from "./lib/helper/useUser";
// import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useUser } from "./lib/helper/useUser";

const countries = {
  India: ["Gujarat", "Maharashtra", "Rajasthan"],
  USA: ["California", "Texas", "New York"],
  // Add more countries and states as needed
};

export default function Profile() {
  const user = useUser();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setState(""); // Reset the state selection when a new country is selected
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  return (
    <>
      <div>
        <div role="tablist" className="tabs tabs-lifted w-4/5 mx-auto my-10">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="User Info"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="text"
                  value={user?.user_metadata.email}
                  disabled
                  className="disabled:bg-white disabled:text-black input input-bordered  focus:outline-none w-full "
                />
              </label>
              <div className="flex gap-4 flex-col md:flex-row">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">First name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered  focus:outline-none w-full"
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Last name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered  focus:outline-none w-full "
                  />
                </label>
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Address</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24  focus:outline-none"
                  placeholder="Bio"
                  aria-colindex={2}
                ></textarea>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">City</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered  focus:outline-none w-full "
                />
              </label>
              <div className="flex gap-4 flex-col md:flex-row">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Country</span>
                  </div>
                  <select
                    className="input input-bordered  focus:outline-none w-full"
                    value={country}
                    onChange={handleCountryChange}
                  >
                    <option value="">Select a country</option>
                    {Object.keys(countries).map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">State</span>
                  </div>
                  <select
                    className="input input-bordered  focus:outline-none w-full"
                    value={state}
                    onChange={handleStateChange}
                  >
                    <option value="">Select a state</option>
                    {country &&
                      countries[country].map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Phone number</span>
                </div>
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="/d*"
                  placeholder="Type here"
                  className="input input-bordered  focus:outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </label>
              <button className="mt-5 rounded-lg btn w-full md:w-48 mb-4 bg-black border-black hover:bg-black/80 text-primary  ">
                Update
              </button>
            </form>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Order History"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            There is no history yet.
          </div>
        </div>
      </div>
    </>
  );
}
