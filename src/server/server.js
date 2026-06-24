import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import connectDB from "./Db.js";
import Client from "./Models/Client.js";
import VerifyToken from "./Middlewares/VerifyToken.js";

dotenv.config();

connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World from Verdique Server");
});

// Add Customer
app.post("/addclient", async (req, res) => {
  try {
    const { name, mail, phone, service, message } = req.body;

    if (!name || !mail || !phone || !service || !message) {
      return res.status(400).json({
        message: "Please fill all the details",
      });
    }

    const newClient = new Client({
      name,
      mail,
      phone,
      service,
      message,
      status: "Pending",
    });

    await newClient.save();

    res.status(201).json({
      message: "Client details saved successfully",
      client: newClient,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// Get All Customers
app.get("/client", VerifyToken, async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });

    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// Update Status
app.put("/client/:id", VerifyToken, async (req, res) => {
  try {
    const { status } = req.body;

    const customer = await Client.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    res.status(200).json({
      message: "Status updated successfully",
      customer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      {
        username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1min",
      }
    );

    return res.json({
      success: true,
      token,
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Credentials",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});