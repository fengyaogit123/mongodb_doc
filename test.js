const a = /^0{0,}[1-9]+$|^([0]\.([0-9][1-9]|[1-9][0-9]|[1-9]))$|^([0]{0,}[1-9][0-9]{0,}\.([0-9]{0,2}))$/
 
const test ={
    '0':false,
    '0.000':false,
    '0.00':false,
    '0.0':false,
    '0.1':true,
    '0.10':true,
    '.01':false,
    '0.11':true,
    '0.01':true,
    '1.00':true,
    '1.1':true,
    '1':true,
    '00001.00':true,
    '0000100.0':true,
    '000021':true,
    '00002100.0':true,
    '00002100.01':true,
    '0111000222110.01':true,
    'a10':false
}

Object.keys(test).map(item=>{
    if(a.test(item)!==test[item]){
        console.log(item+'-------error')
    }else{
        console.log(item+'-------ok')
    }
})