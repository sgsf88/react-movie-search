import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieTab from './components/MovieTab';
import Pagination from './components/Pagination';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=14b5194';

// const movie = {
//   Title: 'Formula 1: BBC Sport',
//   Year: '2009-2015',
//   imdbID: 'tt1540109',
//   Type: 'series',
//   Poster:
//     'https://m.media-amazon.com/images/M/MV5BODY2MTJkOWItNTM0Yi00NDZmLTkwZGYtMTMwMTRlMTJlZGExXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
// };

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('bbc');
  // 다 가져와야 할 때 빈칸으로
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    // async: 프라미스를 리턴하는 함수에 사용 가능
    async function searchMovie() {
      // await: 비동기 동작을 동기적으로 실행되게 함
      const response = await fetch(
        `${API_URL}&s=${title}&type=${type}&page=${page}`
      );
      // js객체로 변환
      const data = await response.json();
      // 연도기준 내림차순 정렬
      // sort의 리턴값이 -1이면 내림차순, 1이면 오름차순 ( 1 : -1 = 오름차순 )
      // a,b = 배열의 이전요소, 다음요소
      // 속성명? 붙이면 undefined, null인 경우 뒤의 메서드 실행 안 함
      const sortData = data.Search?.sort((a, b) => (a.Year > b.Year ? -1 : 1));
      setMovies(sortData);
      // 총 페이지 갯수
      setTotalPage(Math.ceil(data.totalResults / 10));
    }
    searchMovie();
  }, [title, type, page]);

  return (
    <div className="app">
      <h2>MovieLand</h2>
      <MovieSearch setTitle={setTitle} setType={setType} setPage={setPage} />
      <MovieTab type={type} setType={setType} setPage={setPage} />
      <MovieList movies={movies} />
      {movies && (
        <Pagination
          totalPage={totalPage}
          limit={3}
          setPage={setPage}
          page={page}
        />
      )}
    </div>
  );
}
