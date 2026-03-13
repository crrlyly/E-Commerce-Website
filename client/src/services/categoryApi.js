const API_URL = "http://localhost:5000/api/categories";

export async function getCategories(){
    const res = await fetch(API_URL)
    return res.json()
}

export async function getCategoryItemCounts(category_id){
    const res = await fetch(`${API_URL}/${category_id}/count`)
    return res.json()
}