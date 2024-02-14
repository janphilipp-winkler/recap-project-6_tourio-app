import Sight from "@/db/models/Sight";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      if (!sight) {
        return response.status(404).json({ status: "Not found" });
      }
      const sight = await Sight.findById(id);
      return response.status(200).json(sight);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
