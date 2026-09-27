const grades=[4,5,6,7,8,9];
const gradeGrid=document.getElementById("gradeGrid");
if(gradeGrid){gradeGrid.innerHTML=grades.map(g=>`<a class="grade-card" href="pages/grade.html?grade=${g}"><div class="grade-number">Grade ${g}</div><p>Explore Computer and Artificial Intelligence resources.</p><div class="subject-pills"><span class="pill">💻 Computer</span><span class="pill">🤖 AI</span></div><span class="grade-link">View Grade →</span></a>`).join("");}
const menuToggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
menuToggle?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const searchData=[
["Introduction to Computers","Grade 4","Computer"],["Parts of a Computer","Grade 4","Computer"],["What is Artificial Intelligence?","Grade 5","AI"],["Computer Hardware","Grade 6","Computer"],["Internet Safety","Grade 7","Computer"],["Machine Learning Basics","Grade 8","AI"],["Artificial Intelligence & Society","Grade 9","AI"]];
const input=document.getElementById("siteSearch"),results=document.getElementById("searchResults");
input?.addEventListener("input",()=>{const q=input.value.trim().toLowerCase();if(!q){results.innerHTML="";return;}const m=searchData.filter(x=>x.join(" ").toLowerCase().includes(q));results.innerHTML=m.length?m.map(x=>`<div class="result"><small>${x[1]} • ${x[2]}</small><strong>${x[0]}</strong><p>Open the chapter to access notes, questions, files and videos.</p></div>`).join(""):`<div class="result"><strong>No results found</strong><p>Try another chapter, grade or subject.</p></div>`;});
