a=[10,20,4,40,60,70];
b=[1,2,3,4,5,6,7,8,9,10];
union_arr=b.concat(a);
unique_arr=[];
found=false;
for(i=0;i<union_arr.length;i++){
    for(j=0;j<unique_arr.length;j++){
        if(union_arr[i]===unique_arr[j]){
            found=true;
        }
    }
    if(found==false){
        unique_arr.push(union_arr[i]);
    }
    found=false;
}
document.write("Given two arrays<br><br>");
document.write(a);
document.write("<br>");
document.write(b);
document.write("<br><br> Unique array <br><br>");
document.write(unique_arr);