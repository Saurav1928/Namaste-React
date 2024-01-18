import React from "react"
class UserClass extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props) // object
    this.state = {
      userInfo: {
        name: "Dummy",
        Location: "DefaultLocation",
        Bio: "DummyBio",
        Contact: "DummyContact",
      },
    }
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/Saurav1928")
    const json = await data.json()
    // console.log(json)
    this.setState({
      userInfo: json,
    })
  }
  componentWillUnmount() {
    // console.log("Component unmounting")
  }
  render() {
    // const { name, age, msg } = this.props
    // console.log(this.state.userInfo.name)
    const { name, location, bio, login } = this.state.userInfo
    return (
      <div className="user-card">
        <h1>Name :{name}</h1>
        <p>Location : {location}</p>
        <p>Bio : {bio}</p>
        <p>Username : {login}</p>
      </div>
    )
  }
}
export default UserClass

// import React from "react"
// import Practice from "./Practice"

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props.name + "child constructor")
//     this.state = {
//       count1: 0,
//     }
//   }
//   componentDidMount() {
//     console.log(this.props.name + " child component did mount")
//   }
//   render() {
//     console.log(this.props.name + "child render")
//     // console.log(this.state.count1)
//     return (
//       <div className="user-card">
//         <h1>Name: {this.props.name} </h1>
//         <h2>Count1: {this.state.count1}</h2>

//         <div>
//           <button
//             className="myBtn"
//             onClick={() => {
//               //Wrong way => this.state.count1 =this.state.count1+ 1
//               // correct way,
//               this.setState({
//                 count1: this.state.count1 + 1,
//                 // in single method we can have multiple state variable updation , we dont even need to have another this.setState,
//               })
//             }}
//           >
//             Inc
//           </button>
//         </div>
//         <Practice name={this.props.name} />
//       </div>
//     )
//   }
// }
// export default UserClass
