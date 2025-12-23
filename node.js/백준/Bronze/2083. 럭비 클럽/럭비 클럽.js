const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for (let i = 0; i < input.length; i++){
   let one_line = input[i].split(' ');
   
   const name = one_line[0];
   let age = one_line[1];
   let weight = one_line[2];

   // console.log(age);
   // console.log(weight);
   if (name === '#' && age == 0 && weight == 0){
      break;
   }
   if(age > 17 || weight >= 80){
      console.log(name, 'Senior');
   }
   else{
      console.log(name, 'Junior')
   }
}