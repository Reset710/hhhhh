self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/css/style.css',
        '/js/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open('v1').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

const scores = {
  assignments: { totalScore: 0, totalPossible: 0 },
  assessments: { totalScore: 0, totalPossible: 0 }
};

function addScore() {
  const score = parseFloat(document.getElementById('score').value);
  const total = parseFloat(document.getElementById('total').value);
  const type = document.getElementById('type').value;

  if (type === 'assignment') {
    scores.assignments.totalScore += score;
    scores.assignments.totalPossible += total;
  } else if (type === 'assessment') {
    scores.assessments.totalScore += score;
    scores.assessments.totalPossible += total;
  }

  updateGrades();
  calculateFinalGrade(scores); 
}

function updateGrades() {
  const gradesElement = document.getElementById('grades');
  gradesElement.innerHTML = `Assignments: ${scores.assignments.totalScore}/${scores.assignments.totalPossible}, Assessments: ${scores.assessments.totalScore}/${scores.assessments.totalPossible}`;
}

function calculateFinalGrade(scores) {
  const assignmentPercentage = (scores.assignments.totalScore / scores.assignments.totalPossible) * 100;

  if (scores.assessments.totalPossible > 0) {
      const assessmentPercentage = (scores.assessments.totalScore / scores.assessments.totalPossible) * 100;
      const finalGrade = (assignmentPercentage * 0.4) + (assessmentPercentage * 0.6);
      document.getElementById('finalGrade').innerHTML = finalGrade.toFixed(2) + '%';
  } else {
      document.getElementById('finalGrade').innerHTML = assignmentPercentage.toFixed(2) + '%';
  }
}








var elements = document.getElementsByClassName("Create-Class");
var canCreateIframe = true;

function createIframe() {
  if (!canCreateIframe) return;
  
  canCreateIframe = false;
 
  var iframewindow = document.createElement("iframe");
  

  iframewindow.className = "create-iframe";

  iframewindow.style.position = "fixed";
  iframewindow.style.top = "0";
  iframewindow.style.right = "-100%";
  iframewindow.style.width = "100%";
  iframewindow.style.height = "100%";
  iframewindow.style.zIndex = "9999"; 
  iframewindow.style.border = "none";
  iframewindow.style.display = "block";
  iframewindow.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  iframewindow.style.transition = "right .5s ease";
  
  iframewindow.src = "/create/create.html";
  
  document.body.appendChild(iframewindow);

  setTimeout(() => {
    iframewindow.style.right = "0";
    setTimeout(() => {
      canCreateIframe = true;
    }, 300); 
  }, 100);

  


}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", createIframe);
}




if (localStorage.getItem("ClassData") && document.getElementsByClassName("Classes") ) {

  console.log("Classes found!")

  console.log("Loading..")

  var ClassData = JSON.parse(localStorage.getItem("ClassData"));

  var AmountofClasses = Object.keys(ClassData).length;

  for (var i = 1; i <= AmountofClasses; i++) {

    console.log(i);

   var CurrentClassName =  ClassData[i].name;

   var NewClass = document.createElement("div");
   var ClassGrade = document.createElement("p");
   var ClassName = document.createElement("p");
   
   NewClass.className = "Class";
   ClassGrade.className = "ClassGrade";
   ClassName.className = "ClassName";

   
   ClassGrade.textContent = "-";
   ClassName.textContent = CurrentClassName;

   // console.log(ClassName.textContent);
   
   NewClass.appendChild(ClassGrade);
   NewClass.appendChild(ClassName);

  

   var Classes = parent.document.getElementsByClassName('Classes')[0];
        if (Classes) {

          Classes.appendChild(NewClass);


        }

  }

  console.log("Done!")

  // alert("Your classes have successfully loaded!")

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

    var OriginalCreateClass = document.getElementsByClassName('Create-Class')[0];
    if (OriginalCreateClass) {



       document.body.appendChild(OriginalCreateClass);

       Classes.appendChild(OriginalCreateClass)

       
    }

  }

  CreateNewClass()


} else {

     console.log("No classes found!")

  }



