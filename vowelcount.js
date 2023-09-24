function countvowel(name){
    name = name.toLowerCase();
    let vowelcount=0;
    for(let i=0;i<name.length;i++){
        const currchar=name[i];
        if(currchar=='a' || currchar=='e' || currchar=='i' || currchar=='o' || currchar=='u'){
            vowelcount++;
        }
    }
    return vowelcount;
}

//example
const ans=countvowel("Ratnesh tiwari");
console.log(ans);
