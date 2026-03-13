import db from "../config/db.js";

export async function getAllProducts(req, res){
    try {
        const [rows] = await db.query("SELECT * FROM product JOIN category using (category_id)")
        res.json(rows)
    } catch (error) {
        console.error("Error fetching products: ", error)
        res.status(500).json({message: "Server error"})
    }
}

export async function getProductById(req, res){
    try {
        const [rows] = await db.query("SELECT * FROM product WHERE id = ?", [req.params.id])

        if(rows.length === 0){
            return res.status(404).json({message: "Product not found"})
        }

        res.json(rows[0])
    } catch (error) {
        console.error("Error fetching product:", error)
        res.status(500).json({message:"Server error"})
    }
}

export async function getFeaturedProducts(req, res){
    try {
        const [rows] = await db.query("SELECT * from product JOIN category using (category_id) where featured = TRUE")
        return res.json(rows)
    } catch (error) {
        console.error("Error fetching products:", error)
        res.status(500).json({message: "Featured products not found"})
    }
}



