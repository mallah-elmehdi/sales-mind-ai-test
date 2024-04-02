import { STATUS } from '@/constants/programme';

export const getRandomName = () => {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Taylor', 'Clark'];
    const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
    const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
    const firstName = firstNames[randomFirstNameIndex];
    const lastName = lastNames[randomLastNameIndex];

    return `${firstName} ${lastName}`;
};

export const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * 70);
    return `https://i.pravatar.cc/150?img=${randomIndex}`;
};

export const getRandomJobTitle = () => {
    const jobs = [
        'Software Engineer',
        'Data Scientist',
        'Web Developer',
        'Product Manager',
        'UX Designer',
        'Financial Analyst',
        'Marketing Manager',
        'Operations Manager',
        'HR Specialist',
        'Graphic Designer',
    ];

    const randomIndex = Math.floor(Math.random() * jobs.length);
    return jobs[randomIndex];
};

export const getRandomCampaign = () => {
    const campaigns = [
        'Software Engineer in Bangkok',
        'Data Analyst in Phuket',
        'Product Manager in Chiang Mai',
        'UX Designer in Pattaya',
        'Web Developer in Bangkok',
        'Marketing Specialist in Phuket',
        'Financial Analyst in Chiang Mai',
        'HR Manager in Pattaya',
        'Graphic Designer in Bangkok',
        'Content Writer in Phuket',
        'Sales Executive in Chiang Mai',
        'Customer Support Representative in Pattaya',
        'Project Manager in Bangkok',
        'Business Analyst in Phuket',
        'Digital Marketer in Chiang Mai',
        'UI/UX Designer in Pattaya',
        'Software Developer in Bangkok',
        'Social Media Manager in Phuket',
        'Operations Manager in Chiang Mai',
        'Data Scientist in Pattaya',
    ];

    const randomIndex = Math.floor(Math.random() * campaigns.length);
    return campaigns[randomIndex];
};

export const getRandomNumber = () => {
    return Math.floor(Math.random() * 42);
};

export const getRandomDate = () => {
    const currentDate = new Date();
    const lastYear = new Date(currentDate);
    lastYear.setFullYear(lastYear.getFullYear() - 1);

    const randomTimestamp = lastYear.getTime() + Math.random() * (currentDate.getTime() - lastYear.getTime());
    return new Date(randomTimestamp);
};

export const getRandomStatus = () => {
    const status = STATUS;

    const randomIndex = Math.floor(Math.random() * status.length);
    return status[randomIndex];
};

export const dateFormatting = (_date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(_date);

    return {
        month: months[date.getMonth()],
        year: date.getFullYear(),
        day: date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate(),
    };
};

export const timeFormatting = (_date: Date) => {
    const date = new Date(_date);

    return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
};
