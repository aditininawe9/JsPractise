const tempratures = [ 3 , -2, -6, -1, 'error' , 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temp){
    let max = temp[0];
    let min  = temp[0];

    for(let i = 0; i < temp.length; i++){
        const curTemp = temp[i];
        if(typeof curTemp !== 'number')continue;
        if(curTemp > max) max = curTemp;
    }
    console.log(max,min);
    return max -min;
};
const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);