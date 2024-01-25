// import { useState } from "react";
import { useUser } from "./lib/helper/useUser";
import { supabase } from "./lib/helper/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import ProfileForm from "./profileForm";

// const countries = {
//   India: {
//     Gujarat: ["Surat", "Ahmedabad", "Vadodara"],
//     Maharashtra: ["Mumbai", "Pune", "Nagpur"],
//     Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
//   },
//   USA: {
//     California: ["Los Angeles", "San Francisco", "San Diego"],
//     Texas: ["Houston", "Austin", "Dallas"],
//     "New York": ["New York City", "Buffalo", "Rochester"],
//   },
// };

export default function Profile() {
  const user = useUser();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["userData", user?.id],
    async queryFn() {
      const { data, error } = await supabase
        .from("users")
        .select("firstName,lastName,country,state,city,pincode,phoneNo,address")
        .eq("id", user!.id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  // const [firstName, setFirstName] = useState(userData?.firstName ?? "");
  // const [country, setCountry] = useState(userData?.country ?? "");
  // const [state, setState] = useState(userData?.state ?? "");
  // const [city, setCity] = useState(userData?.city ?? "");
  // const [pincode, setPincode] = useState(userData?.pincode ?? "");
  // const [phoneNo, setphoneNo] = useState(userData?.phoneNo ?? "");
  // const [address, setAddress] = useState(userData?.address ?? "");
  // const [lastName, setLastName] = useState(userData?.lastName ?? "");

  if (isLoading) {
    return <p>loading...</p>;
  }

  // const handleCountryChange = (event) => {
  //   setCountry(event.target.value);
  //   setState("");
  //   setCity("");
  // };

  // const handleStateChange = (event) => {
  //   setState(event.target.value);
  //   setCity("");
  // };

  // const handleCityChange = (event) => {
  //   setCity(event.target.value);
  // };

  // async function updateUserInfo() {
  //   const { error } = await supabase
  //     .from("users")
  //     .update({
  //       firstName,
  //       lastName,
  //       country,
  //       state,
  //       city,
  //       pincode,
  //       phoneNo,
  //       address,
  //     })
  //     .eq("id", user!.id);

  //   console.log(error);
  // }

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
            {userData && <ProfileForm data={userData} />}
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
