class Stack{
    constructor(){
        this.list=[]
    }
    push(element){
        this.list.push(element)
    }
    pop(){
        if(!this.isEmpty()){
            return this.list.pop()
        }
    }
    isEmpty(){
        return this.list.length===0
    }
    peekElement(){
        return this.list[this.item.length-1]
    }
}
