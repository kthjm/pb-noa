import React from 'react'
import Head from '../entity/Head.js'
import App from '../entity/Mobile'

export default props => (
  <div>
    <Head />
    <App {...props} />
  </div>
)
