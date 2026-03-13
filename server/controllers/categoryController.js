import db from "../config/db.js";

export async function getAllCategories(req, res) {
  try {
    const [rows] = await db.query("SELECT * from Category;");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Categories not found" });
  }
}

export async function getCategoryItemCount(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT c.category_id, c.category_name, count(p.pid) AS count from category c join product p using (category_id) where category_id = ? group by c.category_id, c.category_name",
      [req.params.id],
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching category item count:", error);
    res.status(500).json({ message: "No items in categories" });
  }
}
