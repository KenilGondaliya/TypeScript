// let score: number | string = 33
// score = 44
// score = "55"
// type User = {
//     name: string;
//     id: number
// }
// type Admin = {
//     username: string;
//     id: number
// }
// let kenil: User | Admin = {
//     name: "Kenil",
//     id: 1
// }
// function getDbId(id: number | string){
//     console.log(`DB id is ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
// const data3: string[] | number[] = ["1","2","3"]
var data3 = ["1", "2", 3, true]; // you write like this also
// let pi:3.14 = 3.14
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
// kenil = { username: "kg", id: 1}
