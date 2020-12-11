import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import SEO from '../components/Seo';
import Embed from '../components/Embed';
import { mapEmbedToProps } from '../lib/mapToProps';
// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query ReportTemplate($reportId: String) {
    report: sanityReport(_id: { eq: $reportId }) {
      organization {
        name
        logo {
          asset {
            url
          }
        }
      }
      url
      type
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
export default ({ data }) => {
  const type = 'page';
  console.log(data.report);
  return (
    <Layout>
      <SEO title={`${data.report.organization.name} - ${data.report.type}`} />
      <Embed {...mapEmbedToProps(data.report)} />
    </Layout>
  );
};
