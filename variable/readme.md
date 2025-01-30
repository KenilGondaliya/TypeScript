is to declare the variable to specify to which type of data you stored in variable like:-

-----> let greedings: string = "hello Kenil";
-----> let num: number = 5;

And after the declaration you  have to stop and access to run stecific funtion

It means if i declare to greeding in string then i only use after the dot(.) steciftc string related function and if i used other data type function then get the  error it help to me secure code for the devlopment.

-----> greeding.toLowerCase() is true But

-----> num.toLowerCase() is false


Now talk about other tye like  boolean and number

// Number and boolean

if i talk about the number and boolean a diclare like this

----->let userId: number = 33455.5;
----->let isLoggedIn: boolean = false;

But this is not good prectice beacuse typescrip is smart to idenctiy if use declare variable and imidetly assign the value so it indetify which type of value you are input it so please don't need to write every where ofcourse you write some specific situation but on everywhere 

----->let userId = 33455.5;

-----> userId.toFixed();

----->let isLoggedIn = false;


Now to talking about the unneccessary use of Any Data type like this

----->let hero;

    function getHero() {
      return "thor";
    }

    hero = getHero();

this was bad practice beacuse it specify the vwribale  and in funtion give the value string  and after declare the  function in hero but still the type of hero is anny so after any value store in this variable this is bad beacuse this function make for the string value so this was aright way.

----->let hero: string;

    function getHero() {
      return "thor";
    }

    hero = getHero();

Most importan part is the any is not have ant data type it simple disable type check if i do this what the meaing of usege of typescript