const express = require("express");

const router = express.Router();

const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const {
  getProduct,
  addProduct,
  getDetailProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const {
  addTransaction,
  getTransactions,
  getTransaction,
  notification,
} = require("../controllers/transaction");
const { register, login, checkAuth } = require("../controllers/auth");
const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");
const {
  getCategory,
  addCategory,
  deleteCategory,
  updateCategory,
  getDetailCategory,
} = require("../controllers/category");
const { addProfile, updateProfile } = require("../controllers/profile");

// Users
router.get("/users", getUsers);
router.get("/user/:id", getUser);

// Products
router.get("/products", getProduct);
router.get("/product/:id", getDetailProduct);
router.post("/product", auth, uploadFile("image"), addProduct);
router.patch("/product/:id", auth, uploadFile("image"), updateProduct);
router.delete("/product/:id", auth, deleteProduct);

// Categories
router.get("/categories", auth, getCategory);
router.get("/category/:id", auth, getDetailCategory);
router.post("/category", auth, addCategory);
router.delete("/category/:id", auth, deleteCategory);
router.patch("/category/:id", auth, updateCategory);

// Transaction
router.get("/transactions", auth, getTransactions);
router.post("/transaction", auth, addTransaction);

// Login & Register
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth/", auth, checkAuth);

// Profile
router.post("/profile", addProfile);
router.patch("/profile", auth, uploadFile("image"), updateProfile);

// Notification
router.post("/notification", notification);

module.exports = router;
