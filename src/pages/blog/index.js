import * as React from "react"
import Navbar from "../../components/navbar"
import { Link, graphql } from "gatsby"

// markup
const BlogPage = ({ data }) => {
    const { edges } = data.allMdx
    return (
      <main>
        <Navbar pageTitle={"Blog"} />
        <div className="mx-auto max-w-xl items-center">
            <h1 className="text-3xl font-bold pl-3 pb-3">Blog</h1>
            <p className="pl-3 pb-3">
            This is a list of all the posts I have written.
            </p>
            <ul className="pl-3 pb-3">
                {edges.map(({ node }) => (
                    <li key={node.id}>
                    <Link to={node.slug}>{node.frontmatter.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        {/* {JSON.stringify(edges, null, 4)} */}
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} Jesse Doka. All rights reserved.
        </span>
      </main>
    );
}

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`;

export default BlogPage