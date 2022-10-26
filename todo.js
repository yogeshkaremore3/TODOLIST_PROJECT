function getandupdate() {
    tit = document.getElementById("titid").value;
    des = document.getElementById("desid").value;
    console.log(tit,des);
    if (localStorage.getItem("itemjson") == null) {
      listarry = [];
      listarry.push([tit, des]);
      localStorage.setItem("itemjson", JSON.stringify(listarry));
    } else {
      listarr = localStorage.getItem("itemjson");
      listarry = JSON.parse(listarr);
      listarry.push([tit, des]);
      localStorage.setItem("itemjson", JSON.stringify(listarry));
    }
    upedate();
  }
  function upedate() {
    if (localStorage.getItem("itemjson") == null) {
      listarry = [];
      localStorage.setItem("itemjson", JSON.stringify(listarry));
    } else {
      listarr = localStorage.getItem("itemjson");
      listarry = JSON.parse(listarr);
    }

    let str = "";
    let tableid = document.getElementById("tid");
    listarry.forEach((element, index) => {
      console.log("updating.....");
      str += `<tr>
<td>${index + 1}</td>
<td>${element[0]}</td>
<td>${element[1]}</td>
<td><button id="deleteid" onclick="deletedlist(${index});">Delete</button></td> 
`;
    });
    tableid.innerHTML = str;
  }
  //   addx=document.getElementById("adding");
    // addx.addEventListener("click",getandupdate);
  upedate();
  function deletedlist(indexp) {
    console.log("deleating.......");
    listarr = localStorage.getItem("itemjson");
    listarry = JSON.parse(listarr);
    listarry.splice(indexp, 1);
    localStorage.setItem("itemjson", JSON.stringify(listarry));
    upedate();
  }
  function clearlist() {
    if (confirm("you really want to clear...?")) {
      console.log("clearing list.....");
      localStorage.clear();
      upedate();
    }
  }
//clock
let a;
let time;
let date;
setInterval(()=>{

a=new Date();
time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
date=a.toDateString();
document.getElementById('timeid').innerHTML=time+'<br>'+date;
// console.log(time,date);
},1000);