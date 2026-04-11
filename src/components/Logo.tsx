import type React from "react";
import logoGreen from "../images/logo-green.png";
import logoWhite from "../images/logo-white.png";

type LogoTheme = "green" | "white";
export default function Logo({
	variant,
	...rest
}: { variant: LogoTheme } & React.JSX.IntrinsicElements["img"]) {
	const logos = { green: logoGreen, white: logoWhite };
	return (
		<a href="/">
			<img src={logos[variant]} alt="logo" {...rest} />
		</a>
	);
}
