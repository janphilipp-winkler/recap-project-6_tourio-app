import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function DetailPage() {
  const router = useRouter();
  const {
    data: product,
    isLoading,
    error,
  } = useSWR(`/api/products/${router.query.id}`);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <Link href="/products">
          We can not find your product! Please, check this out
        </Link>
      </div>
    );

  const { name, description, price } = product;

  return (
    <div>
      <h1>{name}</h1>
      <h2>Description: {description}</h2>
      <h2>Price:{price}</h2>
    </div>
  );
}
