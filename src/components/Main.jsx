const Main = (props) => {
  const {data} = props;
  return (
    <>
      <div className="imgContainer">
        <img className="bgImage" src={data.hdurl || "mars.png"} alt={data.title || "bg-pic"} />
      </div>
    </>
  );
};

export default Main;
