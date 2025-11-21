export default function Head() {
  return (
    <>
      <title>Ruddy & Ruddy</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Ruddy & Ruddy LLC" />

      {/* Open Graph */}
      <meta property="og:title" content="RUDDY & RUDDY LLC" />
      <meta
        property="og:description"
        content="Accounting, Taxation & Advisory"
      />
      <meta property="og:url" content="https://www.ruddyandruddy.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.ruddyandruddy.com/og-image.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Logo" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="RUDDY & RUDDY LLC" />
      <meta
        name="twitter:description"
        content="Accounting, Taxation & Advisory"
      />
      <meta
        name="twitter:image"
        content="https://www.ruddyandruddy.com/og-image.jpg"
      />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
