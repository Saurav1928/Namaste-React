// import React from "react"
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(props) // object
//   }
//   render() {
//     const { name, age, msg } = this.props
//     return (
//       <div className="user-card">
//         <h1>Name :{this.props.name}</h1>
//         <p>Age : {this.props.age}</p>
//         <p>Msg : {this.props.msg}</p>
//       </div>
//     )
//   }
// }
// export default UserClass

import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count1: 0,
    }
  }
  render() {
    // console.log(this.state.count1)
    return (
      <div className="user-card">
        <h1>Name: {this.props.name} </h1>
        <h2>Count1: {this.state.count1}</h2>
        <div>
          <button
            className="myBtn"
            onClick={() => {
              //Wrong way => this.state.count1 =this.state.count1+ 1
              // correct way,
              this.setState({
                count1: this.state.count1 + 1,
                // in single method we can have multiple state variable updation , we dont even need to have another this.setState,
              })
            }}
          >
            Inc
          </button>
        </div>
      </div>
    )
  }
}
export default UserClass
