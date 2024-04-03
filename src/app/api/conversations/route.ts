import { Conversation } from '@/types/conversation';
import {
    getRandomActionStatus,
    getRandomAvatar,
    getRandomBoolean,
    getRandomCampaign,
    getRandomCity,
    getRandomCompany,
    getRandomDate,
    getRandomJobTitle,
    getRandomMessagingMethod,
    getRandomName,
    getRandomNumber,
    getRandomStatus,
    timeFormatting,
} from '@/utils/helpers';
import fs from 'fs';
import { loremIpsum } from 'lorem-ipsum';
import { NextResponse } from 'next/server';
import path from 'path';
import { v4 as getUuid } from 'uuid';

const getFakeChat = () => {
    let chat = [];

    for (let i = 0; i < 10; i++) {
        if (i % 3) {
            chat.push({
                time: getRandomDate(),
                isAction: false,
                sentVia: getRandomMessagingMethod(),
                body: loremIpsum({
                    count: getRandomNumber(),
                    units: 'words',
                    format: 'plain',
                }),
                isReply: getRandomBoolean(),
            });
        } else {
            chat.push({
                isAction: true,
                time: getRandomDate(),
                status: getRandomActionStatus(),
                isReply: getRandomBoolean(),
            });
        }
    }
    return chat;
};

const getMessages = () => {
    let FakeMessagesForExample = [];

    for (let i = 0; i < 12; i++) {
        FakeMessagesForExample.push({
            date: getRandomDate(),
            chat: getFakeChat(),
        });
    }

    return FakeMessagesForExample;
};

const getData = () => {
    let data = [];
    for (let i = 0; i < 33; i++) {
        data.push({
            id: getUuid(),
            lead: {
                name: getRandomName(),
                avatar: getRandomAvatar(),
                occupation: getRandomJobTitle(),
                messagesLength: getRandomNumber(),
            },
            campaign: getRandomCampaign(),
            lastMessage: timeFormatting(getRandomDate()),
            status: getRandomStatus(),
            sender: {
                name: getRandomName(),
                avatar: getRandomAvatar(),
            },
            company: getRandomCompany(),
            location: getRandomCity(),
            messages: getMessages(),
        });
    }
    return data;
};

const filePath = path.join('./src/constants', 'data.json');

export const GET = async () => {
    let FakeDataForExample: Conversation[] = [];

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        if (data ) FakeDataForExample = JSON.parse(data);
        else FakeDataForExample = getData();
    } catch (err) {
        console.log(err);
    }

    fs.writeFileSync(filePath, JSON.stringify(FakeDataForExample));

    return NextResponse.json({ data: FakeDataForExample });
};

export const POST = async (request: Request) => {
    const { id, body } = await request.json();
    let FakeDataForExample: Conversation[] = [];

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        FakeDataForExample = JSON.parse(data);
    } catch (err) {
        console.error(err);
    }

    const conversationIndex = FakeDataForExample.map((item) => item.id).indexOf(id);
    const lastMessageIndex = FakeDataForExample[conversationIndex].messages.length - 1;
    const nweBubble = {
        time: new Date(),
        isAction: false,
        sentVia: getRandomMessagingMethod(),
        body,
        isReply: true,
    };

    FakeDataForExample[conversationIndex].lastMessage = timeFormatting(new Date());
    FakeDataForExample[conversationIndex].messages[lastMessageIndex].chat.push(nweBubble);

    fs.writeFileSync(filePath, JSON.stringify(FakeDataForExample));

    return NextResponse.json({
        data: FakeDataForExample[conversationIndex].messages[lastMessageIndex],
    });
};
