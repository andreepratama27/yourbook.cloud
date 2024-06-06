import type { ButtonHTMLAttributes } from "react";
import "./button.sass";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
	return (
		<button type="button" {...props}>
			{props.children}
		</button>
	);
}
