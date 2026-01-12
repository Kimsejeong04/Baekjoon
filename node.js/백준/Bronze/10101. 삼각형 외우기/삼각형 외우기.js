const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

angle_1 = Number(input[0]);
angle_2 = Number(input[1]);
angle_3 = Number(input[2]);

let sum = angle_1 + angle_2 + angle_3;
if(sum !== 180){
    console.log('Error');
}

else if (angle_1 === 60 && angle_2 === 60 && angle_3 === 60){
    console.log('Equilateral');
}

else if(angle_1 == angle_2 || angle_1 == angle_3 || angle_2 == angle_3){
    console.log('Isosceles');
}
else{
    console.log('Scalene');
}
