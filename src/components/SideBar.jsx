const SideBar = (props) => {
  const {handleToggleModel, data} = props;

  return (
    <>
      <div className="sidebar">
        <div onClick={handleToggleModel} className="bgOverlay"></div>
        <div className="sidebarContents">
          {data ? (<h1>{data.title}</h1>) : (<h1>The Initial Mars Landspace</h1>)}
          <div className="descriptionContainer">
            <h5 className="descriptionTitle">{data?.date}</h5>
            <p>
              {data?.explanation}
            </p>
          </div>
          <button onClick={handleToggleModel}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
