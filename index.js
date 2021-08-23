document.getElementById("form").onsubmit = () =>
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mname = document.getElementById("mname").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let ph = document.getElementById("ph").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    document.write("<p>Your personal details will be Displayed below</p>");
    document.write("First Name : "+fname+"<br>");
    document.write("Last Name : "+lname+"<br>");
    document.write("Middle Name : "+mname+"<br>");
    document.write("Date of Birth : "+dob+"<br>");
    document.write("Address : "+address+"<br>");
    document.write("Email : "+email+"&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("phone number : "+ph+"<br>");
    document.write("Height : "+height+" cm"+"&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("Weight : "+weight+" kg"+"<br>");
    document.write("<p>!!!!!!!!!!!!!!Thannk you!!!!!!!!!!!!!!!!</p>");

}