 //Create an array of strings,loop over the array & check if the string "search" is inside the array.If it is console log the index of "search" in the array.If not console log -1 

["hello","hi","bar","search",10,5,"search"].forEach(function(value,index){
            if(value === "search"){
                //console.log(value);
                console.log(index);
            }else{
                console.log(-1);
            }
         });
