export default function ProductPage() {
  return (
    <>
      <div className="flex justify-center gap-10">
        <div>
          <img src="/img/drone.webp" alt="img" />
        </div>
        <div>
          <h1 className="text-2xl mb-6">
            Purple State E88 Drone WiFi Camera Drone Remote Control Quadcopter
            360 Flip Stunt Drone
          </h1>
          <ul className="mb-4">
            <li className="list-disc">
              Available offers Buy this product and Get Extra ₹100 Off on Select
              Room Heaters
            </li>
            <li className="list-disc">
              {" "}
              Buy this product and Get Extra ₹75 Off on Select Room Heaters{" "}
            </li>
            <li className="list-disc">
              {" "}
              Special PriceGet extra ₹1100 off (price inclusive of
              cashback/coupon)
            </li>
            <li className="list-disc">
              {" "}
              Bank Offer10% off on HDFC Bank Credit Card EMI Transactions, up to
              ₹1,500 on orders of ₹7,500 and above
            </li>
          </ul>
          <div className="gap-4 flex">
            <button className="btn bg-primary hover:bg-primary/75  text-black">
              Buy Now
            </button>
            <button className="btn bg-secondary text-black hover:bg-secondary/75">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
