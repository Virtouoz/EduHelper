function addprodject() {
    list=document.getElementById("ol_table");
    div = document.createElement("div");
    button=document.createElement("button");
    h2 = document.createElement("input");
    h2.setAttribute("value","asdsadasdsa");
    button.appendChild(document.createTextNode("vod"));
    button.setAttribute("onclick", "console.log(1)");
    //button.setAttribute("class", "");
    div.appendChild(h2);
    div.appendChild(button);
    li=document.createElement("li");
    li.appendChild(div);
    list.appendChild(li);
}
const uri = "/planinfo";

$(document).ready(function () {
    getData();
});
//сделай ajax
function getData() {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: uri,
        success: function (projecs) {

        }
    });
}
