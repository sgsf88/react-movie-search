import styles from './MovieList.module.css';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <div className={styles.movie_list}>
      {/* 데이터가 없을 경우 undefined이므로 length가 실행되지않게하고 없을 경우 영화 테이터 없음을 표시 */}
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>영화 데이터 없음</p>
      )}
    </div>
  );
}
