A=[24,53,78,91,12];
document.write("Given array: "+A);
document.write("<br>");
for(i=0;i<A.length;i++){
    if(A[i]>A[i+1]){
        max=A[i];
    }
}
document.write("Greatest number is : "+max);