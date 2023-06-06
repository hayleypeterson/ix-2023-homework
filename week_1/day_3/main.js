
//hayley's fibonacci function
function fibonacci() {
    let last = 0;
    let cur = 1;
    for (let i =0; i<10; i++) {
        console.log(cur);
        temp = cur;
        cur = cur+last;
        last = temp;
    }
}

//megan's function (added by Megan!)
function meganFib(){
    let val = 0;
    let nextVal = 1;
    let temp;

    for(let i = 0; i < 10; i++){
        console.log(nextVal);
        temp = nextVal;
        nextVal += val;
        val = temp;
    }
}

