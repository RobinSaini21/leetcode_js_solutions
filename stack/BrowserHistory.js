class BrowserHistory {
  history = [];
  pointer = 0;
  constructor(homepage) {
    this.history.push(homepage);
   // this.pointer = this.history.length - 1;
  }

  visit(url) {
    if(!this.pointer){
        this.history.push(url)
    } else {
        this.history = this.history.slice(0, this.pointer + 1);
        this.history.push(url)
        this.pointer = 0
    }
   
    return null;
  }
  back(step) {
    this.pointer = this.history.length - 1 - step;
    return this.history[this.pointer];
  }

  forward(step) {
    let moves = this.pointer + step;
    this.pointer =
      moves > this.history.length ? this.history.length - 1 : moves;
    if (moves > this.history.length) return this.history[this.pointer];
  }
}


const browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");
console.log(browserHistory.back(2))
console.log(browserHistory.pointer)
browserHistory.visit("abc.com")
console.log(browserHistory.history)
