const path = require(`path`);
const makeRequest = (graphql, request) => new Promise((resolve, reject) => {  
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});

exports.createPages = ({ boundActionCreators, graphql }) => {  
  const { createPage } = boundActionCreators;
  const getJobs = makeRequest(graphql, `
    {
      allStrapiJob {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiJob.edges.forEach(({ node }) => {
      createPage({
        path: `/job/${node.id}`,
        component: path.resolve(`src/templates/jobTemplate.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  return getJobs;
};