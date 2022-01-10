import { fetchMovies } from "../../service/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastItem from "./CastItem/CastItem";
// import s from './Cast.module.css';

export default function Cast() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const cast = await fetchMovies(`movie/${movieId}/credits`);
      setCastList(cast);
    };

    asyncFetch();
  }, [movieId]);

  return <>{castList && <CastItem castList={castList} />}</>;
}

// export default Cast;
