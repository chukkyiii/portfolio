// useState
import React, { useState } from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { graphql } from "gatsby"
import Img from "gatsby-image"


// markup
const PhotoPage = ({ data }) => {
    const { nodes } = data.allFile
    console.log(nodes)
    const [i, setI] = useState(0)

    function Increment() {
        if (i < nodes.length - 1) {
            setI(i + 1)
        } else {
            setI(0)
        }
    }

    function Decrement() {
        if (i > 0) {
            setI(i - 1)
        } else {
            setI(nodes.length - 1)
        }
    }

    return (
        <main>
            <Navbar pageTitle={"Photos"} />
            <div className="mx-auto sm:w-1/2 pt-9">
                <div className="align-middle">
                    <Img
                        fadeIn={true}
                        fluid={nodes[i].childImageSharp.fluid}

                        className= {
                            nodes[i].childImageSharp.fluid.sizes.split(' ').pop().split('px')[0] < 2048 ?  "sm:w-1/2 mx-auto" : "w-full mx-auto pt-9"
                        }
                    /> 
                </div>
            </div>
            <div class="absolute top-0 bottom-12 w-full left-0 flex opacity-0">
                <button class="w-1/2" onClick={Decrement}>Previous</button>
                <button class="w-1/2" onClick={Increment}>Next</button>
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
                    fluid (maxWidth: 2048, quality: 100){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    }
`;

export default PhotoPage