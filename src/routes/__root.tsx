import {
	Outlet,
	ScrollRestoration,
	createRootRoute,
} from "@tanstack/react-router";
import React from "react";

const TanStackRouterDevtools =
	import.meta.env.MODE === "production"
		? () => null
		: React.lazy(() =>
				import("@tanstack/router-devtools").then((res) => ({
					default: res.TanStackRouterDevtools,
				})),
			);

export const Route = createRootRoute({
	component: () => (
		<>
			<ScrollRestoration getKey={(location) => location.pathname} />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
