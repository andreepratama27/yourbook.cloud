import { UploadIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
	onChange: (image: string) => void;
}

export default function ImageUploader({ onChange }: Props) {
	const [preview, setPreview] = useState("");

	const handleUploadFile = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const files = evt.target.files?.[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			setPreview(reader.result as string);
		};
		reader.readAsDataURL(files as File);
	};

	useEffect(() => {
		if (preview) onChange(preview);
	}, [preview, onChange]);

	if (preview) {
		return (
			<div className="w-48 h-48 rounded-md">
				<img
					src={preview}
					alt="preview-img"
					className="w-full h-full rounded-md"
				/>
			</div>
		);
	}

	return (
		<label
			htmlFor="cover"
			className="w-48 h-48 border-2 p-4 flex items-center justify-center rounded-md border-dashed gap-2 flex-col"
		>
			<UploadIcon />
			<p className="text-gray-500">Upload image here</p>
			<input
				type="file"
				id="cover"
				name="cover"
				className="hidden"
				onChange={handleUploadFile}
				accept="image/png, image/jpg, image/jpeg, image/svg, image/gif"
			/>
		</label>
	);
}
