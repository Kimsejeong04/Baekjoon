const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(/\s+/).map(Number);

for(i = 0; i < input.length - 2; i += 2){
   const A = input[i];
   const B = input[i + 1];

   if(B % A === 0){
      console.log('factor');
   }
   else if(A % B === 0){
      console.log('multiple');
   }
   else{
      console.log('neither')
   }
}