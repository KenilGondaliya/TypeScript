First of all write the fuction then understand how to defin the function and why

----->function addTwo(num) {
return num + 2;
}

    addTwo(5);
    export {};

this was the fuction and problem is addTwo() type is any so if num value is string still code the excute but not produced exprected output.

Let's solve the problem

----->function addTwo(num: number) {
return num + 2;
}

    addTwo(5);
    export {};

To Add multiple values example

----->function signUpUser(name: string, email: string, password: string, isPaid: boolean) {}

signUpUser('hello', 'hi@gmail.com', 'password', true);

I can specifies type to the function also like this:-

----->function addTwo(num: number): number{
return num + 2;
}

In this Senarios:

----> const heros = [1, 2, 3];

    heros.map((hero): string => {
     return `hero is ${hero}`;
    });

I store some value in array and its name is heros i run loop using map method but in method i string and number both print so in this senario heros store number but parameter also store string so in this function retrun string value it bessicaliy like convert type smartly

Now look if i make one fuction those aren't return value only print error so this type of function to not return value to write like this:

----->function handleError(essmsg: string): void{
        throw new Error(essmsg)
    }
