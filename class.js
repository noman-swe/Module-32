class Support {
    name;
    designation = 'support web dev';
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}

const amirKhan = new Support('Amir', 'Dhaka'); 
const salman = new Support('Salman', 'Tangail'); //this returs a object
console.log(amirKhan);
console.log(salman);

amirKhan.startSession();