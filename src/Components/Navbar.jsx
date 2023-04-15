import trollface from "../Images/troll-face.png";
export default function Navbar() {
  return (
    <>
      <header className="header">
        <img src={trollface} alt="logo" className="header-img" />{" "}
        <h2 className="header-head"> Meme-generator</h2>
        <h4 className="header-para">ReactCourse - Project 3</h4>
      </header>
    </>
  );
}
