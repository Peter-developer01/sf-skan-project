import AuthButtons from "./AuthButtons";
import styles from "../styles/HeaderUserArea.module.css";
import CompanyLimitInfo from "./CompanyLimitInfo";
import UserCard from "./UserCard";
import classNames from "classnames";

export default function HeaderUserArea({
	loggedIn,
	className,
}: {
	loggedIn: boolean;
	className?: string;
}) {
	let toRender: React.ReactNode | null = null;
	if (!loggedIn) toRender = <AuthButtons />;
	else
		toRender = (
			<>
				<CompanyLimitInfo />
				<UserCard />
			</>
		);
	return (
		<div className={classNames(styles.headerUserArea, className)}>
			{toRender}
		</div>
	);
}
