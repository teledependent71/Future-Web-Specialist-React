import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Web Specialist</title>
        <meta property="og:title" content="Future Web Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
