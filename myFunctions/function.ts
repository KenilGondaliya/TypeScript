function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("hello");

signUpUser("hello", "hi@gmail. com", "password", true);
loginUser("hello", "h@h.com");

// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: String): string => {
  return "";
};

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function handleError(essmsg: string): void {
  throw new Error(essmsg);
}

handleError("Something went wrong");

export {};
