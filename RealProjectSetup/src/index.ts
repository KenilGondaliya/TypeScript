class User {
  email: string;
  name: string;
  readonly city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const kenil = new User("k@k.com", "hitesh");
// kenil.city 


