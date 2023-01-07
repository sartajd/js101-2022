function maxOfThree(x, y, z) {
    // first compare x and y
    if(x > y){ 
        // compare the greatest of x,y with z
        if(x > z) return x;
        else return z;

    }else {
        if(y > z)return y;
        else return z;
    }
}