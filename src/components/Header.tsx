import Logo from "./Logo";
import Navbar from "./Navbar";
import AuthButtons from "./AuthButtons";
import styles from "../styles/Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Logo variant="green" />
				<Navbar />
				<AuthButtons />
			</div>
		</header>
	);
}
