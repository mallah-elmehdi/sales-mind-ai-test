export interface Lead {
    name: string;
    avatar: string;
    occupation: string;
    messagesLength: number;
}

export interface Sender {
    name: string;
    avatar: string;
}

export interface Conversation {
    id: string;
    lead: Lead;
    campaign: string;
    lastMessage: string;
    status: string;
    sender: Sender;
}
