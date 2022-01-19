import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../service/api';
import RevItem from './RevItem/RevItem';
import s from './Reviews.module.css';

export default function Reviews() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [reviews, setRevList] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const reviews = await fetchMovies(`movie/${movieId}/reviews`);
      setRevList(reviews);
    };

    asyncFetch();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul className={s.cardList}>
          {reviews.results.map(el => (
            <RevItem key={el.id} reviews={el} />
          ))}
        </ul>
      )}
    </>
  );
}
