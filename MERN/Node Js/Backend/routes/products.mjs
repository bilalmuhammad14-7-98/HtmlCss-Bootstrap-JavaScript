import express from "express";
import Ads from "../models/Ads.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  // step 1 - db say sara data lai kay aayega

  const ads = await Ads.find();
  console.log(ads, "adsss");
  res.send({ message: "Daata fetced sucessfully", data: ads });
});

router.post("/add", async (req, res) => {
  try {
    console.log(req.body, "request----");

    await Ads.create(req.body);
    res.send({ message: "data posted succesfully" });
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.put("/update", (req, res) => {
  res.send({ message: "data updated succesfully" });
});

router.delete("/delete", (req, res) => {
  res.send({ message: "data deleted succesfully" });
});

export default router;
