var arr=["SSC","HSC","BCS","BS","BCOM","MS","M.phil.","PhD"];
document.write("<h1>Qualifications:</h1><br>");
j=1;
for(i=0;i<arr.length;i++){
    document.write(j+") ");
    document.write(arr[i]+"<br>");
    ++j;
}