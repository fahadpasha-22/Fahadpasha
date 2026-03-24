const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const MONGO_URI = "YOUR_MONGODB_LINK_HERE"; // baad me change karenge

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const schema = new mongoose.Schema({
  content: String
});

const Message = mongoose.model("Message", schema);

app.post("/api/entry", async (req, res) => {
  try {
    const newMsg = new Message({ content: req.body.textData });
    await newMsg.save();
    res.json({ status: "Success" });
  } catch {
    res.status(500).json({ status: "Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
