import { useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import toast from "react-hot-toast";
import { z } from "zod";
import { Provider } from "@supabase/supabase-js";
import { useUser } from "./lib/helper/useUser";

export default function SignUp() {
  const user = useUser();
  const [email, setEmail] = useState("");

  const login = async (provider: Provider) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: "http://localhost:5173/" },
    });
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
      <button
        className=" "
        onClick={() => {
          if (user) {
            logout();
          } else {
            const modal = document.getElementById(
              "my_modal_2"
            ) as HTMLDialogElement;
            modal.showModal();
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
          <h3 className="font-bold text-lg text-black">Create your Account</h3>
          <p className="py-4 text-black">to continue to QuikMart</p>
          <button
            className="btn bg-neutral hover:bg-neutral/80 text-primary w-full mb-4"
            onClick={user ? logout : () => login("github")}
          >
            <img src="img/github.png" alt="" />
            SignUp with GitHub
          </button>
          <button
            className="btn w-full mb-6 bg-neutral hover:bg-neutral/80 text-primary"
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

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
