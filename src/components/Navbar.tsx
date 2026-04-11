import styles from "../styles/Navbar.module.css";
import classNames from "classnames";

export default function Navbar({ className }: { className?: string }) {
	return (
		<nav className={classNames(styles.navbar, className)}>
			<ul className={styles.navbarList}>
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
