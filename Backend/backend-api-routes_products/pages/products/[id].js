import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailPage() {
  const router = useRouter();
  const { data: product } = useSWR(`/api/products/${router.query.id}`);

  if (!product) return <div>Loading...</div>;

  const { name, description, price } = product;

  return (
    <div>
      <h1>{name}</h1>
      <h2>Description: {description}</h2>
      <h2>Price:{price}</h2>
    </div>
  );
}
