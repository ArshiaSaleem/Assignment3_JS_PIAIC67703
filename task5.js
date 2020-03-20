arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
unique_arr=[];
found=false;
for(i=0;i<arr1.length;i++){
    for(j=0;j<unique_arr.length;j++){
        if(arr1[i]===unique_arr[j]){
            found=true;
        }
    }
    if(found==false){
        unique_arr.push(arr1[i]);
    }
    found=false;
}
document.write("Given Array : "+arr1);
document.write("<br>");
document.write("Unique Array : "+unique_arr);