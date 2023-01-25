function fun1(){
    var sal = parseInt(frm1.t2.value);

    if(frm1.perf.value=="A"){
        var bonus= parseInt(sal*0.30);
        var total = parseInt(sal+bonus);
        frm1.t6.value=bonus;
        frm1.t7.value=total;
       
    } 
    else if(frm1.perf.value=="B"){
        var bonus = sal*0.20;
        var total = sal+bonus;
        frm1.t6.value=bonus;
        frm1.t7.value=total;
    } 
    else if(frm1.perf.value=="C"){
        var bonus = 0;
        var total = sal;
        frm1.t6.value=bonus;
        frm1.t7.value=total;
    } 

}