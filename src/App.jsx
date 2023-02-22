import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "./components/common";
import { Repo } from "./components/Repo/Repo";
import { fetchGetSearchRepos } from "./redux/reducers/searchSlice";
import s from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();

  const { content, isLoading, error } = useSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState("");
  console.log(content);

  useEffect(() => {
    dispatch(fetchGetSearchRepos(searchValue));
  }, [searchValue]);

  return (
    <div className={s.content}>
      <Input
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search"
      />
      {isLoading ? null : (
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
      )}
    </div>
  );
};
