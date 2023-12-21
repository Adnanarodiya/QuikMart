import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { User } from "@supabase/supabase-js";

export default function SignUp() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then((user) => {
      setUser(user.data.user);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  });

  const login = async (provider) => {
    await supabase.auth.signInWithOAuth({ provider });
  };

  const logout = async () => {
    supabase.auth.signOut();
  };

  async function signInWithEmail() {
    try {
      if (!email.trim()) {
        throw new Error("Email is required");
      }
      const emailSchema = z.string().email();
      const emailParsed = emailSchema.parse(email);

      const herPromise = supabase.auth.signInWithOtp({ email: emailParsed });
      await toast.promise(herPromise, {
        loading: "Sending Email",
        success: "Email Sent 😊",
        error: "Error Sending Email 😢",
      });

      const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
      modal.close();
    } catch (error) {
      console.log(error);
      toast.error("Invalid Email 😢");
    }
    setEmail("");
  }

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=" "
        onClick={() => {
          if (user) {
            logout();
          } else {
            const modal = document.getElementById(
              "my_modal_2"
            ) as HTMLDialogElement;
            modal.close();
          }
        }}
      >
        {user ? "Logout" : "Login"}
      </button>
      <dialog
        id="my_modal_2"
        className="modal backdrop-saturate-200 backdrop-blur-xl bg-opacity-80"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {user && <span>Welcome {user.user_metadata.name}, </span>}
            Create your Account
          </h3>
          <p className="py-4">to continue to QuikMart</p>
          <button
            className="btn w-full mb-4"
            onClick={user ? logout : () => login("github")}
          >
            <img src="img/github.png" alt="" />
            SignUp with GitHub
          </button>
          <button
            className="btn w-full mb-6"
            onClick={user ? logout : () => login("google")}
          >
            <img src="img/google.png" alt="" />
            SignUp with Google
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signInWithEmail();
            }}
          >
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Your email</span>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="xyz@email.com"
                className="input input-bordered w-full focus:outline-none"
              />
            </label>

            <button className="btn w-full mb-4 bg-success text-black hover:bg-success/80">
              Submit
            </button>
          </form>
        </div>
        <Toaster />

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
