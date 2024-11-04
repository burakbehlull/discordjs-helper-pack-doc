import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Image from 'next/image';

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center gap-2">
     
      <span className="font-bold">DiscordJS Helper Pack</span>
    </div>
  ),
  chat: {
    link: 'https://github.com/burakbehlull/discordjs-helper-pack-docs',
  },
  project: {
    link: 'https://github.com/burakbehlull/discordjs-helper-pack-docs',
  },
  docsRepositoryBase:
    'https://github.com/burakbehlull/discordjs-helper-pack-docs',
  gitTimestamp({ timestamp }) {
    const { locale, asPath } = useRouter();

    if (asPath !== '/') {
      return (
        <>
          Last updated on:{' '}
          <time dateTime={timestamp.toISOString()}>
            {timestamp.toLocaleDateString(locale, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </>
      );
    }
  },
  head: (meta: any) => {
    const { frontMatter, title } = useConfig();
    const { asPath } = useRouter();

    let ogTitle = `${title} – DiscordJS Helper Pack`;

    if (asPath === '/') {
      ogTitle = title;
    }

    const ogDescription = frontMatter.description || '';

    return (
      <>
        <meta content={ogTitle} property="og:title" />
        <meta content={ogDescription} property="og:description" />
        <meta content={asPath} property="og:url" />
        <meta content="#fab259" data-react-helmet="true" name="theme-color" />
      </>
    );
  },
};

export default config;