import Card from '../Card';
import DataTable from './DataTable';

const getConversationData = async () => {
    const res = await fetch('http://localhost:3000/api/conversations', { cache: 'no-cache' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

export default async function ConversationTable() {
    const data = await getConversationData();

    return (
        <Card>
            <DataTable data={data.data} />
        </Card>
    );
}
