import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../../utils/UserContext"
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
    // console.log("parent constructor")
  }
  componentDidMount() {
    // console.log("parent component did mount")
  }
  render() {
    // console.log("Parent render")
    return (
      <div>
        <h1>About</h1>
        <UserClass
          name="First"
          Location="Yavatmal"
          Bio="TYIT Student"
          age="21"
          msg="Class Based component"
          contact="sauravfarkade9191@gmail.com"
        />
        <div>
          <UserContext.Consumer>
            {(myUserContext) => <h1>User: {myUserContext.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <UserClass name="Second" age="21" msg="Class Based component" /> */}
      </div>
    )
  }
}
export default About
