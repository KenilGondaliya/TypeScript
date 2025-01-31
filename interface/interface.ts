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
