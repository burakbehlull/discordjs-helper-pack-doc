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
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – DiscordJS Helper Pack',
      };
    }
  },
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
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="/" target="_blank">
          DiscordJS Helper Pack
        </a>
      </span>
    ),
  },
};

export default config;