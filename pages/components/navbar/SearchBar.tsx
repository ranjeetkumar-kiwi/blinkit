"use-client";
import styles from "../../../styles/navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <SearchIcon />
      <input className={styles.searchInput} />
    </div>
  );
}

export default SearchBar