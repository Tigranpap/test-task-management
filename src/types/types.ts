export  interface ITicket {
    id: number;
    name: string;
    description: string
}

export  interface ISprint {
    name: string;
    startDate: string;
    endDate: string;
    tickets: ITicket[];
}
