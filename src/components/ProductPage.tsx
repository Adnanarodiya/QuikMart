export default function ProductPage() {
  return (
    <>
      <div className="flex">
        <div className="w-72">
          <img src="/img/Locket.webp" alt="" />
        </div>
        <div>
          <h1>
            John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </h1>
          <p>₹MRP</p>
          <div className="flex flex-row gap-3">
            <input className="w-12 border" type="number" name="quantity" />
            <p>Quantity</p>
          </div>
        </div>
      </div>
    </>
  );
}
