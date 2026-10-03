const solved=[
["What is motion?","Motion is a change in the position of an object with time relative to a reference point."],
["What is the SI unit of speed?","The SI unit of speed is metre per second (m/s)."],
["A boy walks 100 m in 20 s. Find his speed.","Given distance = 100 m and time = 20 s. Speed = distance ÷ time = 100 ÷ 20 = 5 m/s. Answer: 5 m/s."],
["A car travels 150 km in 3 hours. Find its speed.","Speed = 150 ÷ 3 = 50 km/h. Answer: 50 km/h."],
["A bicycle moves at 6 m/s for 10 s. Find the distance.","Distance = speed × time = 6 × 10 = 60 m. Answer: 60 m."],
["A runner covers 200 m at 8 m/s. Find the time.","Time = distance ÷ speed = 200 ÷ 8 = 25 s. Answer: 25 s."],
["What is uniform motion?","Motion in which equal distances are covered in equal intervals of time is uniform motion."],
["Give two examples of periodic motion.","The motion of a pendulum and the revolution of Earth around the Sun are examples of periodic motion."],
["Convert 10 m/s into km/h.","10 × 3.6 = 36 km/h. Answer: 36 km/h."],
["Convert 72 km/h into m/s.","72 × 5/18 = 20 m/s. Answer: 20 m/s."],
["What does a horizontal distance–time graph mean?","Distance is not changing with time, so the object is at rest during that interval."],
["Why is speed a measure of how fast an object moves?","Speed tells us how much distance an object covers in one unit of time."]
];

const quiz=[
["The SI unit of time is:",["second","hour","kilometre","minute"],0],
["Speed is equal to:",["time ÷ distance","distance ÷ time","distance × time","distance + time"],1],
["Equal distances in equal time intervals describe:",["rest","periodic motion","uniform motion","circular motion"],2],
["36 km/h is equal to:",["5 m/s","10 m/s","15 m/s","20 m/s"],1],
["A horizontal distance–time graph means:",["uniform motion","object at rest","very high speed","circular motion"],1],
["Which is an example of circular motion?",["A car on a straight road","The hands of a clock","A person sitting","A book on a table"],1],
["The SI unit of distance is:",["kilometre","metre","hour","m/s"],1],
["One complete to-and-fro movement of a pendulum is called:",["speed","distance","oscillation","rotation"],2],
["If distance is 120 m and time is 20 s, speed is:",["4 m/s","5 m/s","6 m/s","8 m/s"],2],
["1 m/s is equal to:",["1.8 km/h","2.6 km/h","3.6 km/h","5 km/h"],2]
];

function showSection(id){
 document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 window.scrollTo({top:document.querySelector(".nav").offsetTop-5,behavior:"smooth"});
}
function calculateSpeed(){
 const d=Number(document.getElementById("distance").value);
 const t=Number(document.getElementById("time").value);
 const out=document.getElementById("calcResult");
 if(d>0&&t>0) out.textContent=`Speed = ${d} ÷ ${t} = ${(d/t).toFixed(2)} m/s`;
 else out.textContent="Please enter positive distance and time values.";
}
document.getElementById("questionList").innerHTML=solved.map((q,i)=>`
<div class="solved"><h3>Q${i+1}. ${q[0]}</h3><div class="solution"><b>Solution:</b><br>${q[1]}</div></div>`).join("");

document.getElementById("quizBox").innerHTML=quiz.map((q,i)=>`
<div class="quiz-q" id="qq${i}"><h3>${i+1}. ${q[0]}</h3>
${q[1].map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}">${o}</label>`).join("")}</div>`).join("");

function checkQuiz(){
 let score=0;
 quiz.forEach((q,i)=>{
  const box=document.getElementById("qq"+i);
  box.classList.remove("correct","wrong");
  const chosen=document.querySelector(`input[name="q${i}"]:checked`);
  if(chosen){
   if(Number(chosen.value)===q[2]){score++;box.classList.add("correct")}
   else box.classList.add("wrong");
  }else box.classList.add("wrong");
 });
 const msg=score===10?"Excellent! Full marks 🎉":score>=7?"Great work! Keep revising.":score>=5?"Good start! Review the theory and try again.":"Revise the chapter and try the quiz again.";
 document.getElementById("quizResult").textContent=`Score: ${score}/10 — ${msg}`;
}
