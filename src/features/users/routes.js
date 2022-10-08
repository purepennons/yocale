import AllUsersPage from "./entry-pages/AllUsers";
import UserPage from "./entry-pages/User";

export default function getRouters() {
	return [
		{
			path: "users",
			element: <AllUsersPage />,
		},
		{
			path: "users/:id",
			element: <UserPage />,
		},
	];
}
