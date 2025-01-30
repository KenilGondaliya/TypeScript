Union type are used when you not sure the which type of data are cominn in this variable or function whatever


If i write this type of code so,that give me error because one mistake of this code i put union type in parameter but what is coming in parameter still not decide so id.toLowerCase is used for string and if number is coming so it create problem.

function getDbId(id: number | string){
    id.toLowerCase()
}

To Tackle the problem to write some addition check in code like this

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}


One mode use Case of Union

-If i define some specific value so other value give error 

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" give me error

