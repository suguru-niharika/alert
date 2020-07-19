var name=prompt("enter votername") ;
var age=prompt("how old are you?");
if (age>18) {
  var start=prompt("would you like to start web application y/n?!");
}else {
  alert("age is not matched with given criteria");
}
var votername=[];
 function addvotername()
  {
  var name=prompt("enter votername") ;
  votername.push(name);
 }
function display()
{
  console.log(votername);
}
function remove()
{
  var rmvtr=prompt("remove votername if age<18!");
  var index=votername.indexOf(rmvtr);
  votername.splice(index,1);
}
if (start=='y')
 {
while(req!=="quit")
{
  var req=prompt("please select an Action:add,remove,display or quit");
   if(req=="add")
   {
  addvotername();
  }else if(req=="display")
{
  display();
}else if(req=="remove"){
  remove();
}
}
}
alert("thanks for using web apll,please refresh to startover");
