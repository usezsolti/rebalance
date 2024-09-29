import '../styles/globals.css'; // Importáljuk a globális stílusokat
import Head from 'next/head'; // Importáljuk a Head komponenst

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>REbalance - Masszázs Budapest</title>
        <meta
          name="description"
          content="Üdvözöljük a REbalance masszázsszalonban Budapesten!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={{ margin: 0, padding: 0 }}>
        {/* Itt megjelenik az oldal tartalma */}
        {children}
      </body>
    </html>
  );
}
