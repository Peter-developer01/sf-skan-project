import styles from "../styles/CompanyLimitInfo.module.css";
export default function CompanyLimitInfo() {
	return (
		<ul className={styles.limitInfo}>
			<li className={styles.limitInfoItem}>
				<span className={styles.limitInfoText}>Использовано компаний</span>
				{/* Placeholder data - same for next item as well */}
				<span className={styles.limitInfoNumber}>34</span>
			</li>
			<li className={styles.limitInfoItem}>
				<span className={styles.limitInfoText}>Лимит по компаниям</span>
				<span className={styles.limitInfoNumberGreen}>100</span>
			</li>
		</ul>
	);
}
