import logoGreen from "../images/logo-green.png";
import logoWhite from "../images/logo-white.png";

type LogoTheme = "green" | "white";
export default function Logo({ variant }: { variant: LogoTheme }) {
	const logos = { green: logoGreen, white: logoWhite };
	return <img src={logos[variant]} alt="logo" />;
}
