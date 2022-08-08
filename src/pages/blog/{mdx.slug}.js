import * as React from 'react';
import Navbar from '../../components/navbar';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

// markup
const BlogPost = ({ data }) => {
    const { mdx } = data;
    return (
        <main>
            <Navbar pageTitle={mdx.frontmatter.title} />
            <div className="mx-auto max-w-xl items-center">
                <h1 className="text-3xl font-bold pl-3 pb-3">{mdx.frontmatter.title}</h1>
                <MDXProvider>
                <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {new Date().getFullYear()} Jesse Doka. All rights reserved.
            </span>
        </main>
    );
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;