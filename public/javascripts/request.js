function m1()
{
    document.getElementById('id01').style.display='block';
    document.getElementById('id02').style.display='none';
    document.getElementById('id03').style.display='none';

}
function m2()
{
    document.getElementById('id03').style.display='none';
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='block';
    

}
function m3()
{document.getElementById('id03').style.display='block';
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='none';
    


}

function addFields(number){
    // Number of inputs to create
   
    // Container <div> where dynamic content will be placed
console.log(number);
    var container = document.getElementById("containers");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){

        // Append a node with a random text
        container.appendChild(document.createTextNode("Visitor "+(i+1)+ " Firstname"));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "firstname"+i;
input.className = "form-control border-input";
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));

container.appendChild(document.createTextNode("Visitor "+(i+1)+ " Lastname "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = "lastname"+i;

input.className = "form-control border-input";
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));

container.appendChild(document.createTextNode("Visitor "+(i+1)+ " Contact No. "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "number";
        input.name = "contact"+i ;

input.className = "form-control border-input";
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));

container.appendChild(document.createTextNode("Visitor "+(i+1)+ " Email Id "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "email";
        input.name = "email"+i;
input.className="form-control border-input";
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
//     firstname[i]=document.getElementsByName('firstname').value;
//     lastname[i]=document.getElementsByName('lastname').value;
///     contact[i]=document.getElementsByName('contact').value;
//   email[i]=document.getElementsByName('email').value;

    }
}
