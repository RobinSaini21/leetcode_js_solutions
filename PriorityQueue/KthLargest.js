class KthLargest {
  constructor(k, nums = []) {
    this.k = k;
    this.queue = [];
  }

  add(val) {
    if (this.queue.length < this.k) {
        this.queue.push(val)
    }

    if(this.top() < val){
        this.queue.pop();
        this.queue.push(val)
    } 
  }

  top(){
    return 30
  }
}
