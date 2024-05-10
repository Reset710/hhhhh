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
  calculateFinalGrade();
}

function updateGrades() {
  const gradesElement = document.getElementById('grades');
  gradesElement.innerHTML = `Assignments: ${scores.assignments.totalScore}/${scores.assignments.totalPossible}, Assessments: ${scores.assessments.totalScore}/${scores.assessments.totalPossible}`;
}

function calculateFinalGrade() {
  const assignmentPercentage = (scores.assignments.totalScore / scores.assignments.totalPossible) * 100;
  const assessmentPercentage = (scores.assessments.totalScore / scores.assessments.totalPossible) * 100;
  const finalGrade = (assignmentPercentage * 0.4) + (assessmentPercentage * 0.6);
  document.getElementById('finalGrade').innerHTML = finalGrade.toFixed(2) + '%';
}


var elements = document.getElementsByClassName("Create");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {

        alert("Clicked!");

        var iframe = document.createElement("iframe");

        iframe.src = "create.html";

        iframe.width = "500"; 
        iframe.height = "300"; 
        iframe.frameBorder = "0"; 

        
        document.body.appendChild(iframe); 
        
        
    });
}





