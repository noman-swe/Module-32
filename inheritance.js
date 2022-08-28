
class TeamMember{
    name;
    
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember {
    designation = 'support web dev';
    startSession() {
        console.log(this.name, 'start a support session');
    }
}


// another class for student care
class StudentCare extends TeamMember{
    designation = 'care web dev';

   groupSupportTime;
   constructor(name, address, time){
    super(name, address)
    this.groupSupportTime = time;
   }
    giveARoutine(student){
        console.log(this.name, 'Build a routine for', student);
    }
}


////
// another class for Naptune for realise app
class NaptuneDev extends TeamMember{
    designation = 'naptune app dev';

    codeEditor;
    constructor(name, address, editor){
        super(name, address);

        this.codeEditor = editor;
    }
    realiseApp(version){
        console.log(this.name, 'Naptune app realise--', version);
    }
}



const akin = new StudentCare('Akin', 'Tangail', 11);
akin.giveARoutine('Sakib');
console.log(akin);

const amirKhan = new Support('Amir', 'Dhaka');
const salman = new Support('Salman', 'Tangail'); //this returs a object

console.log(amirKhan);
console.log(salman);

amirKhan.startSession();

const ash = new NaptuneDev('Ash', 'Pak', 'Android');
ash.realiseApp('v-1.4.3');
// console.log(ash);