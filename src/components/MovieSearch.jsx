import { useRef } from 'react';
import styles from './MovieSearch.module.css';

export default function MovieSearch({ setTitle, setType, setPage }) {
  const inputRef = useRef(null);

  function handleSearch() {
    if (inputRef.current.value.trim()) {
      setTitle(inputRef.current.value);
      setType('');
      setPage(1);
    }
  }

  // function handleChange() {
  //   if (inputRef.current.value === '') {
  //     setTitle('spider man');
  //   }
  // }

  return (
    <div className={styles.movie_search}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type="search"
          placeholder="제목검색"
          title="제목검색"
          // onChange={handleChange}
        />
        <button type="submit" onClick={handleSearch}>
          검색
        </button>
      </form>
    </div>
  );
}
