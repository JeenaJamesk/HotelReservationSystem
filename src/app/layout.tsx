import React from 'react';
import '../styles/globals.css';


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body style={{ margin: 0}}>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;