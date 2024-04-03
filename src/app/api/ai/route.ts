import { NextResponse } from 'next/server';
import { loremIpsum } from 'lorem-ipsum';
import { getRandomNumber } from '@/utils/helpers';

export const GET = async (request: Request) => {
    const url = new URL(request.url);
    const urlParams = url.searchParams;
    const type = urlParams.get('type') || 'ICE_BREAKER'; // <<<<< INPUTS FOR THE AI ENGINE >>>>>
    const variant = parseInt(urlParams.get('variant') || '1'); // <<<<< INPUTS FOR THE AI ENGINE >>>>>

    return NextResponse.json({
        message: loremIpsum({
            count: getRandomNumber(),
            units: 'words',
            format: 'plain',
        }),
    });
};
