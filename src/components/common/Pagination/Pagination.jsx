import { memo, useEffect } from "react";
import { REPOS_PER_PAGE } from "src/constants";
import { Button } from "../Button/Button";
import s from "./Pagination.module.css";

const MAX_PAGES = 8;

export const Pagination = memo(({ currPage, setCurrPage, totalItems }) => {
  const totalPages = Math.ceil(totalItems / REPOS_PER_PAGE);
  if (totalPages < 2) return null;

  let arrOfPages = [];
  console.log(currPage, totalPages);

  // []
  if (currPage > 4) {
    // [5, 6, 7, 8]
    // [2, 3, 4, 5]
    for (let i = 0; i < 4; i++) {
      arrOfPages.unshift(currPage - i);
    }

    // [5, 6, 7, 8, 9, 10, 11, 12]
    // [2, 3, 4, 5, 6, 7, 8, 9]
    if (totalPages - currPage >= 4) {
      for (let i = 1; i <= 4; i++) {
        arrOfPages.push(currPage + i);
      }
    } else {
      // [5, 6, 7, 8, 9, 10]
      // [2, 3, 4, 5, 6, 7]
      for (let i = 1; i <= totalPages - currPage; i++) {
        arrOfPages.push(currPage + i);
      }

      // [3, 4, 5, 6, 7, 8, 9, 10]
      // [1, 2, 3, 4, 5, 6, 7]
      const pagesLeftToAdd = MAX_PAGES - arrOfPages.length;
      for (let i = 1; i <= pagesLeftToAdd; i++) {
        const newPage = arrOfPages[0] - 1;
        if (newPage > 0) {
          arrOfPages.unshift(newPage);
        } else {
          break;
        }
      }
    }
  } else {
    // [1, 2]
    // [1, 2, 3]
    // [1]
    // [1, 2, 3, 4]
    for (let i = 0; i < currPage; i++) {
      arrOfPages.unshift(currPage - i);
    }
  }

  // [1, 2, 3, 4, 5, 6, 7, 8]
  // [1, 2, 3, 4, 5]
  // [1, 2]
  // [1, 2, 3, 4]
  const pagesLeftToAdd = MAX_PAGES - arrOfPages.length;
  const availablePagesToAdd =
    totalPages >= MAX_PAGES ? pagesLeftToAdd : totalPages - arrOfPages.length;
  for (let i = 1; i <= availablePagesToAdd; i++) {
    arrOfPages.push(currPage + i);
  }

  return (
    <div className={s.pagination}>
      {currPage !== 1 && (
        <Button className={s.left} onClick={() => setCurrPage(currPage - 1)}>
          Previous
        </Button>
      )}
      {arrOfPages.map((page) => (
        <Button
          key={page}
          active={currPage === page}
          onClick={() => setCurrPage(page)}
        >
          {page}
        </Button>
      ))}
      {currPage !== totalPages && (
        <Button className={s.right} onClick={() => setCurrPage(currPage + 1)}>
          Next
        </Button>
      )}
    </div>
  );
});
