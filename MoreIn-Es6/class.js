class MasterClass {
    name;
    specialist;
    time;
    constructor(name, time, specialist){
        this.name = name;
        this.time = time;
        this.specialist = specialist;
    }
}

class Doctor extends MasterClass{

    category = 'Doctor';

    constructor(name, time, specialist ) {
        super(name, time, specialist);

    }

    getAppoinment() {
        console.log(`Dr. ${this.name} is a specialist of ${this.specialist} & he will available at ${this.time}`);
    }
}


class Stuffs extends MasterClass {
    category;
    constructor(name, time, specialist,  category) {
        super(name, time, specialist);
        this.category = category;
    }

    stuffsWork() {
        console.log(`${this.name} works as ${this.category}, his duity time till ${this.time}.`)
    }
}


// outputs::
const hakim = new Doctor('Hakim', '4:30PM', 'Cardiology');
hakim.getAppoinment();
const mamun = new Stuffs('Mamun','Morining to late night','', 'suiper',);
const arif = new Stuffs('Arif', '8AM to 6PM', 'Payments', 'Receptionist'  );
arif.stuffsWork();
mamun.stuffsWork();