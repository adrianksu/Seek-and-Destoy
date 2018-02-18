function destroyer(arr) {
 var args = Array.prototype.slice.call(arguments);
for (i=1; i< args.length; i++){
   function matches(val){
     return val != args[i];
   }
 arr = arr.filter(matches);
 
  
}
///console.log(arguments[3]);
//console.log(arr[2])
//console.log(args)
return arr;
}
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
