var Data = {  }

function CreateClass() {

  var NumberofCurrentClasses = Object.keys(Data).length;

  var ClassName = document.getElementsByClassName("Class-Name-Text")[0].value;

  var ClassData = String(NumberofCurrentClasses + 1)

  Data[ClassData] = {

    ClassName: ClassName,
    ClassData: {
      assignments: { totalScore: 0, totalPossible: 0 },
      assessments: { totalScore: 0, totalPossible: 0 },
    }
    
  }

  console.log(Data)
  
}


var cancelButton = document.querySelector(".Cancel-Button");

if (cancelButton) {
    cancelButton.addEventListener("click", function() {
        var iframe = parent.document.querySelector(".create-iframe");
        if (iframe) {
        iframe.style.transition = "right .5s ease";
        iframe.style.right = "-100%";
        setTimeout(() => {
            iframe.remove();
        }, 300);
        } else {
            console.error("Iframe not found");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {

var createButton = document.querySelector(".Create-Button");

if (createButton) {
    createButton.addEventListener("click", function() {
        var iframe = parent.document.querySelector(".create-iframe");
        if (iframe) {
        iframe.style.transition = "right .5s ease";
        iframe.style.right = "-100%";
        setTimeout(() => {
            iframe.remove();
        }, 300);
        } else {
            console.error("Iframe not found");
        }


        var NewClass = document.createElement("div");
        var ClassGrade = document.createElement("p");
        var ClassName = document.createElement("p");
        
        NewClass.className = "Class";
        ClassGrade.className = "ClassGrade";
        ClassName.className = "ClassName";

        
        ClassGrade.textContent = "-";
        ClassName.textContent = document.querySelector(".ClassName").value;

        console.log(ClassName.textContent);
        
        NewClass.appendChild(ClassGrade);
        NewClass.appendChild(ClassName);




        

    function CreateNewClass() {

        var CreateClass = document.createElement("div");
        var ClassGrade = document.createElement("p");
        var ClassName = document.createElement("p");
        
        CreateClass.className = "Create-Class";
        ClassGrade.className = "ClassGrade";
        ClassName.className = "ClassName";

        
        ClassGrade.textContent = "+";
        ClassName.textContent = "Create Class"

        
        CreateClass.appendChild(ClassGrade);
        CreateClass.appendChild(ClassName);

        var OriginalCreateClass = parent.document.getElementsByClassName('Create-Class')[0];
        if (OriginalCreateClass) {



            parent.document.body.appendChild(OriginalCreateClass);

            parentClasses.appendChild(OriginalCreateClass)

           



        



        } else {
            console.error("Original Create-Class not Found");
        }

        

    }


        var parentClasses = parent.document.getElementsByClassName('Classes')[0];
        if (parentClasses) {

            parentClasses.appendChild(NewClass);

            var ClassData = {


            }

        

            if (localStorage.getItem("ClassData")) {

                
            var ClassData = JSON.parse(localStorage.getItem("ClassData"));

                var AmountofClasses = Object.keys(ClassData).length;

                var NewClassData =  ClassData[AmountofClasses + 1] = {}

                NewClassData.name = document.querySelector(".ClassName").value;
      
                 var ClassData_Serialized = JSON.stringify(ClassData);
      
                 console.log(ClassData_Serialized);
      
                 localStorage.setItem("ClassData", ClassData_Serialized);
      
                 var ClassData_Deserialized = JSON.parse(localStorage.getItem("ClassData"))
      
                 console.log(ClassData_Deserialized)
      
                  CreateNewClass()

           

            } else {

                var NewClassData =  ClassData[1] = {}

                NewClassData.name = document.querySelector(".ClassName").value;
      
                 var ClassData_Serialized = JSON.stringify(ClassData);
      
                 console.log(ClassData_Serialized);
      
                 localStorage.setItem("ClassData", ClassData_Serialized);
      
                 var ClassData_Deserialized = JSON.parse(localStorage.getItem("ClassData"))
      
                 console.log(ClassData_Deserialized)
      
                  CreateNewClass()

            }

        } else {
            console.error("Element with class 'Classes' not found in parent document.");
        }
        
        
        


        
        

    });
}


});

