
import Layout from '@/components/Layout/NavOnly';
import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Layout>
            <div style={{ height: '80vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ lineHeight: '48px' }}>
                    <h1 className="next-error-h1" style={{ display: 'inline-block', margin: '0 20px 0 0', paddingRight: '23px', fontSize: '24px', fontStyle: '500', verticalAlign: 'top' }}>404</h1>
                    <div style={{ display: 'inline-block' }}>
                        <h2 style={{ fontSize: '14px', fontStyle: '400', lineHeight: '28px' }}>
                            This page could not be found
                        </h2>
                    </div>
                </div>
                <Image src="/images/404.svg" alt="404" width={300} height={300} />
            </div>
        </Layout>
    );
};

export default NotFoundPage;
