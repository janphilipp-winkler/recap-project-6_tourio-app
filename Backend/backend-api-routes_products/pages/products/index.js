import useSWR from "swr";
import Link from "next/link";

export default function OverviewPage() {
  const { data: products, isLoading, error } = useSWR("/api/products");

  if (error) return <p>Error</p>;
  if (isLoading) return <p>Loading.....</p>;
  return (
    <div>
      <h1>List of Products</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
