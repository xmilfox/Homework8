//завдання 1

function upperCase (string) {
    if (string.match(/^[A-Z]/)){
        console.log ("It's upper case");
}else {
    console.log ("It's lover case");
}
}
upperCase("Some text");
upperCase("some text");

// завдання 2

function checkEmail (string){
    let regExp = /./;
  return console.log (regExp.test(string));
}

checkEmail("AS_+Dfs@gmail.com");


// завдання 3
const str = "cdbBdbsbz";

const regExp1 = str.match(/db+d/gi);   
const regExp2 = str.match(/bb/gi);
const regExp3 = str.match(/d/);
 const result = regExp1.concat(regExp2, regExp3);
 console.log (result);




// завдання 4

const string = "JavaScript";

const replaced = string.replace(/(\w{1,4})(\w+)/,"$2,$1");
console.log (replaced);


// завдання5

function cardValidation (number){
    const regExp = /\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4}/g;
    return console.log (regExp.test(number));
}
cardValidation("4929-5399-9990-9999");
cardValidation("1234 1234 1234 1234");


//завдання6

function checkEmail (email){
    const regExp = /^[A-Za-z0-9]+[A-Za-z0-9_-]+\@[a-z]+\.[a-z]{1,3}$/i;
     if (regExp.test(email)) {
        return console.log ("Correct Email");
     }else {
         return console.log ("Incorrect Email");
     }
    
}


checkEmail('my_mail@gmail.com');

checkEmail('#my_mail@gmail.com');

checkEmail('my_ma--il@gmail.com');


// завдання 7


function checkLogin (login){
    const regExp = /^[A-Za-z]{1}[A-Za-z0-9\.]{1,9}$/g;
    const validatoin = (regExp.test(login));
    let numbers = (login.match(/[0-9]*[.]?[0-9]/g));
     console.log( validatoin);
     console.log (numbers);
    
}

checkLogin("as2.3s2ah8");
checkLogin("sdfghjk2.2");
checkLogin("Login3-4.1");
