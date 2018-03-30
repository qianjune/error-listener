// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
const fetch = require('isomorphic-unfetch')

type C = { email: string; url: string; product: string }

export default class ErrorListener {
  asyncFetch = (url: string, body: object) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  start = ({ email, url, product }: C) => async (
    message: string,
    source: string,
    lineNo: number,
    colNo: number
  ) => {
    const response = await this.asyncFetch(url, {
      email,
      url,
      product,
      message,
      source,
      lineNo,
      colNo
    })
    return response
  }
}
