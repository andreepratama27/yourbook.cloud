import type { Book } from "../../services/book.service";

export default function FavoriteCard(params: Book) {
	return (
		<div className="favorite-card flex items-center gap-4 shadow rounded p-2">
			<div className="favorite-card--image bg-gray-100 w-[60px] h-[80px] rounded ">
				<img src={params.cover} alt={params.title} className="w-full h-full" />
			</div>
			<div className="favorite-card--information flex-1">
				<p>{params.title}</p>
				<p className="text-gray-500">{params.description}</p>
			</div>
		</div>
	);
}
