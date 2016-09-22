const React = require('react');
import FillerText from './FillerText'
// const FillerText = require('./FillerText')

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <title>"The world's coolest webpage"</title>
        <FillerText /><FillerText />
      </div>
    )
  }
}
module.exports = Webpage;
