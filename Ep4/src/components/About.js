import User from "./User"
import UserClass from "./UserClass"
import React from "react"
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User name="Rohan" age="20" msg="Function Based component" /> */}
//       <UserClass name="Saurav" age="21" msg="Class Based component" />
//     </div>
//   )
// }

class About extends React.Component {
  constructor(props) {
    super(props)
    console.log("parent constructor")
  }
  componentDidMount() {
    console.log("parent component did mount")
  }
  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>About</h1>
        <UserClass name="First" age="21" msg="Class Based component" />
        <UserClass name="Second" age="21" msg="Class Based component" />
      </div>
    )
  }
}
export default About
