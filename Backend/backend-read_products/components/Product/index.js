import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  console.log("Check", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  const { name, reviews } = data;

  return (
    <ProductCard>
      <h2>{name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      {reviews.map((review) => (
        <p key={review._id}>Rating: {review.rating} </p>
      ))}

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
