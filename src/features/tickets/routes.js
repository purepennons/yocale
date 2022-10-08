import AllTicketsPage from "./entry-pages/AllTickets";
import TicketDetailPage from "./entry-pages/TicketDetail";

export default function getRouters() {
	return [
		{
			path: "tickets",
			element: <AllTicketsPage />,
		},
		{
			path: "tickets/:id",
			element: <TicketDetailPage />,
		},
	];
}
