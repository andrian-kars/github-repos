import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Pagination, Text, Button, Spinner } from "./components/common";
import { Repo } from "./components/Repo/Repo";
import { fetchGetSearchRepos } from "./redux/reducers/searchSlice";
import s from "./App.module.css";

const INITIAL_PAGE = 1;

export const App = () => {
  const dispatch = useDispatch();

  const { content, isLoading, error } = useSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState("");
  const [currPage, setCurrPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    handleSearch();
  }, [searchValue, currPage]);

  if (error)
    return (
      <div className={s.error}>
        <Text size="big">An error occured. Try again</Text>
        <Button onClick={handleSearch}>Reload</Button>
      </div>
    );

  function handleSearch() {
    dispatch(fetchGetSearchRepos(searchValue, currPage));
  }

  function handleSearchValueChange(value) {
    setSearchValue(value);
    setCurrPage(INITIAL_PAGE);
  }

  return (
    <div className={s.content}>
      <Input
        value={searchValue}
        onChange={handleSearchValueChange}
        placeholder="Search"
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={s.repos}>
            {content.items.map(
              ({
                id,
                name,
                owner,
                language,
                description,
                stargazers_count,
                watchers_count,
              }) => (
                <Repo
                  key={id}
                  name={name}
                  author={owner.login}
                  image={owner.avatar_url}
                  language={language}
                  description={description}
                  stars={stargazers_count}
                  watchers={watchers_count}
                />
              )
            )}
          </div>
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            totalItems={content.total_count}
          />
        </>
      )}
    </div>
  );
};
