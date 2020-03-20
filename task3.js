color= ["red","green","blue","orange","yellow","purple","brown"];

document.write(color);


//task A
choice=prompt("Enter color of your choice and it'll be added to start of array");
color.unshift(choice);
document.write("<br>");
    document.write(color);


//task B
choice=prompt("Enter color you want to add to the end of array");
color.push(choice);
document.write("<br>");
    document.write(color);


//task C
color.splice(0,0,"pink","grey");
document.write("<br>");
    document.write(color);


//task D
color.shift();
document.write("<br>");
    document.write(color);


//task E
color.pop();
document.write("<br>");
    document.write(color);


//task F
num=parseInt(prompt("At which index you want to add a color?"));
name=prompt("Add color name too at specified index: ");
color[num]=name;
document.write("<br>");
    document.write(color);


//task G
start_position= parseInt(prompt("Add the index you want to delete color from "));
end_position= parseInt(prompt("Add the number of colors you want to delete from the index you specified"));
color.splice(start_position,end_position); 
document.write("<br>");
    document.write(color);
