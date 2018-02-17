const React = require('react')

/**
 * withMaybe React HOC Helper
 * @param {*} conditionalRenderingFn
 */
const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

module.exports = withMaybe
