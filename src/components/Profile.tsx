import { useUser } from "./lib/helper/useUser";
import { supabase } from "./lib/helper/supabaseClient";
import { useQuery } from "@tanstack/react-query";
import ProfileForm from "./ProfileForm";

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

  if (isLoading) {
    return <p>loading...</p>;
  }

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
