Type Aliases
We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

I talk about in 2 type of Topic:-

1. readonly :- this is use in typeScript to some variable or value to be the only readonl perpose no one can interfair in this values

2. ? :- this are use in typeScript to filed have optionl it mean you so tha't grate but you not so it's ok.

3. & :- this are use in typeScript to combine all diffrennt type in type so you can easly run used any where multiple type using one type


type User = {
  readonly _id: string; // this is used readonly 
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number // this is used ?
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
} // tihs is used &


myUser.email = "k@gmail.com";
// myUser._id = "12345" it complain to the read only property

