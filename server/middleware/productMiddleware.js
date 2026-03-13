// Used to check request info before it reaches data to make sure no malicious info or wrong info was put in

export function validateProduct(req, res, next) {
  const { pname, description, price, quantity, image, category_id } = req.body;

  //name check
  if (!pname || pname.trim().length === 0) {
    return res.status(400).json({ message: "Product name is required" });
  }

  if (pname.length > 255) {
    return res.status(400).json({ message: "Product name is too long" });
  }

  //description check
  if (!description || description.trim().length === 0) {
    return res.status(400).json({ message: "Product description is required" });
  }

  //price check
  if (price === undefined || price === null || isNaN(price)) {
    return res.status(400).json({message: "Price must be a number"})
  }

  if (Number(price) <= 0) {
    return res.status(400).json({ message: "Price must be greater than 0" });
  }

  //quantity check
  if (quantity === undefined || quantity === null || isNaN(quantity)) {
    return res.status(400).json({message: "Quantity must be a number"})
  }

  if(Number(quantity) < 0){
    return res.status(400).json({message: "Quantity can't be negative"})
  }

  //category check
  if(!category_id) {
    return res.status(400).json({message: "Category is required"})
  }

  //image check
  if(image && typeof image !== "string"){
    return res.status(400).json({message: "Image must be a string URL or filename"})
  }

  //if everything is valid
  next()
}
