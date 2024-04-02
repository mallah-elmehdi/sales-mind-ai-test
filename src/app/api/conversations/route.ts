import {
    getRandomActionStatus,
    getRandomBoolean,
    getRandomCampaign,
    getRandomCity,
    getRandomCompany,
    getRandomMessagingMethod,
} from '@/utils/helpers';
import {
    getRandomName,
    getRandomJobTitle,
    timeFormatting,
    getRandomDate,
    getRandomStatus,
    getRandomAvatar,
    getRandomNumber,
} from '@/utils/helpers';
import { NextResponse } from 'next/server';
import { v4 as getUuid } from 'uuid';
import { loremIpsum } from 'lorem-ipsum';

let FakeDataForExample = [];

const getFakeChat = () => {
    let chat = [];

    for (let i = 0; i < 10; i++) {
        if (i % 3) {
            chat.push({
                time: timeFormatting(getRandomDate()),
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
                time: timeFormatting(getRandomDate()),
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

for (let i = 0; i < 33; i++) {
    FakeDataForExample.push({
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

export const GET = async (request: Request) => {
    return NextResponse.json({ data: FakeDataForExample });
};
