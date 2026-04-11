import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderUserArea from "./HeaderUserArea";
import styles from "../styles/Header.module.css";
import Container from "./Container";

export default function Header({ loggedIn }: { loggedIn: boolean }) {
	return (
		<header className={styles.header}>
			<Container className={styles.headerContainer}>
				<Logo variant="green" className={styles.logo} />
				<Navbar className={styles.navbar} />
				<HeaderUserArea loggedIn={loggedIn} className={styles.headerUserArea} />
			</Container>
		</header>
	);
}
