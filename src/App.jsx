import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Pagination, Text, Button } from "./components/common";
import { Repo } from "./components/Repo/Repo";
import { fetchGetSearchRepos } from "./redux/reducers/searchSlice";
import s from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();

  const { content, isLoading, error } = useSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState("");
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  if (error)
    return (
      <div className={s.error}>
        <Text size="big">An error occured. Try again</Text>
        <Button onClick={handleSearch}>Reload</Button>
      </div>
    );

  function handleSearch() {
    dispatch(fetchGetSearchRepos(searchValue));
  }

  return (
    <div className={s.content}>
      <Input
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search"
      />
      {isLoading ? null : (
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
