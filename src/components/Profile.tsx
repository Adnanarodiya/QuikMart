// import { useState } from "react";
// import { supabase } from "./lib/helper/supabaseClient";
// import { useUser } from "./lib/helper/useUser";
// import { NavLink } from "react-router-dom";

export default function Profile() {
  // const user = useUser();
  // const [phone, setPhone] = useState<string>("");
  // async function updatePhone() {
  //   try {
  //     const { data, error } = await supabase.auth.updateUser({
  //       phone,
  //     });
  //     console.log(data, error);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <div>
        {/* <div className="flex flex-col justify-center items-center mb-5  ">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col items-center">
          <h3 className="mb-4">
            Full Name :- {user?.user_metadata.full_name ?? ""}
          </h3>
          <h3 className="mb-6 border-b-2 pb-4">Email :- {user?.email ?? ""}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updatePhone();
              console.log(phone);
            }}
          >
            <label className="form-control mb-4 w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Phone No :- {user?.phone ?? ""}
                </span>
              </div>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Type here"
                className="focus:outline-none input input-bordered w-full max-w-xs"
              />
            </label>

            <button className="btn w-full  max-w-xs mb-4 bg-success text-black hover:bg-success/80">
              Submit
            </button>
          </form>
        </div> */}
        <div className="w-3/5 mx-auto">
          <div role="tablist" className="tabs tabs-bordered mt-5">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="User Info"
              checked
            />
            <div role="tabpanel" className="tab-content p-10">
              <form>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                  />
                </label>
                <div className="flex gap-4">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">First name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Last name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Address</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
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
                    className="input input-bordered w-full "
                  />
                </label>
                <div className="flex gap-4">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Country</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Postal code</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Phone number</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                  />
                </label>
                <button className="mt-5 rounded-lg btn w-full md:w-48 mb-4 bg-black border-black hover:bg-black/80 text-primary  ">
                  Update
                </button>
              </form>
            </div>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Order History"
            />
            <div role="tabpanel" className="tab-content p-10">
              asdddddddddddddddd
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
