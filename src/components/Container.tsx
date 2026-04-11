import classNames from "classnames";
import styles from "../styles/Container.module.css";
export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={classNames(styles.container, className)}>{children}</div>
	);
}
