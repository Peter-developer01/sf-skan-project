import styles from "../styles/Navbar.module.css";

export default function Navbar() {
	return (
		<nav>
			<ul className={styles.navbar}>
				<li>
					<a className={styles.navLink} href="/">
						Главная
					</a>
				</li>
				<li>
					<a className={styles.navLink} href="#">
						Тарифы
					</a>
				</li>
				<li>
					<a className={styles.navLink} href="#">
						FAQ
					</a>
				</li>
			</ul>
		</nav>
	);
}
