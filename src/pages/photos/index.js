import * as React from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// markup
const PhotoPage = ({ data }) => {
    const { nodes } = data.allFile
    console.log(nodes)
    return (
        <main>
            <Navbar pageTitle={"Photos"} />
                {/* click through each image */}
            <div>
                {nodes.map((node) => (
                    <div className="mx-auto max-w-xl">
                        <Img fluid={node.childImageSharp.fluid} />
                    </div>
                ))}
            </div>

                
            
            

            
           
            <Footer socialink={{
                name: "@dokasgram",
                url: "https://www.instagram.com/dokasgram/"
            }}/>
        </main>
    );
}

export const query = graphql`
    query {
        allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
            nodes {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;

export default PhotoPage