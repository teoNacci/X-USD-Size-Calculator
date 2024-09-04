const risk = document.getElementById('riskinput');
const pricevar = document.getElementById('pricevarinput');
const size = document.getElementById('lotsizeinput');
const display = document.getElementById('display');
const display2 = document.getElementById('display2');
const accountsize = document.getElementById('accountsize')
const riskpercentage = document.getElementById('riskpercentage')
const npips = document.getElementById('npips')
const pipdim = document.getElementById('pipdim')
const entryprice = document.getElementById('entryprice')
const exitprice = document.getElementById('exitprice')
const entryPrice = document.getElementById('entryPrice')
const lotvalue = document.getElementById('lotvalue')
let storage = 0; 
let storage2 = 0; 
let fixedvalue = 0;
let fix = 5;
let fix2 = 3;
let fix3 = 8;
let fix4 = 0;
let active1 = 0;
let active2 = 0;
let active3 = 0;
let active4 = 0;
let active5 = 0;
let submitError = 0;
let submit2Error = 0;
let submit3Error = 0;
let i = 0;
let j = 0;
let k = 0;
let x = 0;
let y = 0;
let z = 0;
let x1 = 0;
let y1 = 0;
let z1 = 0;
let nIter = parseFloat(25);
let fCount = parseFloat(0);

document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput = () => {
        if (input.value.length > input.maxLength){
            input.value = input.value.slice(0, input.maxLength);
        }
    }
})

document.addEventListener("click", a => {
    const isriskinput = a.target.matches("[data-dummy1]");
    if (!isriskinput && a.target.closest('[data-input1]')!= null) return;
    let currentinput;
    if (isriskinput) {
            if(active1 == 1){
                document.querySelector('.active')?.classList.remove('active');
                active1 = 0;
            return;
        }

        if(active1 == 0){
            currentinput = a.target.closest('[data-input1]');
            document.querySelector('.active')?.classList.remove('active');
            currentinput.classList.toggle('active');  
            active1 = 1;
            active2 = 0;
            active3 = 0;
            active5 = 0; 
            active4 = 0;
            return;
        }
    }    
})

document.addEventListener("click", b => {
    const ispricevarinput = b.target.matches("[data-dummy2]");
    if (!ispricevarinput && b.target.closest('[data-input2]')!= null) return;
    let currentinput;
        if (ispricevarinput) {
            if(active2 == 1){
                document.querySelector('.active')?.classList.remove('active');
                active2 = 0;
            return;
        }

        if(active2 == 0){
            currentinput = b.target.closest('[data-input2]');
            document.querySelector('.active')?.classList.remove('active');
            currentinput.classList.toggle('active');  
            active2 = 1;
            active1 = 0;
            active3 = 0;
            active5 = 0; 
            active4 = 0;
            return;
        }
    }    
})

document.addEventListener("click", c => {
    const islotsizeinput = c.target.matches("[data-dummy3]");
    if (!islotsizeinput && c.target.closest('[data-input3]')!= null) return;
    let currentinput;
        if (islotsizeinput) {
            if(active3 == 1){
                document.querySelector('.active')?.classList.remove('active');
                active3 = 0;
            return;
        }

        if(active3 == 0){
            currentinput = c.target.closest('[data-input3]');
            document.querySelector('.active')?.classList.remove('active');
            currentinput.classList.toggle('active');  
            active3 = 1;
            active1 = 0;
            active2 = 0;
            active5 = 0; 
            active4 = 0;
            return;
        }
    }
})

document.addEventListener("click", d => {
    const isinfo = d.target.matches("[data-dummy4]");
    if (!isinfo && d.target.closest('[data-info]')!= null) return;
    if (isinfo) {
        if(active4 == 1){
            currentinput = d.target.closest('[data-info]');
            document.querySelector("div.calculator-input3 div[class='container active']").classList.toggle('active');
            active4 = 0;
            return;
        } 
        
        if(active4 == 0){
            currentinput = d.target.closest('[data-info]');
            document.querySelector("div.calculator-input3 div[class='container']").classList.toggle('active');
            active4 = 1; 
            return;
        }
    }
})

