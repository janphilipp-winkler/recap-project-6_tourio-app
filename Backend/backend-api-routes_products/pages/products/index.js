import useSWR from "swr";
import Link from "next/link";

export default function IndexPage() {
  const { data: products, isLoading, error } = useSWR("/api/products");
}
