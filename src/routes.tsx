import Layout from './components/layout'
import Index from "./entry-pages";
import getUserRoutes from './features/users/routes'
import getTicketsRoutes from './features/tickets/routes'

export default function getRoutes() : [{}] {
	return [
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Index />,
				},
				...getUserRoutes(),
				...getTicketsRoutes(),
			],
			errorElement: <div>Error!</div>
		},
	];
}
