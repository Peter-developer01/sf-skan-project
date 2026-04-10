import styles from "../styles/AuthButtons.module.css";

export default function AuthButtons() {
	return (
		<div className={styles.authButtons}>
			<a href="#" className={styles.btnRegister}>
				Зарегистрироваться
			</a>
			<div className={styles.separator}></div>
			<a href="#" className={styles.btnLogin}>
				Войти
			</a>
		</div>
	);
}
