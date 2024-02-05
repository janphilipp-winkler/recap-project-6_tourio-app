import useSWR from "swr";
import Link from "next/link";

export default function OverviewPage() {
  const { data: products, isLoading, error } = useSWR("/api/products");

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading.....</p>;

  return (
    <div>
      <h1>List of Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
