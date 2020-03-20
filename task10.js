A=[20,53,78,4,91,12];
document.write("Given array: "+A);
document.write("<br>");
for(i=1;i<A.length;i++){
    for(j=0;j<i;j++){
        if(A[j]>A[i]){
            temp=A[i];
            A[i]=A[j];
            A[j]=temp;
        }
    }
}
document.write("Sorted array: "+A);