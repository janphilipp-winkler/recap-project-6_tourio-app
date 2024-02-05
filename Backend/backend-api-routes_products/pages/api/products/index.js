import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json(getAllProducts());
    return;
  }
  console.log("check", handler);
  response.status(405).json({ message: "Method not allowed" });
}
