const React = require('react')

/**
 * withEither React HOC Helper
 * @param {*} conditionalRenderingFn
 * @param {*} EitherComponent
 */
const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent {...props} />
    : <Component {...props} />

module.exports = withEither
