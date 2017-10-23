const x = "3";

let name = "Manoj";
name = "Hitesh";

let classes = ["12",1,"marketing"];

let car1 = {
    "name":"Porsche",
    "model": "2017",
    "type": "Macan",
    "color": "white",
    "transmission": "automatic"
};

let car2 = {
    "name":"Mercedes",
    "model": "2017",
    "type": "C-class",
    "color": "grey",
    "transmission": "automatic"
};

let cars = [car1,car2];

console.log(x);
console.log(name);

console.log(classes);

console.log(car1);
console.log("Name of the car:",car1.name);

console.log(cars);
console.log(cars[0].name);

function add2num(x,y) {
    let z = x+y;
    return z;
}

let z = add2num(3,5);
console.log(z);


let m = greater(2,3);
console.log(m);

function greater(x,y) {
    if (x>y) {
        return "Larger number:"+x;
    }
    else if (y>x) {
        return "Larger number:"+y;
    }
    else{
        return "Both are equal";
    }
}

let student1 = {
    name:"Manoj",
    age:"24",
    degree: "Computer Science"
};

let student2 = {
    name:"Justin",
    age:"25",
    degree: "Mechanical Engineer"
};

let student3 = {
    name:"Hitesh",
    age: "28",
    degree: "Electrical engineer"
}
let students = [student1,student2,student3];

for (let i = 0; i<students.length; i++){
    console.log("Name of the student:"+students[i].name);
}


const j = Math.PI;
console.log(j);

let longnumber = "2.412431241241412341";
longnumber = Math.round(longnumber*100)/100;

console.log(longnumber);

let p = Math.sqrt(16);
console.log("Square root is:"+p);

let arr = [2,3,5,1];

arr.push(6);
console.log(arr);

arr.unshift(4);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

let namearr = ['M','a','n','o','j'];

namearr.pop();
namearr.push('x');

console.log(namearr);

let fullname = "Manoj,Bharat,Sagar";

let namearr2 = fullname.split(',');
console.log(namearr2);


let numberarr = [1,6,2];

let doubles = numberarr.map(function(num){
    return num*2;
});

console.log(doubles);


let numberarr2 = [3,7,2,5,1];

function min(arr) {
    let small = arr[0];
    for (let i=1;i<arr.length;i++) {
        if (small>arr[i]) {
            small=arr[i];
        }
    }
    return small;
}

function max(arr) {
    let large = arr[0];
    for (let i=1;i<arr.length;i++) {
        if (large<arr[i]) {
            large=arr[i];
        }
    }
    return large;
}

console.log("Minimum:"+min(numberarr2));
console.log("Maximum:"+max(numberarr2));