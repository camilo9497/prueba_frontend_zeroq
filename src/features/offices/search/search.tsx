import { SearchIcon } from "@/icons/search-icon";
import styles from "./search.module.css";

interface Props {
  search: string;
  onChange: (value: string) => void;
}

export const Search = ({ onChange, search }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerSearch}>
        <SearchIcon />
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Buscar surcusal"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
