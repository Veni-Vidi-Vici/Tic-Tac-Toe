var x="X";
var o="O";
var count=1;
var put1=0;
var put2=0;
var put3=0;
var put4=0;
var put5=0;
var put6=0;
var put7=0;
var put8=0;
var put9=0;
var xwin=0;
var owin=0;
var x_win=0;
var o_win=0;
var draw=0;
var pdraw=0;
var flag=1;
var player1;
var player2;

setTimeout(function (){
	document.getElementById("first").classList.add("first1");
	setTimeout(function(){
		document.getElementById("first").classList.remove("first1");
		document.getElementById("second").classList.add("second1");
		setTimeout(function(){
			document.getElementById("second").classList.remove("second1");
			document.getElementById("body1").classList.add("bodyshow");
			
			onload();
		},5000)
	},5000)
},500);
function onload()
{   confirm("You Gonna Play Tic-Tac-Toe!");
    //confirm("Are you Sure?");
	alert("It is a two player Game.");
	//alert("Lets Play My Boys!");
	player1=prompt("Enter player1 name:");
	player2=prompt("Enter player2 name:");
	if(player1==""){player1="Player-1";
	}
	document.getElementById("p1").innerHTML=player1;
	
	 if(player2==""){player2="Player-2";
	}
	document.getElementById("p2").innerHTML=player2;
}
function myfunc1()
{if(xwin==0&&owin==0&&draw==0){
	
	if(put1==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{//button 1
	document.getElementById("one").classList.remove("td");
	document.getElementById("one").classList.add("x");
	document.getElementById("one").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("one").classList.remove("td");
	document.getElementById("one").classList.add("o");
	document.getElementById("one").innerHTML=o;
	count++}
	put1++;}
	
	else
	if(put1>0)
alert("already selected!");

if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert(player1+" won !");xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert(player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}

else if(xwin>0||owin>0||draw>0)alert("Press Reset!");
}

	
	function myfunc2()
{if(xwin==0&&owin==0&&draw==0){
	if(put2==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{//button 2
	document.getElementById("two").classList.remove("td");
	document.getElementById("two").classList.add("x");
	document.getElementById("two").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("two").classList.remove("td");
	document.getElementById("two").classList.add("o");
	document.getElementById("two").innerHTML=o;
	count++}
	put2++;}
	
	else
	if(put2>0)
	alert("already selected!");
if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert("player "+player1+" won !");xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert("player "+player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}
else if(xwin>0||owin>0||draw>0)alert("Press Reset!");
}
	
	function myfunc3()
{if(xwin==0&&owin==0&&draw==0){
	if(put3==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{//button 3
	document.getElementById("three").classList.remove("td");
	document.getElementById("three").classList.add("x");
	document.getElementById("three").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("three").classList.remove("td");
	document.getElementById("three").classList.add("o");
	document.getElementById("three").innerHTML=o;
	count++;}
	put3++;
}
else
if(put3>0)
alert("already selected!");

if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert("player "+player1+" won !");xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert("player "+player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}
else if(xwin>0||owin>0||draw>0)alert("Press Reset!");
}

//button 4
	function myfunc4()
{if(xwin==0&&owin==0&&draw==0){
	if(put4==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{
	document.getElementById("four").classList.remove("td");
	document.getElementById("four").classList.add("x");
	document.getElementById("four").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("four").classList.remove("td");
	document.getElementById("four").classList.add("o");
	document.getElementById("four").innerHTML=o;
	count++;}
	put4++;
}
else
if(put4>0)
alert("already selected!");

if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert("player "+player1+" won !");xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert("player "+player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}
else if(xwin>0||owin>0||draw>0)alert("Press Reset!");
}

//button 5
	function myfunc5()
{if(xwin==0&&owin==0&&draw==0){
	if(put5==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{//button 3
	document.getElementById("five").classList.remove("td");
	document.getElementById("five").classList.add("x");
	document.getElementById("five").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("five").classList.remove("td");
	document.getElementById("five").classList.add("o");
	document.getElementById("five").innerHTML=o;
	count++;}
	put5++;
}
else
if(put5>0)
alert("already selected!");

if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert("player "+player1+" won !");xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert("player "+player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}
else if(xwin>0||owin>0||draw>0)alert("Press Reset!");

}

//button 6
	function myfunc6()
{if(xwin==0&&owin==0&&draw==0){
	if(put6==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{//button 3
	document.getElementById("six").classList.remove("td");
	document.getElementById("six").classList.add("x");
	document.getElementById("six").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("six").classList.remove("td");
	document.getElementById("six").classList.add("o");
	document.getElementById("six").innerHTML=o;
	count++;}
	put6++;
}
else
if(put6>0)
alert("already selected!");

if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert("player "+player1+" won !");xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert("player "+player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}
else if(xwin>0||owin>0||draw>0)alert("Press Reset!");
}

//button 7
	function myfunc7()
{if(xwin==0&&owin==0&&draw==0){
	if(put7==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{//button 3
	document.getElementById("seven").classList.remove("td");
	document.getElementById("seven").classList.add("x");
	document.getElementById("seven").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("seven").classList.remove("td");
	document.getElementById("seven").classList.add("o");
	document.getElementById("seven").innerHTML=o;
	count++;}
	put7++;
}
else
if(put7>0)
alert("already selected!");

if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert("player "+player1+" won !");xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert("player "+player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}
else if(xwin>0||owin>0||draw>0)alert("Press Reset!");
}

//button 8
	function myfunc8()
{if(xwin==0&&owin==0&&draw==0){
	if(put8==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{//button 3
	document.getElementById("eight").classList.remove("td");
	document.getElementById("eight").classList.add("x");
	document.getElementById("eight").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("eight").classList.remove("td");
	document.getElementById("eight").classList.add("o");
	document.getElementById("eight").innerHTML=o;
	count++;}
	put8++;
}
else
if(put8>0)
alert("already selected!");

if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert("player "+player1+" won !");xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert("player "+player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}
else if(xwin>0||owin>0||draw>0)alert("Press Reset!");
}

//button 9
	function myfunc9()
{if(xwin==0&&owin==0&&draw==0){
	if(put9==0)
	{if(count==1||count==3||count==5||count==7||count==9)
	{//button 3
	document.getElementById("nine").classList.remove("td");
	document.getElementById("nine").classList.add("x");
	document.getElementById("nine").innerHTML=x;
	count++;}
	else if(count==2||count==4||count==6||count==8)
	{
	document.getElementById("nine").classList.remove("td");
	document.getElementById("nine").classList.add("o");
	document.getElementById("nine").innerHTML=o;
	count++;}
	put9++;
}
else
if(put9>0)
alert("already selected!");

if(document.getElementById("one").classList.contains("x")&&document.getElementById("two").classList.contains("x")&&document.getElementById("three").classList.contains("x")||document.getElementById("four").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("six").classList.contains("x")||document.getElementById("seven").classList.contains("x")&&document.getElementById("eight").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("nine").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("one").classList.contains("x")&&document.getElementById("four").classList.contains("x")&&document.getElementById("seven").classList.contains("x")||document.getElementById("two").classList.contains("x")&&document.getElementById("five").classList.contains("x")&&document.getElementById("eight").classList.contains("x")||document.getElementById("three").classList.contains("x")&&document.getElementById("six").classList.contains("x")&&document.getElementById("nine").classList.contains("x"))
	{alert("player "+player1+" won !");
xwin++;x_win++;
document.getElementById("xwin").innerHTML=x_win;flag=0;}
else
if(document.getElementById("one").classList.contains("o")&&document.getElementById("two").classList.contains("o")&&document.getElementById("three").classList.contains("o")||document.getElementById("four").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("six").classList.contains("o")||document.getElementById("seven").classList.contains("o")&&document.getElementById("eight").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("nine").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("one").classList.contains("o")&&document.getElementById("four").classList.contains("o")&&document.getElementById("seven").classList.contains("o")||document.getElementById("two").classList.contains("o")&&document.getElementById("five").classList.contains("o")&&document.getElementById("eight").classList.contains("o")||document.getElementById("three").classList.contains("o")&&document.getElementById("six").classList.contains("o")&&document.getElementById("nine").classList.contains("o"))
{alert("player "+player2+" won !");owin++;o_win++;
document.getElementById("owin").innerHTML=o_win;flag=0;}
else if(flag==1&&count>9){alert("draw!");draw++;pdraw++;document.getElementById("draw").innerHTML=pdraw++;}}
else if(xwin>0||owin>0||draw>0)alert("Press Reset!");

}

function set()
{
	document.getElementById("one").classList.remove("o");
	document.getElementById("two").classList.remove("o");
	document.getElementById("three").classList.remove("o");
	document.getElementById("four").classList.remove("o");
	document.getElementById("five").classList.remove("o");
	document.getElementById("six").classList.remove("o");
	document.getElementById("seven").classList.remove("o");
	document.getElementById("eight").classList.remove("o");
	document.getElementById("nine").classList.remove("o");
	
	document.getElementById("one").classList.remove("x");
	document.getElementById("two").classList.remove("x");
	document.getElementById("three").classList.remove("x");
	document.getElementById("four").classList.remove("x");
	document.getElementById("five").classList.remove("x");
	document.getElementById("six").classList.remove("x");
	document.getElementById("seven").classList.remove("x");
	document.getElementById("eight").classList.remove("x");
	document.getElementById("nine").classList.remove("x");
	
	document.getElementById("one").classList.add("td");
	document.getElementById("two").classList.add("td");
	document.getElementById("three").classList.add("td");
	document.getElementById("four").classList.add("td");
	document.getElementById("five").classList.add("td");
	document.getElementById("six").classList.add("td");
	document.getElementById("seven").classList.add("td");
	document.getElementById("eight").classList.add("td");
	document.getElementById("nine").classList.add("td");
	
	document.getElementById("one").innerHTML="+";
	document.getElementById("two").innerHTML="+";
	document.getElementById("three").innerHTML="+";
	document.getElementById("four").innerHTML="+";
	document.getElementById("five").innerHTML="+";
	document.getElementById("six").innerHTML="+";
	document.getElementById("seven").innerHTML="+";
	document.getElementById("eight").innerHTML="+";
	document.getElementById("nine").innerHTML="+";

count=1;
draw=0;
put1=0;
put2=0;
put3=0;
put4=0;
put5=0;
put6=0;
put7=0;
put8=0;
put9=0;
xwin=0;
owin=0;
flag=1;	
}
function theme()
{
	document.getElementById("body1").classList.toggle("theme");
	document.getElementById("p1").classList.toggle("white");
	document.getElementById("p2").classList.toggle("white");
	document.getElementById("t1").classList.toggle("white");
	document.getElementById("t2").classList.toggle("white");
	document.getElementById("p3").classList.toggle("white");
	document.getElementById("draw").classList.toggle("white");
	document.getElementById("owin").classList.toggle("white");
	document.getElementById("xwin").classList.toggle("white");
	document.getElementById("1").classList.toggle("white");
	document.getElementById("2").classList.toggle("white");
	
	
}
