import { useRouter } from "@tanstack/react-router";
import Button from "../ui/button";
import "./jumbotron.sass";

export default function Jumbotron() {
	const router = useRouter();
	return (
		<div className="jumbotron">
			<div className="jumbotron-wrapper" />
			<p className="font-serif font-extralight">
				Have a book collection to submit?
			</p>

			<Button
				className="font-semibold"
				onClick={() =>
					router.navigate({
						to: "/create",
					})
				}
			>
				Submit Here
			</Button>
		</div>
	);
}
