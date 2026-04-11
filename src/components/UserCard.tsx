import styles from "../styles/UserCard.module.css";
import mockAvatar from "../assets/images/mock-avatar.png";
import classNames from "classnames";
export default function UserCard() {
	return (
		<div className={styles.userCard}>
			<div className={styles.userCardInfo}>
				<span
					className={classNames(styles.userCardInfoItem, styles.userCardName)}
				>
					Алексей А.
				</span>
				<a
					href="#"
					className={classNames(styles.userCardInfoItem, styles.userCardLink)}
				>
					Выйти
				</a>
			</div>
			<img
				src={mockAvatar}
				alt="mock avatar"
				className={styles.userCardAvatar}
			/>
		</div>
	);
}
