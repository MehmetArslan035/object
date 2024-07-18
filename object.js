console.log("***********OBJECT*************");
const ogrisim = ["ahmet", "mehmet", "saffet"]
const ogrsoyisim = ["yılmaz", "can", "baki"]

console.log(`${ogrisim[1]} - ${ogrsoyisim[1]}`);


/* ---------------------------------- */
/*     Object Oluşturma Yöntemleri    */
/* ---------------------------------- */

// 3 farkli yöntem ile object oluşturulabilir

// 1. object() class'ından türetme

const car = new Object(); // boş bir obje üretir


car.brand ="BMW"
car.model = 1990
car.price = 10000
console.log(car);
console.log(car.model);

// 2. Constructor methodu ile Object oluşturma

// OPP(Object Oriented Programing)

function personellist(id,ad,maas){
    this.id = id 
}

console.log(this);


const personel1 = new personellist(1001, "Ali", 10000);
console.log(personel1);

const personel2 = new personellist(1002, "Osman", 15000);
console.log(personel2);

//? 3.Object Literal (en çok tercih edilen yöntem)
let house = {} //boş bir obje tanımlanır.
house.room = 4
console.log(house);