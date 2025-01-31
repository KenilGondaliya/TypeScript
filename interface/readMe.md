1. Declaration Merging
   Interface: Can be merged. If you declare the same interface multiple times, TypeScript will merge the declarations into one.
   Type

interface User {
readonly dbId: number;
email: string;
userId: number;
googleId?: string;
startTrail(): string;
getCoupon(coupenname: string, num: number): number ;
}

interface User {
githubToken: string
}

2. Extending
   Interface: You can extend interfaces using the extends keyword, which allows you to create a new interface based on one or more existing ones.
   Type: You can also extend a type using intersections (&), but it works slightly differently.

interface User {
readonly dbId: number;
email: string;
userId: number;
googleId?: string;
startTrail(): string;
getCoupon(coupenname: string, num: number): number ;
}

interface Admin extends User {
role: "admin" | "ta" | "learner"
}

const kenil: User = {
dbId: 22,
email: "k@k.com",
userId: 2255,
githubToken: "gitHub",
startTrail: () => {
return "hello"
},
getCoupon: (name: "kenil", off: 10) => {
return 22
}
};

interface User {
githubToken: string
}

kenil.email = "kenil@gmail.com";
// kenil.dbId = 25
