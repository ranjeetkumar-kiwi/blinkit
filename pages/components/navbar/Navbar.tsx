"use-client"
import styles from "../../../styles/navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Location from "./Location";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  return (
    <div className={styles.nav}>
      <Logo />
      <Location />
      <SearchBar />
      <div className={styles.login}>Login</div>
      <div className={styles.cartSection} onClick={() => router.push("/cart")}>
        <ShoppingCartIcon />
        <span>My Cart</span>
      </div>
    </div>
  );
}

export default Navbar