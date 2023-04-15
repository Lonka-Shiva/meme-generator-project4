import risk from "../Images/troll-face.png";
export default function Button() {
  function handleClick() {
    console.log("i was clicked");
  }
  function handleOnMouseOver() {
    console.log("MouseOver");
  }
  return (
    <>
      <div className="container">
        <img
          src={risk}
          alt="face"
          onMouseOver={handleOnMouseOver}
          className="button-risk"
        />
        <button onClick={handleClick}>click me!</button>
      </div>
    </>
  );
}
