function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    return two()+one();
}
three();
/* console ke bagl me sources he wha jao, 
then apni js file open karo 
then usme break points add karo
then arrow se next function pe ek ek karke shift karo
you can also see the call stack below which is filling and getting empty*/