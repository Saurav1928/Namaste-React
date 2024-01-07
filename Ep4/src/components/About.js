import User from "./User"
import UserClass from "./UserClass"
const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <User name="Rohan" age="20" msg="Function Based component" /> */}
      <UserClass name="Saurav" age="21" msg="Class Based component" />
    </div>
  )
}
export default About
