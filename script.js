const calculateAge=()=>{
    let date=document.getElementById("dateField").value;
    let month=document.getElementById("monthField").value;
    let year=document.getElementById("yearField").value;

    if(date>31){
        alert("invalid date");
        return;
    }
    else if(date=="" && year==""){
        alert("Date And Year must be filled out");
        return;
    }
    if(date==""){
        alert("Date must be filled out");
        return;
    }
    else if(month==""){
        alert("Month must be filled out");
        return;
    }
    else if(year==""){
        alert("Year must be filled out");
        return;
    }
   

    
    
    // prase
    let dob=new Date(`${date} ${month} ${year}`);
    let now= new Date();

    let difference= now-dob;

    console.log(difference);

    let days=Math.round(difference / (1000*60*60*24*365));

    console.log(days);
    alert(`Your Age is ${days} Year`);

    
    // console.log(dob);


}