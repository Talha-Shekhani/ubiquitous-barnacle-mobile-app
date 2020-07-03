const arr = [12,12,3,4,5]

const sum =((a,b,c,d,e)=>{
    return a+b+c+d+e;
})

console.log(sum(...arr))