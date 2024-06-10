export default function Loader({ length = 4 }: { length?: number }) {
	return (
		<div className="grid grid-cols-2 gap-4 anime-grid">
			{Array(length)
				.fill("")
				.map((_, key) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div className="grid w-full" key={key}>
						<div className="w-full h-64 bg-gray-100 animate-pulse fallback-image" />
						<div className="w-full h-6 mt-2 bg-gray-100 animate-pulse fallback-image" />
					</div>
				))}
		</div>
	);
}
