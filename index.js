const express = require("express");
const app = express();
const currentPort = 4005;
const authRoutes = require("./routes/auth");
const catogoryRoutes = require("./routes/category")
const productRoutes = require("./routes/products_routes");
const cartRoutes = require("./routes/cart");
const connectDb = require("./db/mongodb");

app.use(express.json());

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/category", catogoryRoutes);
app.use("/cart", cartRoutes);

app.all("/*", (req, res) => {
  res.status(404).send("Page Not Found");
});

connectDb().then(() =>
  app.listen(currentPort, () => {
    console.log(`Server is running at ${currentPort}`);
  })
);
