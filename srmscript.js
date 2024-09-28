let availableClubs=[
    "Directorate of Student Affairs (DSA)",
    "GitHub Community SRM",
    "Cherry+ Networks",
    "Google Developer Student Clubs",
    "SRM ACM Student Chapter",
    "Newton School Coding Club",
    "Swift Coding Club",
    "Blockchain SRM Club",
    "SRM Quantum Computing Club",
    "Alexa Developers SRM",
    "Qwiklabs Developer Club",
    "SRMKZILLA",
    "SRM MUN Society",
    "SRM Fashion Club",
    "SRM Dance Club",
    "Gang DNA",
    "Jatt Squad",
    "Advaya",
    "Rotoract Club",
    "Astrophilia",
    "Rubik's Cube Club","SRM Optizen",
    "SRM Literary Society","HexaDynamics",
    "SRM Quiz club","E Cell SRMIST",
    "SRM Women Empowerment Club",
    "Self-Defense Club","Creative Arts Club",
    "Social Club","DSA Gaming Club","Movies and Dramatics Club","Music Club",
    "Founders Club","GeeksforGeeks SRMIST","Team Centinels","Rudra - SRM Mars Rover","SRM Team Robocon",
    "TedXSRMIST","Next Tech Lab","Microsoft Learn Student Ambassador","Team Envision","ASCE SRM STUDENT CHAPTER",
    "dBug Labs SRM","SIIC Fab Lab","Electronics Club","Data Science Community","SRM Hackathon","Think-Digital SRM Chapter",
    "Aakash Reasearch Labs","Networking Nexsus SRM","HackTheBox SRMIST","IEEE SRMIST"
  ];
  const resultsBox=document.querySelector(".search-result");
  const inputBox=document.getElementById("searchclub");
  inputBox.onkeyup=function()
  {
    let result=[];
    let input=inputBox.value;
    if(input.length)
    {
        result=availableClubs.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length)
    {
        resultsBox.innerHTML="";
    }
  }
  function display(result)
  {
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsBox.innerHTML="<ul>" + content.join("") + "<ul>";
  }
  function selectInput(list){
    inputBox.value=list.innerHTML;
  }
