let saveFile = () => {
    const name = document.getElementById("txtName");
    const age = document.getElementById("txtAge");
    const email = document.getElementById("txtEmail");
    const country = document.getElementById("Country");
   

   
    let data = "\r Name: " + name.value + " \r\n " + "Age: " + age.value + " \r\n " + "Email: " + email.value + " \r\n " + "Country: " + country.value;
    console.log(data); 

    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = new Date();
    
    var month =new Date(); 
    month = month.getMonth();

    var day = new Date();
    var day = day.getDate();



    let newLink = document.createElement("a");
    newLink.download = filename;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};
let cancelForm = () => {
    location.reload();
};