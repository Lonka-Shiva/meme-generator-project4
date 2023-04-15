// import memepic from "../Images/Shut-Up-And-Take-My-Money-Fry.jpg";
import Memedata from "../Memedata";
export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.le);
    const url = memesArray[randomNumber];
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="top text" className="form-inp" />
        <input type="text" placeholder="bottom-text" className="form-inp" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new image{" "}
        </button>
        {/* <img src={memepic} alt="meme" className="form-meme" /> */}
      </div>
    </main>
  );
}
