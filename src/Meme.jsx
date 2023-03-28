import React from "react";
import './global.css'
// import memesData from "./memesData";

export default function Meme() {
    
    
    const [meme, setMeme] = React.useState(
        {
        topText: "ONE DOES NOT SIMPLY",
        bottomText: "WALK INTO MORDOR",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState();

    const [topText, setTopText] = React.useState("ONE DOES NOT SIMPLY")

    const [bottomText, setBottomText] = React.useState("WALK INTO MORDOR")


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then(data => setAllMemes(data))
    }, [] )
    
    function getMemeImage() {
        const memesArray = allMemes.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const randomUrl = allMemes.data.memes[randomIndex].url;
        console.log(randomUrl);
    
    setMeme(prevMeme => {
        return {
        ...prevMeme,
        randomImage: randomUrl
    }})
    };


    function handleChange(event) {
        
        const {name, value} = event.target;


        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))          
    }
    

    function handleClick() {
        getMemeImage();
    }







    return(
        
        <main>
            <div className="meme-container">
                <div className="form">
                    <div className="input-container">

                        <input
                        type="text"
                        className="input"
                        id="input-1"
                        value={meme.topText}
                        name="topText"
                        onChange={handleChange} />

                        <input
                        type="text"
                        className="input"
                        id="input-2"
                        value={meme.bottomText}
                        name="bottomText"
                        onChange={handleChange} />
                        

                    </div>
                    <div className="submit-container">
                        <button className="submit" name="meme" onClick={handleClick}>Get a new meme image</button>
                    </div>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} alt="meme" className="meme--image"/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            
            </div>
        </main>
    )
}