class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        if(!this.isEmpty()){
            this.items.shift();
        }
    }
    isEmpty(){
        return (this.items.length===0)
    }
    print()
    {
        let tem=""
        for(let i=0;i<this.items.length;i++){
            tem+=this.items[i]+" "
        }
        return console.log(tem);
    }
}
let q1=new Queue()
q1.enqueue(10)
q1.enqueue(20)

q1.enqueue(30)
q1.enqueue(40)
q1.dequeue()
q1.print()

