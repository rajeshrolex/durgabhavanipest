import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, canonical }) => {
    const siteTitle = 'Durga Bhavani Pest Control'
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
    const siteUrl = 'https://durgabhavanipest.in'
    const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

    // Default keywords if none provided
    const defaultKeywords = 'pest control service, termite control, cockroach control, hyderabad pest control, best pest control services'
    const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}/images/logo.png`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={`${siteUrl}/images/logo.png`} />
        </Helmet>
    )
}

export default SEO
