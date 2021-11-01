import { GatsbyNode } from 'gatsby';
import path from 'path';
import { CreatePagesQuery } from './graphql-types';
import { createPath } from './src/utils';

// eslint-disable-next-line import/prefer-default-export
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const { data, errors } = await graphql<CreatePagesQuery>(`
    query CreatePages {
      categories: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/categories/" } }
      ) {
        nodes {
          frontmatter {
            name
          }
        }
      }
      monographs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/monographs/" } }
      ) {
        nodes {
          frontmatter {
            title
            category
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  data?.categories.nodes?.forEach((node) => {
    const name = node.frontmatter?.name;

    if (!name) return;

    createPage({
      path: createPath([name]),
      component: path.resolve('./src/templates/Category.tsx'),
      context: {
        name,
      },
    });
  });

  data?.monographs.nodes?.forEach((node) => {
    const title = node.frontmatter?.title;
    const category = node.frontmatter?.category;

    if (!title || !category) return;

    createPage({
      path: createPath([category, title]),
      component: path.resolve('./src/templates/Monograph.tsx'),
      context: {
        title,
      },
    });
  });
};
