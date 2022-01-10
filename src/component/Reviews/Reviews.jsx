import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../../service/api";
import RevItem from "./RevItem/RevItem";

export default function Reviews() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [reviews, setRevList] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const reviews = await fetchMovies(`movie/${movieId}/review`);
      setRevList(reviews);
    };

    asyncFetch();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          <RevItem reviews={reviews} />
        </ul>
      )}
    </>
  );
}
