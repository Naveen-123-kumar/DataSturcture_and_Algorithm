class Queue{
    constructor(){
        this.item=[];
    }
    enqueue(item){
        this.item.push(item)
    }
    dequeue(){
        if(this.isEmpty()){
            return -1;
        }
        return this.item.shift();
    }
    isEmpty()
{
    // return true if the queue is empty.
    return this.item.length == 0;
}
print(){
    {
        var str = "";
        for(var i = 0; i < this.item.length; i++)
            str += this.item[i] +" ";
        return str;
    }
}
}
var item=new Queue();
item.enqueue(15);
item.enqueue(10);
// console.log(item.dequeue())
console.log(item.print())