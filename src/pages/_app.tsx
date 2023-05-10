import type { AppProps } from 'next/app';
import './index.css';
import StyledComponentsRegistry from '@/lib/registry';

function Layout({ children }: { children: React.ReactNode }) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

function vantaboardGitHubIO({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component {...pageProps} />;
        </Layout>
    );
}

export default vantaboardGitHubIO;
