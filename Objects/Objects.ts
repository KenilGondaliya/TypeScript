// const User = {
//   name: "Kenil",
//   email: "kenilgondaliya960@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }){}

// let newUser = { name: "Kenil", isPaid: true, email: "k@k.com" }

// createUser(newUser);

// function createCourse(): { name: string; price: number }{
//   return { name: "ReactJs", price: 399 };
// }

// type User = {
//   name: string;
//   email:string;
//   isActive: boolean;
// }

// function createUser(user: User): User{
//   return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number
}

let myUser: User = {
  _id: "12345",
  name: "k",
  email: "k@k.com",
  isActive: true
}

type cardNumber = {
  cardNumber: number;
}

type cardDate = {
  cardDate: string;
}


type cardDetails = cardNumber & cardDate & {
  cvv: number
}
myUser.email = "k@gmail.com";
// myUser._id = "12345" it complain to the read only property

export {};
