/* eslint-disable @typescript-eslint/no-var-requires */
// /* eslint-disable @typescript-eslint/no-var-requires */
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51OciSJSEESmqs0kXu6BAqgdk1dFU67FMYpjgOAAnpxZ2CZ07cilZUIN0rFmMMO1gN7Kk1B4hRthiyTAxigBcOK7Z00UQzRoljn"
// );

// app.use(express.json());
// app.use(cors());

// app.use(express.json());
// app.use(cors());

// //check out api
// app.post("/api/create-checkout-session", async (req, res) => {
//   const { products } = req.body;

//   const lineItem = products.map((product) => ({
//     price_data: {
//       currency: "inr",
//       product_data: {
//         name: product.id,
//       },
//       unit_amount: product.price * 100,
//     },
//     quantity: product.quantity,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: lineItem,

//     mode: "payment",
//     success_url: "http://localhost:5173/success",
//     cancel_url: "http://localhost:5173/cancel",
//   });
//   res.json({ id: session.id });
// });

// app.listen(7000, () => {
//   console.log("Server running on port 7000");
// });
// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51OciSJSEESmqs0kXu6BAqgdk1dFU67FMYpjgOAAnpxZ2CZ07cilZUIN0rFmMMO1gN7Kk1B4hRthiyTAxigBcOK7Z00UQzRoljn"
// );

// app.use(express.json());
// app.use(cors());

// // checkout api
// app.post("/api/create-checkout-session", async (req, res) => {
//   const { products } = req.body;

//   const lineItems = products.map((product) => ({
//     price_data: {
//       currency: "inr",
//       product_data: {
//         name: product.id,
//         images: [product.img],
//       },
//       unit_amount: product.price * 100,
//     },
//     quantity: product.quantity,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "http://localhost:3000/sucess",
//     cancel_url: "http://localhost:3000/cancel",
//   });

//   res.json({ id: session.id });
// });

// app.listen(7000, () => {
//   console.log("server start");
// });
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OcpOvSGlQB6g80oo0FWd7r7MAgufAI9IzOFgrVgYur2EM0xyNhBcbcoMUTWdAbg94p7rpFF6rCFzrJ99Y0XSBT600ZrrVC5fd"
);

app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.id,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/sucess",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});

app.listen(7000, () => {
  console.log("server start");
});
