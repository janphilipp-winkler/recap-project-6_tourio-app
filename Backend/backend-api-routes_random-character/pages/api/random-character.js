import Chance from "chance";

const chance = new Chance();
const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  twitterName: chance.twitter(),
  geohash: chance.geohash({ length: 5 }),
  country: chance.country({ full: true }),
};
export default function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json(character);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
