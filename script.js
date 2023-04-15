/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developer_emp = arr.map((obj) => {
    if (obj.profession === "developer") {
      return obj;
    }
  })

  console.log("developer_employee is: ", developer_emp);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  console.log("developer employee are: ");
  arr.forEach((obj) => {
    if (obj.profession === "developer") {
      console.log(obj);

    }
  })

}

function addData() {
  //Write your code here, just console.log
  arr.push({
    id: 4,
    name: "rahul",
    age: "22",
    profession: "intern"
  });

  console.log("array after adding new emp",arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  // console.log("array before removing admin",arr);
arr.forEach((obj , i)=>{
  if(obj.profession==="admin")
  {
arr.splice(i , 1);
  }
})

console.log("array after removing admin",arr);

}

function concatenateArray() {
  //Write your code here, just console.log
  
let arr2 = [
  { id: 5, name: "Jacob", age: "24", profession: "Front-end developer" },
  { id: 6, name: "Abraham", age: "25", profession: "Back-end developer" },
  { id: 7, name: "David", age: "26", profession: "Full stack developer" },
];

let arr3=arr.concat(arr2);
console.log(arr3);
}
