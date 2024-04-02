import { getRandomCampaign } from '@/utils/helpers';
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

let FakeDataForExample = [];

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
    });
}

export const GET = async (request: Request) => {
    return NextResponse.json({ data: FakeDataForExample });
};
