import ConversationArea from '@/components/ConversationArea';

const getConversationData = async () => {
    const res = await fetch('http://localhost:3000/api/conversations', { cache: 'no-cache', next: { tags: ['conversation'] } });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

export default async function ConversationTable() {
    const data = await getConversationData();

    return <ConversationArea data={data.data} />;
}
