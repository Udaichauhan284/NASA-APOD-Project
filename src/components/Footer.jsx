

const Footer = (props) => {
  const {handleToggleModel, data} = props
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        {data ? (<h2>{data.title}</h2>) : 
        (<h2>The Initial Mars Landspace</h2>) }
        <h1>NASA APOD Project</h1>
      </div>
      <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info" />
      </button>
    </footer>
  )
};

export default Footer