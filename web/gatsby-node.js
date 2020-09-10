const path = require('path');

// create all structured pages except for /guides
async function createReports(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityReport {
        edges {
          node {
            _id
            organization {
              slug {
                current
              }
            }
            type
          }
        }
      }
    }
  `);

  const reports = data.allSanityReport.edges;
  reports.forEach((report) => {
    actions.createPage({
      path: `/${report.node.organization.slug.current}`,
      component: path.resolve(`./src/templates/report.js`),
      context: {
        reportId: report.node._id,
      },
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await createReports(actions, graphql);
};
