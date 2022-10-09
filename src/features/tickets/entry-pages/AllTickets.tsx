import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllTickets as fetchAllTicketsAction } from "../redux/slices";

interface Ticket {
	id: number;
	userId: null | number;
	number: string;
	status: string;
}

export default function AllTickets() {
	const { tickets } = usePageProps();
	return (
		<div>
			<h1>Page: All Tickets</h1>
			<ol>
				{tickets.map((ticket: Ticket) => (
					<li key={ticket.id}>
						<p>ticket-number: {ticket.number}</p>
						<p>assignee: {ticket.userId}</p>
						<p>status: {ticket.status}</p>
					</li>
				))}
			</ol>
		</div>
	);
}

function usePageProps() {
	const dispatch = useDispatch();
	// @ts-ignore
	const tickets = useSelector((state) => state.tickets.tickets);
	// @ts-ignore
	const fetchAllTickets = () => dispatch(fetchAllTicketsAction());

	useEffect(() => {
		fetchAllTickets();
	}, []);

	return {
		tickets,
	};
}
