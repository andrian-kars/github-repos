import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "./components/common";
import { fetchGetSearchRepos } from "./redux/reducers/searchSlice";

export const App = () => {
  const dispatch = useDispatch();

  const { content, isLoading, error } = useSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(fetchGetSearchRepos(searchValue));
  }, [searchValue]);

  return (
    <div className="content">
      <Input
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search"
      />
    </div>
  );
};