document.addEventListener("click", e => {
    const isinfo2 = e.target.matches("[data-dummy5]");
    if (!isinfo2 && e.target.closest('[data-info2]')!= null) return;
    if (isinfo2) {
        if(active5 == 1){
            currentinput = e.target.closest('[data-info2]');
            document.querySelector("div.calculator-body div[class='tittle active']").classList.toggle('active');
            active5 = 0;
            active4 = 0;
            return;
        } 
        
        if(active5 == 0){
            currentinput = e.target.closest('[data-info2]');
            document.querySelector('.active')?.classList.remove('active');
            document.querySelector("div.calculator-body div[class='tittle']").classList.toggle('active');
            active5 = 1; 
            return;
        }
    }
})

function Calculate(){ 
    if (risk.value == 0 || pricevar.value == 0 || size.value == 0){
        display.value = "ERROR: missing input /s."; 
        display2.value = "";
    } else if (risk.value < 0 || pricevar.value < 0 || size.value < 0){
        display.value = "ERROR: invalid input /s.";
        display2.value = "";

        } else {
            x = parseFloat(((risk.value / pricevar.value) / size.value));
            x1 = parseFloat((risk.value / pricevar.value));
            y = x / nIter;
            y1 = x1 / nIter;
            z = 0;
            z1 = 0;
            display.value = 0;
            display2.value = 0;
            Add();

            function Add(){
                fCount += 1;
                z += y;
                z1 += y1;
                display.value = z.toFixed(fix3);
                display2.value = z1.toFixed(fix2);
                if (fCount == nIter){
                    i = ((risk.value / pricevar.value) / size.value);
                    j = (risk.value / pricevar.value);
                    display.value = i.toFixed(fix3);
                    display2.value = j.toFixed(fix2);
                    storage = display.value;
                    storage2 = display2.value;   
                    fCount = parseFloat(0);
                    return;
                } else {
                    requestAnimationFrame(Add);
                }
            }
        }        
}

function Submit(){
    if (accountsize.value == 0 || riskpercentage.value == 0){
        display.value = "ERROR: missing input /s.";
        display2.value = "";
        submitError = 1;

    } else {
        if (submitError == 1) {
            display.value = "";
        }

        x = parseFloat(Math.floor((accountsize.value * (riskpercentage.value / 100))));
        y = x / nIter;
        z = 0;
        risk.value = 0;
        Add2();

        function Add2(){
            fCount += 1;
            z += y;
            risk.value = z.toFixed(fix2);
            if (fCount == nIter){
                i = (accountsize.value * (riskpercentage.value / 100));
                risk.value = i.toFixed(fix2)
                document.querySelector('.active').classList.remove('active');
                active1 = 0;
                submitError = 0;
                fCount = parseFloat(0);
                return;
            } else {
                requestAnimationFrame(Add2);
            }
        }
    }
}

