/* eslint-disable react/require-default-props */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { SeoQuery } from '../../graphql-types';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const Seo: React.FC<SeoProps> = ({ title, description, image, article }) => {
  const data = useStaticQuery<SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          siteUrl
          image
        }
      }
    }
  `);

  const siteMetadata = data.site?.siteMetadata;

  return (
    <Helmet
      defaultTitle={siteMetadata?.title!}
      titleTemplate={siteMetadata?.titleTemplate!}
      title={title}
    >
      <meta property="og:title" content={title || siteMetadata?.title!} />

      <meta
        property="og:description"
        content={description || siteMetadata?.description!}
      />

      <meta property="og:url" content={siteMetadata?.siteUrl!} />

      {article ? <meta property="og:type" content="article" /> : null}

      <meta property="og:image" content={image || siteMetadata?.image!} />

      <meta name="twitter:title" content={title || siteMetadata?.title!} />

      <meta
        name="twitter:description"
        content={description || siteMetadata?.description!}
      />

      <meta name="twitter:image" content={image || siteMetadata?.image!} />
    </Helmet>
  );
};

export default Seo;
