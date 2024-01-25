import { useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import { useUser } from "./lib/helper/useUser";
const countries = {
  India: {
    Gujarat: ["Surat", "Ahmedabad", "Vadodara"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
  },
  USA: {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Austin", "Dallas"],
    "New York": ["New York City", "Buffalo", "Rochester"],
  },
};
interface Props {
  data: {
    firstName: string | null;
    lastName: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    pincode: string | null;
    phoneNo: string | null;
    address: string | null;
  };
}
function ProfileForm({ data: userData }: Props) {
  const user = useUser();
  const [firstName, setFirstName] = useState(userData?.firstName ?? "");
  const [country, setCountry] = useState(userData?.country ?? "");
  const [state, setState] = useState(userData?.state ?? "");
  const [city, setCity] = useState(userData?.city ?? "");
  const [pincode, setPincode] = useState(userData?.pincode ?? "");
  const [phoneNo, setphoneNo] = useState(userData?.phoneNo ?? "");
  const [address, setAddress] = useState(userData?.address ?? "");
  const [lastName, setLastName] = useState(userData?.lastName ?? "");
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setState("");
    setCity("");
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
    setCity("");
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  async function updateUserInfo() {
    const { error } = await supabase
      .from("users")
      .update({
        firstName,
        lastName,
        country,
        state,
        city,
        pincode,
        phoneNo,
        address,
      })
      .eq("id", user!.id);

    console.log(error);
  }
  return (
    <div>
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
              placeholder="Enter your first name"
              className="input input-bordered  focus:outline-none w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Last name</span>
            </div>
            <input
              type="text"
              placeholder="Enter your last name"
              className="input input-bordered focus:outline-none w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Address</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24  focus:outline-none"
            placeholder="Enter your address"
            aria-colindex={2}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
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
                Object.keys(countries[country]).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">State</span>
            </div>
            <select
              className="input input-bordered  focus:outline-none w-full"
              value={city}
              onChange={handleCityChange}
            >
              <option value="">Select a city</option>
              {state &&
                countries[country][state].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Pincode</span>
            </div>
            <input
              type="number"
              placeholder="Enter your pincode"
              className="input input-bordered  focus:outline-none w-full "
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
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
            placeholder="Enter your phone number"
            className="input input-bordered  focus:outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value={phoneNo}
            onChange={(e) => setphoneNo(e.target.value)}
          />
        </label>
        <button
          className="mt-5 rounded-lg btn w-full md:w-48 mb-4 bg-black border-black hover:bg-black/80 text-primary  "
          onClick={updateUserInfo}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
