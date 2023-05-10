import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Brighten Tompkins</title>
                    <Link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
