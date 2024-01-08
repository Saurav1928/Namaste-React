import React from "react"
class Practice extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.name + " practice constructor")
  }
  componentDidMount() {
    console.log(this.props.name + " practice componentDIdMount")
  }
  render() {
    console.log(this.props.name + " practice render")
    return <h2>{this.props.name} Practice</h2>
  }
}
export default Practice
