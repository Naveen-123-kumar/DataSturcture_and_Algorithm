var Person={
    // name: 'Naveen',
    // age: 24,
    getDetails: function(){
        console.log(Person.name);
    },
    phonenumber:{
        mobile: 75,
        Landline: 0145,
    }

}
console.log(Person.name)
console.log(Person.getDetails())
console.log(Person.phonenumber.mobile)
var me=Object.create(Person);
me.name='Naveen';
me.getDetails();
