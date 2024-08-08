import { useEffect, useState } from 'react';
import { sliceArrayByLimit } from '../lib/utils';
import styles from './Pagination.module.css';

export default function Pagination({ totalPage, limit, setPage, page }) {
  const [currentPageArr, setCurrentPageArr] = useState([]);
  const [totalPageArr, setTotalPageArr] = useState([]);

  // 렌더링과 관계없이 totalPage가 변경되면 실행
  // useEffect 사용 시 렌더링되는 데 시간 소요
  useMemo(() => {
    const pageGroup = sliceArrayByLimit(totalPage, limit);
    setTotalPageArr(pageGroup);
    setCurrentPageArr(pageGroup[0]);
  }, [totalPage]);

  // 페이지번호 변경 시 totalPageArr에서 이전, 다음 배열로 현재페에지 배열 변경
  useEffect(() => {
    // 페이지번호가 1이면 totalPageArr[0], 6이면 totalPageArr[1]
    if (page % limit === 1) {
      setCurrentPageArr(totalPageArr[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      // 페이지번호가 5이면 totalPageArr[0], 10이면 totalPageArr[1]
      setCurrentPageArr(totalPageArr[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  return (
    <div className={styles.pagination}>
      {page !== 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>
          이전
        </button>
      )}
      {currentPageArr?.map((num) => (
        <button
          type="button"
          key={num}
          onClick={() => setPage(num + 1)}
          className={`${styles.num_btn} ${
            page === num + 1 ? styles.active : ''
          }`}
        >
          {num + 1}
        </button>
      ))}
      {page !== totalPage && (
        <button type="button" onClick={() => setPage(page + 1)}>
          다음
        </button>
      )}
    </div>
  );
}
