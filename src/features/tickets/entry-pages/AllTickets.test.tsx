import { filterTicketsByStatus } from "./AllTickets";

describe("filterTicketsByStatus", () => {
	const fakeTickets = [
		{
			id: 1,
			userId: 8,
			number: "ticket-1",
			status: "completed",
		},
		{
			id: 1,
			userId: 8,
			number: "ticket-2",
			status: "assigned",
		},
		{
			id: 1,
			userId: 8,
			number: "ticket-3",
			status: "unassigned",
		},
	];

	it("should return whole tickets when the status are not matched", () => {
		expect(
			filterTicketsByStatus("not-matched-status", fakeTickets)
		).toEqual(fakeTickets);
	});
});
