import type { LabelHTMLAttributes } from "react";

export const Form = () => {};

interface FormFieldProps extends LabelHTMLAttributes<HTMLLabelElement> {
	label: string;
	children: React.ReactNode;
}

const FormField = ({ label, children, ...props }: FormFieldProps) => {
	return (
		<div className="space-y-2">
			<label className="font-semibold" {...props}>
				{label}
			</label>
			{children}
		</div>
	);
};

const FormMessage = ({ message }: { message: string }) => {
	return (
		<div>
			<p className="text-red-500 text-sm italic">*{message}</p>
		</div>
	);
};

Form.FormField = FormField;
Form.FormMessage = FormMessage;
