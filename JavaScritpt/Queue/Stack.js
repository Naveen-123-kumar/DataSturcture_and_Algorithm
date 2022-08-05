class Stack{
    constructor(){
        this.item=[];
    }
    push(num){
        this.item.push(num);
    }
    pop(){
        if(this.isEmpty()){
            return -1;
        }
        return this.item.pop();
    }
    isEmpty(){
        return this.item.length==0;
    }
    print(){
        let str="";
        for(let i=0;i<this.item.length;i++){
            str=str+ this.item[i]+" "
        }
        return str;

    }
}
var stack=new Stack();
stack.push(10)
stack.push(20)
stack.push(11)
stack.push(22)
console.log(stack.pop())
console.log(stack.print())