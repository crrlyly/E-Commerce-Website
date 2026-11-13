const API_URL = "http://localhost:5000/api/products";

export async function getProducts() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function getFeaturedProducts() {
  const res = await fetch(`${API_URL}/featured`);
  return res.json();
}

export async function getCategoryProducts(category) {
  const res = await fetch(`${API_URL}/category/${category}`);
  return res.json();
}


function reverseList(head) {
  let prev = head
  prev.next = null
  while(head !== null){
    let curr = head.next
    curr.next = prev
    prev.next = curr
    head = head.next
  }
}