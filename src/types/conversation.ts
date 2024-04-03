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
export interface Chat {
    time: Date;
    isAction: boolean;
    body?: string;
    status?: string;
    isReply: boolean;
    sentVia?: SentViaEnum[];
}
export interface Message {
    date: Date;
    chat: Chat[];
}

export enum SentViaEnum {
    EMAIL = 'EMAIL',
    LINKEDIN = 'LINKEDIN',
    AI = 'AI',
    HUMAN = 'HUMAN',
    HUMAN_AI = 'HUMAN_AI',
}

export interface Conversation {
    id: string;
    lead: Lead;
    campaign: string;
    lastMessage: string;
    status: string;
    sender: Sender;
    company: string;
    location: string;
    messages: Message[];
}
