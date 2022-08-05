class Vehicle{
    constructor(name,address){
        this.name=name,
        this.address=address
    }
    Mobile(mobile_number){
        this.mobile_number=mobile_number
    }
    printdetails(){
        console.log(this.name + " "+this.address)
        console.log(this.mobile_number)

    }
}
var v1=new Vehicle('Naveen','Mahua')
v1.Mobile(7595932156)
v1.printdetails()