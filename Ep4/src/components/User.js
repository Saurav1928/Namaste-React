const User = (props) => {
  return (
    <div className="user-card">
      <h1>Name :{props.name}</h1>
      <p>Age : {props.age}</p>
      <p>Msg : {props.msg}</p>
    </div>
  )
}
export default User
