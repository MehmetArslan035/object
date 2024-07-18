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