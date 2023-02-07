const demo = a => {
    if(isNaN(a)) {
        console.log(true, 'not a number.');
    }else{
        console.log(false, 'is a number.');
    }
}

demo(5);