function Beer(){
    let bottles = 100;
    while(bottles <= 0){
        let song1 = bottles+ "bottles of beer on the wall, take one down";
        bottles--;
        let song2 = bottles+ "Left";
        return song1+song2
    }
}