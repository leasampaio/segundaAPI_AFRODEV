const lista ={
    batata:13,
    sabao: 3,
    abobrinha:5,
    toalha:1,
    cenoura: 8,
    balas:10,
    xuxu:0
}

const sleep = async (as) => {
    return setTimeout(()=>{}, as)
}
const pegar = (item)=>{
    sleep(5000)
    return(item)
}
const loop = async (objeto)=>{
    console.log("Começou");
    for(let i= 0; i<7; i++){
        console.log(objeto)
    }
}
loop(lista);
