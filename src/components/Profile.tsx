import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [phone, setPhone] = useState<string>("");
  async function updatePhone() {
    try {
      const { data, error } = await supabase.auth.updateUser({
        phone,
      });
      console.log(data, error);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    supabase.auth.getUser().then((user) => {
      setUser(user.data.user);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  });

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center mb-5  ">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
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
        </div>
      </div>
    </>
  );
}
