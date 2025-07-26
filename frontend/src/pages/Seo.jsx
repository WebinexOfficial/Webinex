import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
title="Webinex - Freelance Web Development, SEO, UI/UX & Logo Design",
  description="Webinex is your one-stop freelancing hub for expert website development, result-driven SEO, creative UI/UX design, and professional logo creation. Affordable, reliable, and client-focused services.",
  name="@webinex_official",
  type="website",
  url="https://www.webinex.in",
  image="https://www.webinex.in/assets/images/webinex-cover.jpg",
  keywords="freelance web development, SEO services India, UI UX design, logo design services, Webinex freelancing, website design freelancer, custom website design, professional SEO expert, hire UI designer, graphic logo designer",
  canonical="https://www.webinex.in",
  locale="en_IN"
}) {
  return (
    <Helmet>
      {/* HTML meta tags */}
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebPage',
          "name": title,
          "description": description,
          "url": url,
          "image": image,
          "author": {
            "@type": "Person",
            "name": name
          }
        })}
      </script>
    </Helmet>
  );
}
