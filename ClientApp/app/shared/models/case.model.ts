import { Client } from "./client.model";

export interface Case {
    id: number;
    caseNumber: string;
    type: string;
    createdDate: Date;
    client: Client;
}
