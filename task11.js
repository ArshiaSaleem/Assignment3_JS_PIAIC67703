A=["cake","apple pie","cookie","chips","patties"];
search=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
found=false;
for(i=0;i<A.length;i++){
    if(A[i]==search){
document.write(search+" is avaialable at index "+i+" in our bakery.");
found=true;
    }
}
if(found==false){
document.write("We are sorry "+search+" is not available in our bakery.");
}