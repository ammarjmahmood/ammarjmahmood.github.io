let allNamesElm = document.getElementById("annoucementmessage")
        
fetch("https://api.apispreadsheets.com/data/OitWufH3T4ChiwFy/").then(res=>{
    if (res.status === 200){
        res.json().then(data=>{
            const yourData = data["data"]
            for(let i = 0; i < yourData.length; i++){
                let rowInfo = yourData[i]
                var rowInfoDiv = document.createElement("div")
                rowInfoDiv.classList.add("message-info")
                
                let rowClubname = document.createElement("h4")
                let rowClubnameNode = document.createTextNode(rowInfo["clubname"])
                rowClubname.appendChild(rowClubnameNode)
                rowClubname.classList.add("clubname")
                
                let rowMessage = document.createElement("p")
                let rowMessageNode = document.createTextNode(rowInfo["message"])
                rowMessage.appendChild(rowMessageNode)
                rowMessage.classList.add("message")

                
                rowInfoDiv.appendChild(rowClubname)
                rowInfoDiv.appendChild(rowMessage)
                
                allNamesElm.appendChild(rowInfoDiv)
            }

        }).catch(err => {
            setErrorDisplay()
        })
    }
    else{
        setErrorDisplay()
        }
    }).catch(err =>{
        setErrorDisplay()
    })

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// overlay read more button
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }