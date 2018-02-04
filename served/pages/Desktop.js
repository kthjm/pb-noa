import React, { Component, Fragment } from 'react'
import Head from '../Head.js'
import App from '../apps/Desktop.js'

export default class Page extends Component {
  static async getInitialProps({
    err,
    req,
    res,
    pathname,
    query,
    asPath
  }) {
    return { initialValue: 8 }
  }

  render() {
    return (
      <Fragment>
        <Head />
        <App {...this.props} />
      </Fragment>
    )
  }
}