function Submit2(){
    if (npips.value > 0 && pipdim.value > 0 && entryprice.value > 0 && exitprice.value > 0){
        display2.value = "!Both methods has been used.";
        display.value = "Use either Pips OR Price!";
        submit2Error = 1;
        return;
    }

    if (npips.value > 0 && pipdim.value > 0 && (entryprice.value > 0 || exitprice.value > 0)){
        display.value = "ERROR: redondant input!";
        submit2Error = 1;
        return;
    } 
    
    if (entryprice.value > 0 && exitprice.value > 0 && (npips.value > 0 || pipdim.value > 0)){
        display.value = "ERROR: redondant input!";
        submit2Error = 1;
        return;
    }

    if (entryprice.value == 0 && exitprice.value == 0){
        if (npips.value == 0 || pipdim.value == 0){
            display.value = "ERROR: missing input /s.";
            display2.value = "";
            submit2Error = 1;
            return;
            } else if (entryprice.value == 0 && exitprice.value == 0){
                if (submit2Error == 1) {
                    display.value = "";
                    display2.value = "";
                }
                
                let divider = 1 / pipdim.value;
                x = parseFloat(npips.value / divider);
                y = x / nIter;
                z = 0;
                pricevar.value = 0;
                Add3();

                function Add3(){
                    fCount += 1;
                    z += y;
                    pricevar.value = z.toFixed(fix);
                    if (fCount == nIter){
                        i = npips.value / divider;
                        pricevar.value = i.toFixed(fix)
                        document.querySelector('.active').classList.remove('active');
                        active2 = 0;
                        submit2Error = 0;
                        fCount = parseFloat(0);
                        return;
                    } else {
                        requestAnimationFrame(Add3);
                    }
                }
            
        }
    }

    if (npips.value == 0 && pipdim.value == 0) {
        if (entryprice.value == 0 || exitprice.value == 0){
            display.value = "ERROR: missing input /s.";
            display2.value = "";
            submit2Error = 1;
            return;
        } else if ((entryprice.value - exitprice.value) < 0){
            if (submit2Error == 1) {
                display.value = "";
                display2.value = "";
            }
            
            x = parseFloat(exitprice.value - entryprice.value);
            y = x / nIter;
            z = 0;
            pricevar.value = 0;
            Add4();

            function Add4(){
                fCount += 1;
                z += y;
                pricevar.value = z.toFixed(fix);
                if (fCount == nIter){
                    i = exitprice.value - entryprice.value;
                    pricevar.value = i.toFixed(fix)
                    entryPrice.value = entryprice.value;
                    document.querySelector('.active').classList.remove('active');
                    active2 = 0;
                    submit2Error = 0;
                    fCount = parseFloat(0);
                    return;
                } else {
                    requestAnimationFrame(Add4);
                }
            }

        } else if ((entryprice.value - exitprice.value) > 0){
            if (submit2Error == 1) {
                display.value = "";
                display2.value = "";
            }

            x = parseFloat(entryprice.value - exitprice.value);
            y = x / nIter;
            z = 0;
            pricevar.value = 0;
            Add5();

            function Add5(){
                fCount += 1;
                z += y;
                pricevar.value = z.toFixed(fix);
                if (fCount == nIter){
                    i = entryprice.value - exitprice.value;                  
                    pricevar.value = i.toFixed(fix)
                    entryPrice.value = entryprice.value;
                    document.querySelector('.active').classList.remove('active');
                    active2 = 0;
                    submit2Error = 0;
                    fCount = parseFloat(0);
                    return;
                } else {
                    requestAnimationFrame(Add5);
                }
            }
        } else if ((entryprice.value - exitprice.value) == 0) {
            display2.value = "ERROR: invalid input /s.";
            display.value = "Entry Price == StopLoss Price";
            submit2Error = 1;
            return;
        }    
    }
} 

function Submit3(){
    if (entryPrice.value == 0 || lotvalue.value == 0 || pricevar.value == 0 || risk.value == 0){
        display.value = "ERROR: missing input /s.";
        display2.value = "";
        submit3Error = 1;
    } else {
        if (submit3Error == 1) {
            display.value = "";
        }

        x = parseFloat(((risk.value / pricevar.value) / (((risk.value / pricevar.value) * entryPrice.value) / lotvalue.value)));
        y = x / nIter;
        z = 0;
        size.value = 0;
        Add6();

        function Add6(){
            fCount += 1;
            z += y;
            size.value = z.toFixed(fix2);
            if (fCount == nIter){
                i = ((risk.value / pricevar.value) / (((risk.value / pricevar.value) * entryPrice.value) / lotvalue.value));
                size.value = i.toFixed(fix2);
                document.querySelector('.active').classList.remove('active');
                active3 = 0;
                submit3Error = 0;
                fCount = parseFloat(0);
                return;
            } else {
                requestAnimationFrame(Add6);
            }
        }
    }
}

function Reset(){
    display.value = "";
    display2.value = "";
    risk.value = "";
    pricevar.value = "";
    size.value = "";
}

function Reset2 () {
    accountsize.value = "";
    riskpercentage.value = "";
}

function Reset3() {
    npips.value = "";
    pipdim.value = "";
    entryprice.value = "";
    exitprice.value = "";
}

function Reset4() {
    entryPrice.value = "";
    lotvalue.value = "";
}

function Allclear () {
    display.value = "";
    display2.value = "";
    risk.value = "";
    pricevar.value = "";
    size.value = "";
    accountsize.value = "";
    riskpercentage.value = "";
    npips.value = "";
    pipdim.value = "";
    entryprice.value = "";
    exitprice.value = "";
    entryPrice.value = "";
    lotvalue.value = "";
}

function Restore(){
    if (storage == 0){
        display.value = "no values to restore.";
        display2.value = "";

    } else {
        display.value = storage;
        display2.value = storage2;
    }
}
