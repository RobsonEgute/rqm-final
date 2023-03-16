import React from "react"
import './App.css';
let colors = ["darkred", "darkblue", "darkgreen", "black", "purple", "darkyellow", "darkorange", "darksilver", "darkturquoise", "rgb(171, 7, 152)", "rgb(60, 154, 74)", "rgb(160, 173, 8)"];
let quotes = [
    ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "-Nelson Mandela"],
    ["The way to get started is to quit talking and begin doing.", "-Walt Disney"],
    ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.", "-Steve Jobs"],
    ["If life were predictable it would cease to be life, and be without flavor.", "-Eleanor Roosevelt"],
    ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "-Oprah Winfrey"],
    ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "-James Cameron"],
    ["When you reach the end of your rope, tie a knot in it and hang on.", "-Franklin D. Roosevelt"],
    ["The future belongs to those who believe in the beauty of their dreams.", "-Eleanor Roosevelt"],
    ["Tell me and I forget. Teach me and I remember. Involve me and I learn.", "-Benjamin Franklin"],
    ["It is during our darkest moments that we must focus to see the light.", "-Aristotle"],
    ["Life is never fair, and perhaps it is a good thing for most of us that it is not.", "-Oscar Wilde"],
    ["The only impossible journey is the one you never begin.", "-Tony Robbins"],
    ["Only a life lived for others is a life worthwhile.", "-Albert Einstein"],
    ["Live in the sunshine, swim the sea, drink the wild air.", "-Ralph Waldo Emerson"],
    ["Do not let making a living prevent you from making a life.", "-John Wooden"],
    ["Life is a long lesson in humility.", "-James M. Barrie"],
    ["The only thing that feels better than winning is winning when nobody thought you could.", "-Hank Aaron"],
    ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "-Winston Churchill"],
    ["If your actions inspire others to dream more, learn more, do more and become more, you are a leader.", "-John Quincy Adams"]
];

class Quotes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
      colorIndex: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    event.preventDefault();
    let randomIndex = Math.floor(Math.random() * quotes.length); 
    let randomColor = Math.floor(Math.random() * colors.length);
    let preStr = "https://twitter.com/intent/tweet?text=";
    let twitterQuote = preStr.concat(quotes[randomIndex][0].replace(/ /g, "%20")).concat(quotes[randomIndex][1].replace(/ /g, "%20"));
    console.log(twitterQuote);
    document.getElementById("tweet-quote").href = twitterQuote;
    document.getElementById("tweet-quote").target = "_blank"
this.setState({
  quoteIndex: randomIndex,
  colorIndex: randomColor
})
  }

  render() {
    
    return (
      <div className="container" id="quote-box" style={{backgroundColor: colors[this.state.colorIndex]}}>
      <div className="quotebk" style={{color: colors[this.state.colorIndex]}}>
        <div className="quoteContainer" id="text" style={{transition: "1500ms"}}><q className="quotes">{quotes[this.state.quoteIndex][0]}</q></div>
        <p className="author" id="author"><em>{quotes[this.state.quoteIndex][1]}</em></p>
        <div className="socialContainer">
        <a href='#1' id="tweet-quote" ><i className="fa fa-twitter" style={{color: colors[this.state.colorIndex]}}/></a>
        <a href='#2'><i className="fa fa-facebook" style={{color: colors[this.state.colorIndex]}}></i></a>
        <a href='#3'><i className="fa fa-instagram" style={{color: colors[this.state.colorIndex]}}></i></a>
        <a href='#4'><i className="fa fa-linkedin" style={{color: colors[this.state.colorIndex]}}></i></a>
        </div>
        <button className="button" id="new-quote" onClick={this.handleClick} type="submit" style={{backgroundColor: colors[this.state.colorIndex]}}>New Quote!</button>
      </div>
      <div className="reference"><p>By Egute Robson</p></div>
      </div>
      
    )
  }
}
function App() {

  return (
    <div className="App" >
      <Quotes />
    </div>
  );
}

export default App;
