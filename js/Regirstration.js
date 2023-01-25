function Form_Submit(){
    var name=frm1.name.value;
    var email=frm1.email.value;
    var gender=frm1.gender.value;
    
    if(frm1.course_req.value=="Mean"){
        var x="Mean";
    }
    if(frm1.course_req.value=="Mern"){
        var x="Mern";
    }
    if(frm1.course_req.value=="Devops"){
        var x="Devops";
    }
    if(frm1.course_req.value=="Kotlen"){
        var x="Kotlen";
    }
    var otherreq=frm1.other_req.value;

    if(name==""){
        alert("Enter your name");
            frm1.name.focus()
            return false;
    }
    if(email==""){
        alert("Enter your email");
        return false;
    }
    if(name!="" && email!=""){
    alert("Your deatils are as follows \n"  + "Name:" +name + "\nEmail: " +email +"\n COURSE: "+x +"\n Other Courses: "+otherreq +"\n Gender: "+gender);

    }
    }
    
    



function myfunctionname(){
    var name=frm1.name.value;
    
    if(name==""){
        alert("Enter your name");
            frm1.name.focus()
            return false;
    }
}
    function myfunction(){
    var email=frm.email.value;
    if(email==""){
        alert("Enter your email");
            frm1.email.focus()
            return false;
    }
}
