const express = require("express");
const app = express();
const currentPort = process.env.PORT || 4000;
const authRoutes = require("./routes/auth");
const catogoryRoutes = require("./routes/category")
const productRoutes = require("./routes/products_routes");
const cartRoutes = require("./routes/cart");
const favouriteRoutes = require("./routes/favourite");
const connectDb = require("./db/mongodb");


app.get("/",(req,res)=>{
  res.status(200).send("Server Runnig Successfully");
});


app.use(express.json());

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/category", catogoryRoutes);
app.use("/cart", cartRoutes);
app.use("/favourite", favouriteRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

connectDb().then(() =>
  app.listen(currentPort, () => {
    console.log(`Server is running at ${currentPort}`);
  })
);
