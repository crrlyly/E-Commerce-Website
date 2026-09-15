import db from "../config/db.js";

export async function getAllProducts(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT p.pid, p.pname, p.description, p.price, p.quantity, p.image as productImage, p.category_id, p.featured, c.category_name, c.image as categoryImage FROM product p JOIN category c using (category_id)",
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching products: ", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getProductById(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM product WHERE pid = ?", [
      req.params.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getFeaturedProducts(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT p.pid, p.pname, p.description, p.price, p.quantity, p.image as productImage, p.category_id, p.featured, c.category_name, c.image as categoryImage from product p JOIN category c using (category_id) where featured = TRUE",
    );
    return res.json(rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Featured products not found" });
  }
}

export async function getCategoryProducts(req, res) {
  try {
    const [rows] = await db.qu6ery(
      "SELECT p.pid, p.pname, p.description, p.price, p.quantity, p.image as productImage, p.category_id, p.featured, c.category_name, c.image as categoryImage from product p JOIN category c using (category_id) where c.category_name=?",
      [req.params.category],
    );
    return res.json(rows);
  } catch (error) {
    console.error("Error fetching category products", error);
    res.status(500).json({
      message: "Specific category products not found.",
    });
  }
}
