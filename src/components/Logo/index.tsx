import { metadata } from '@/app/layout';
import { LOGO } from '@/assets/cdn';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return <Image src={LOGO} width={120} height={30} quality={80} alt="sales mind ai logo" />;
};

export default Logo;
