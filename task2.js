var students=["Amna","Rabia","Saman"];
var scores=[450,400,470];
for(i=0;i<students.length;i++){
    percentage= scores[i]*100/500;
    document.write("Score of "+students[i]+" is "+scores[i]+".Percentage: "+percentage+"%<br>");
}