import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

import { fetchAllTickets as fetchAllTicketsAction } from "../redux/slices";

import styles from './AllTickets.module.css'

interface Ticket {
	id: number;
	userId: null | number;
	number: string;
	status: string;
}

export default function AllTickets() {
	const { tickets, actions } = usePageProps();
	return (
		<div>
			<h1>Page: All Tickets</h1>
			{/*@ts-ignore*/}
			<div onChange={actions.onFilterChange}>
				<h2>Filter by Status:</h2>
				<label>
					<input
						defaultChecked
						type="radio"
						value="status"
						name="status"
					/>
					all
				</label>
				<label>
					<input type="radio" value="assigned" name="status" />
					assigned
				</label>
				<label>
					<input type="radio" value="completed" name="status" />
					completed
				</label>
				<label>
					<input type="radio" value="unassigned" name="status" />
					unassigned
				</label>
			</div>
			<ol>
				{tickets.map((ticket: Ticket) => (
					<li key={ticket.number} className={styles.ticket}>
						<p>ticket-number: {ticket.number}</p>
						<p>assignee: {ticket.userId}</p>
						<p>status: {ticket.status}</p>
						<Link to={ticket.number}>See Detail Page</Link>
					</li>
				))}
			</ol>
		</div>
	);
}

export function filterTicketsByStatus(status: string, tickets: Ticket[]) {
	const allowedFilters = ["assigned", "completed", "unassigned"];
	if (!allowedFilters.includes(status)) {
		return tickets;
	}

	return tickets.filter((ticket) => ticket.status === status);
}

function usePageProps() {
	const dispatch = useDispatch();
	// @ts-ignore
	const allTickets = useSelector((state) => state.tickets.tickets);
	const [currentFilter, setFilter] = useState("all");
	const onFilterChange = (event: { target: { value: string } }) => {
		setFilter(event.target.value);
	};

	// @ts-ignore
	const fetchAllTickets = () => dispatch(fetchAllTicketsAction());

	useEffect(() => {
		fetchAllTickets();
	}, []);

	return {
		tickets: filterTicketsByStatus(currentFilter, allTickets),
		actions: {
			onFilterChange,
		},
	};
}
