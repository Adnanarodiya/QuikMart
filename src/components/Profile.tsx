export default function Profile() {
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
        <div className="flex flex-col justify-center items-center">
          <label className="form-control mb-4 w-full max-w-xs">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="focus:outline-none input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control mb-4 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="focus:outline-none input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control mb-4 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone No</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="focus:outline-none input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control mb-4 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="focus:outline-none input input-bordered w-full max-w-xs"
            />
          </label>
          <button className="btn w-full  max-w-xs mb-4 bg-success text-black hover:bg-success/80">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