var club=document.getElementById('searchclub');
var s=document.getElementById('sclubname');
function Sclub(){
        if(club.value=="Cherry+ Networks"||club.value=="Cherry"||club.value=="cherry"){
            window.location.assign('./clubpage/cherry.html');
        }
        else if(club.value=="Google Developer Student Clubs"||club.value=="Google"||club.value=="google"){
            window.location.assign('./clubpage/googledev.html');
        }
        else if(club.value=="SRM ACM Student Chapter"||club.value=="acm"||club.value=="ACM"||club.value=="Acm"){
            window.location.assign('./clubpage/acm.html');
        }
        else if(club.value=="Newton School Coding Club"||club.value=="newton"||club.value=="Newton"||club.value=="NEWTON"){
            window.location.assign('./clubpage/newton.html');
        }
        else if(club.value=="Swift Coding Club"||club.value=="Swift"||club.value=="swift"){
            window.location.assign('./clubpage/swift.html');
        }
        else if(club.value=="Blockchain SRM Club"||club.value=="blockchain"||club.value=="Blockchain"){
            window.location.assign('./clubpage/blockchain.html');
        }
        else if(club.value=="SRM Quantum Computing Club"||club.value=="quantum"||club.value=="Quantum"){
            window.location.assign('./clubpage/quantum.html');
        }
        else if(club.value=="Alexa Developers SRM"||club.value=="Alexa"||club.value=="alexa"){
            window.location.assign('./clubpage/alexa.html');
        }
        else if(club.value=="Qwiklabs Developer Club"||club.value=="Qwiklabs"||club.value=="qwiklabs"){
            window.location.assign('./clubpage/qwicklabs.html');
        }
        else if(club.value=="SRMKZILLA"||club.value=="Kzilla"||club.value=="kzilla"||club.value=="Srmkzilla"||club.value=="srmkzilla"){
            window.location.assign('./clubpage/kzilla.html');
        }
        else if(club.value=="SRM MUN Society"||club.value=="mun"||club.value=="Mun"){
            window.location.assign('./clubpage/mun.html');
        }
        else if(club.value=="SRM Fashion Club"||club.value=="Fashion"||club.value=="fashion"){    
            window.location.assign('./clubpage/fashion.html');
        }
        else if(club.value=="SRM Dance Club"||club.value=="dance"||club.value=="Dance"||club.value=="Gang DNA"||club.value=="gang dna"||club.value=="Gang dna"||club.value=="Advaya"||club.value=="advaya"||club.value=="Jatt squad"||club.value=="jatt squad"){
            window.location.assign('./clubpage/dance.html');
        }
        else if(club.value=="Rotoract Club"||club.value=="Rotoract"||club.value=="rotoract"){
            window.location.assign('./clubpage/rotoract.html');
        }
        else if(club.value=="Astrophilia"||club.value=="astrophilia"){
            window.location.assign('./clubpage/astro.html');
        }
        else if(club.value=="DSA Gaming Club"||club.value=="dsa gaming"||club.value=="Gaming"||club.value=="gaming"){
            window.location.assign('./clubpage/gaming.html');
        }
        else if(club.value=="Rubik's Cube Club"||club.value=="Cube"||club.value=="cube"||club.value=="Rubiks"||club.value=="rubiks"||club.value=="rubik"||club.value=="Rubik"){
            window.location.assign('./clubpage/cube.html');
        }
        else if(club.value=="SRM literary society"||club.value=="literary"||club.value=="Literary"||club.value=="Literature"||club.value=="Literature Club"||club.value=="literature club"||club.value=="literature"){
            window.location.assign('./clubpage/literary.html');
        }
        else if(club.value=="SRM quiz club"||club.value=="quiz"||club.value=="Quiz"){
            window.location.assign('./clubpage/quiz.html');
        }
        else if(club.value=="SRM Women Empowerment Club"||club.value=="Women Empowerment"||club.value=="women empowerment"){
            window.location.assign('./clubpage/women.html');
        }
        else if(club.value=="Self-Defense Club"||club.value=="self defense"||club.value=="Self defense"){
            window.location.assign('./clubpage/defense.html');
        }
        else if(club.value=="Social Club"||club.value=="Social"||club.value=="social"){
            window.location.assign('./clubpage/social.html');
        }
        else if(club.value=="Movies and Dramatics Club"||club.value=="Movies"||club.value=="movies"||club.value=="dramatics"||club.value=="Dramatics"||club.value=="movie"||club.value=="drama"||club.value=="Drama"){
            window.location.assign('./clubpage/movie.html');
        }
        else if(club.value=="Music Club"||club.value=="music"||club.value=="Music"){
            window.location.assign('./clubpage/music.html');
        }
        else if(club.value=="Founders Club"||club.value=="Founders"||club.value=="founders"){
            window.location.assign('./clubpage/founders.html');
        }
        else if(club.value=="GeeksforGeeks SRMIST"||club.value=="gfg"||club.value=="geeksforgeeks"){
            window.location.assign('./clubpage/gfg.html');
        }
        else if(club.value=="Team Centinels"||club.value=="centinels"||club.value=="Centinels"){
            window.location.assign('./clubpage/centinels.html');
        }
        else if(club.value=="Rudra - SRM Mars Rover"||club.value=="rudra"||club.value=="Rudra"){
            window.location.assign('./clubpage/rudra.html');
        }
        else if(club.value=="SRM Team Robocon"||club.value=="robocon"||club.value=="Robocon"){
            window.location.assign('./clubpage/robocon.html');
        }
        else if(club.value=="TedXSRMIST"||club.value=="tedx"||club.value=="Tedx"||club.value=="ted"||club.value=="Ted"){
            window.location.assign('./clubpage/tedx.html');
        }
        else if(club.value=="Next Tech Lab"||club.value=="next tech"||club.value=="Next tech"){
            window.location.assign('./clubpage/nexttech.html');
        }
        else if(club.value=="Microsoft Learn Student Ambassador"||club.value=="mlsa"||club.value=="Mlsa"){
            window.location.assign('./clubpage/mlsa.html');
        }
        else if(club.value=="Team Envision"||club.value=="envision"||club.value=="Envision"){
            window.location.assign('./clubpage/envision.html');
        }
        else if(club.value=="ASCE SRM STUDENT CHAPTER"||club.value=="ASCE"||club.value=="asce"){
            window.location.assign('./clubpage/asce.html');
        }
        else if(club.value=="dBug Labs SRM"||club.value=="dbug"||club.value=="Dbug"){
            window.location.assign('./clubpage/dbug.html');
        }
        else if(club.value=="SIIC Fab Lab"||club.value=="SIIC"||club.value=="siic"){
            window.location.assign('./clubpage/siic.html');
        }
        else if(club.value=="Electronics Club"||club.value=="electronics"||club.value=="Electronics"){
            window.location.assign('./clubpage/electclub.html');
        }
        else if(club.value=="Data Science Community"||club.value=="data science"||club.value=="Data science"||club.value=="Data Science"){
            window.location.assign('./clubpage/dscom.html');
        }
        else if(club.value=="SRM Hackathon"||club.value=="srm hackathon"||club.value=="Srm hackathon"){
            window.location.assign('./clubpage/srmhack.html');
        }
        else if(club.value=="Think-Digital SRM Chapter"||club.value=="think"||club.value=="Think digital"){
            window.location.assign('./clubpage/think.html');
        }
        else if(club.value=="Aakash Reasearch Labs"||club.value=="aakash"||club.value=="Aakash"){
            window.location.assign('./clubpage/aakash.html');
        }
        else if(club.value=="GitHub Community SRM"||club.value=="github"||club.value=="Github"){
            window.location.assign('./clubpage/github.html');
        }
        else if(club.value=="Networking Nexsus SRM"||club.value=="networking"||club.value=="Networking"){
            window.location.assign('./clubpage/netnex.html');
        }
        else if(club.value=="Creative Arts Club"||club.value=="arts"||club.value=="creatives"||club.value=="Arts"){
            window.location.assign('./clubpage/arts.html');
        }
        else if(club.value=="HackTheBox SRMIST"||club.value=="hackthebox"||club.value=="Hackthebox"||club.value=="hack"){
            window.location.assign('./clubpage/hackthebox.html');
        }
        else if(club.value=="E Cell SRMIST"||club.value=="Ecell"||club.value=="ecell"){
            window.location.assign('./clubpage/ecell.html');
        }
        else if(club.value=="Directorate of Student Affairs (DSA)"||club.value=="dsa"||club.value=="DSA"||club.value=="Dsa"){
            window.location.assign('./clubpage/dsa.html');
        }
        else if(club.value=="IEEE SRMIST"||club.value=="Ieee"||club.value=="IEEE"||club.value=="ieee"){
            window.location.assign('./clubpage/ieee.html');
        }
        else if(club.value=="SRM Optizen"||club.value=="optizen"||club.value=="Optizen"||club.value=="OPTIZEN"){
            window.location.assign('./clubpage/optizen.html');
        }
        else{
            window.location.assign('./clubpage/wrongclub.html');
        }
}
s.addEventListener('click',Sclub);

document.addEventListener("click",e=>{
    const isDropdownButton=e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]')!=null)
        return
    let currentDropdown
    if(isDropdownButton){
        currentDropdown=e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown=>{
        if(dropdown===currentDropdown)return
        dropdown.classList.remove('active')
    })
    })