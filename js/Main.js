var siteName = document.getElementById("bookmarkName");
var siteUrl = document.getElementById("bookmarkUrl");
var anchor =    document.getElementById("s-vLink");

var sitesArray; 


if( localStorage.getItem(`sites`) == null ){
    sitesArray =[];
  }
  else {
    sitesArray = JSON.parse(localStorage.getItem(`sites`)) ;
    display();
  }


  function validUrl() {
    var url = document.getElementById("bookmarkUrl").value;
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (url != "") {
        if (!regexp.test(url)) {
            alert("Please enter valid url.");
            clear();
        } else {
            addSite()        }
    }


    
  }



function addSite(){

    var site = {
        name : siteName.value,
        url : siteUrl.value,
    }

    

    sitesArray.push(site);
    clear();
    display();
    localStorage.setItem(`sites` , JSON.stringify(sitesArray));


    console.log(sitesArray)

}

function clear(){

    siteName.value=null;
    siteUrl.value=null;

}

function display(){
    var cartona =``

    for( var i=0 ; i<sitesArray.length ; i++){

        cartona += 
        `<tr>
        <th id="s-Index" class="text-capitalize">${i}</th>
        <th id="s-Name" class="text-capitalize">${sitesArray[i].name}</th>
        <th id="s-Visit" class="text-capitalize"> 
            <a  id="s-vLink" href="${sitesArray[i].url}">
                <button class="btn btn-outline-primary fw-bold">Visit<i class="fa-solid fa-link"></i></button>
            </a> 
         </th>
        <th onclick="deleteSite(${i});" id="s-Delete" class="text-capitalize"><button class="btn btn-outline-danger fw-bold">Delete<i class="fa-solid fa-trash"></i></button></th>
      
        </tr>
        `
    }


document.getElementById("tableContent").innerHTML=cartona


}

function deleteSite(deletedIndex){
    sitesArray.splice(deletedIndex , 1) ;
    display();
    localStorage.setItem(`sites` , JSON.stringify(sitesArray));
    
  
  }
//  var urlvalid =siteUrl.value ;
 