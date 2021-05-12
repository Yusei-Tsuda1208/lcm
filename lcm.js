document.getElementById("lcm").addEventListener("click",function (){
    let a = document.getElementById("x").value;
    let b = document.getElementById("y").value;
    let i1=1,i2=1;

    while(a*i1 !== b*i2){
        if(a*i1<b*i2){
            i1++
        }else{
            i2++
        }
        }
    document.getElementById("ans").value　+=　(a*i1);
});