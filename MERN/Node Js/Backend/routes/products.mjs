import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  // step 1 - db say sara data lai kay aayega
  res.send({ message: "Daata fetced sucessfully", data: [{ title: "hello" }] });
});

router.post("/add", (req, res) => {
  res.send({ message: "data posted succesfully" });
});

router.put("/update", (req, res) => {
  res.send({ message: "data updated succesfully" });
});

router.delete("/delete", (req, res) => {
  res.send({ message: "data deleted succesfully" });
});

export default router;
