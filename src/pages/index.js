import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { createGlobalStyle } from "styled-components"
import Layout from "../components/layout";
import Seo from "../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home/home.component";
require('../assets/Euclid Regular.ttf');

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  }

  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family:'Euclid', serif;
  }
`

const IndexPage = () => (
  <Layout>
     <Seo title='Welcome to our webpage'/>
     <GlobalStyle/>
     <Home/>
  </Layout>
)

export default IndexPage
