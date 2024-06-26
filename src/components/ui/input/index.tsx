import type { InputHTMLAttributes } from "react";
import "./input.sass";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
	return <input {...props} />;
}
