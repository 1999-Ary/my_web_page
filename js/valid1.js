function fun1(){
    //alert("welcome to javascript");
    var name=frm1.t1.value;
    if(name==""){
        alert("name required");
    }
        else{
            alert("go ahead");

        }
    }
function fun2(){
    var math=parseInt(frm2.t3.value);
    var english=parseInt(frm2.t4.value);
    var computer=parseInt(frm2.t5.value);
    var total_value= math+english+computer;
    frm2.t6,value=total_value;
}

function fun3(){
    var math=parseInt(frm2.t3.value);
    var english=parseInt(frm2.t4.value);
    var computer=parseInt(frm2.t5.value);
    var per=((math+english+computer)/300)*100;
    frm2.t7.value=per;
}

function fun4() {
    var math=parseInt(frm2.t3.value);
    var english=parseInt(frm2.t4.value);
    var computer=parseInt(frm2.t5.value);
    var
    
}