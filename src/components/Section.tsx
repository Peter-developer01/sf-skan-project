export default function Section({
	children,
	...rest
}: React.JSX.IntrinsicElements["section"]) {
	return <section {...rest}>{children}</section>;
}
