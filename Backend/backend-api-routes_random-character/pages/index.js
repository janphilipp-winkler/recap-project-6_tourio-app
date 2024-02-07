import useSWR from "swr";
import styled from "styled-components";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An Error occurred while fetching !!!");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  padding: 32px;
  margin-top: 32px;
  border-radius: 16px;
`;

const StyledList = styled.div`
  color: white;
  text-decoration: none;
  gap: 16px;
`;

export default function HomePage() {
  const {
    data: persons,
    error,
    isLoading,
  } = useSWR("/api/random-character", fetcher);

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading.....</p>;

  const { lastName, firstName, country, twitterName, geohash } = persons;

  return (
    <StyledCard>
      <h1>User information:</h1>
      <StyledList>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>Twitter: {twitterName}</p>
        <p>Country: {country}</p>
        <p>Geohash: {geohash}</p>
      </StyledList>
    </StyledCard>
  );
}
