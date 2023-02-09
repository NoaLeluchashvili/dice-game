let count=0

function magic(){
    document.getElementById("result").innerHTML=""
    let img1 = document.getElementById("dice1")
    let img2 =document.getElementById("dice2")

    const rndInt1 = Math.floor(Math.random() * 6) + 1
    console.log("dice1:"+rndInt1)
    const rndInt2 = Math.floor(Math.random() * 6) + 1
    console.log("dice2:"+rndInt2)
    
    if(rndInt1==rndInt2){

        if(rndInt1==6)
        {
   
            img1.src='6.jpg';
            img2.src='6.jpg';
            document.getElementById("result").innerHTML="סחתיקה! יצא לך שש שש"
        }
       else{

        switch(rndInt1) {
            case 1:
                img1.src='1.jpg';
                img2.src='1.jpg';
               
              break;
            case 2:
                img1.src='2.jpg';
                img2.src='2.jpg';
                
              break;
            case 3:
                img1.src='3.jpg';
                img2.src='3.jpg';
                
            break;
            case 4:
                img1.src='4.jpg';
                img2.src='4.jpg';
                
            break;
            case 5:
                img1.src='5.jpg';
                img2.src='5.jpg';
                
            break;
          }
          document.getElementById("result").innerHTML="יצא לך דאבל יפה מאוד"
       }
     count++  
     document.getElementById("counter").innerHTML=count+' :כמות הפעמים שיצא לך דאבל' 
     console.log("*דאבל*")  
    }
    else{
        switch(rndInt1) {
            case 1:
                switch(rndInt2){
                    case 2:
                        img1.src='1.jpg';
                        img2.src='2.jpg';
                        break
                    case 3:
                        img1.src='1.jpg';
                        img2.src='3.jpg';
                        break
                    case 4:
                        img1.src='1.jpg';
                        img2.src='4.jpg';
                        break
                    case 5:
                        img1.src='1.jpg';
                        img2.src='5.jpg';
                        break
                    case 6:
                        img1.src='1.jpg';
                        img2.src='6.jpg';
                        break
                }
              break;
            case 2:
                switch(rndInt2){
                    case 1:
                        img1.src='2.jpg';
                        img2.src='1.jpg';
                        break
                    case 3:
                        img1.src='2.jpg';
                        img2.src='3.jpg';
                        break
                    case 4:
                        img1.src='2.jpg';
                        img2.src='4.jpg';
                        break
                    case 5:
                        img1.src='2.jpg';
                        img2.src='5.jpg';
                        break
                    case 6:
                        img1.src='2.jpg';
                        img2.src='6.jpg';
                        break
                }
              break;
            case 3:
                switch(rndInt2){
                    case 1:
                        img1.src='3.jpg';
                        img2.src='1.jpg';
                        break
                    case 2:
                        img1.src='3.jpg';
                        img2.src='2.jpg';
                        break
                    case 4:
                        img1.src='3.jpg';
                        img2.src='4.jpg';
                        break
                    case 5:
                        img1.src='3.jpg';
                        img2.src='5.jpg';
                        break
                    case 6:
                        img1.src='3.jpg';
                        img2.src='6.jpg';
                        break
                }
            break;
            case 4:  
                switch(rndInt2){
                    case 1:
                        img1.src='4.jpg';
                        img2.src='1.jpg';
                        break
                    case 2:
                        img1.src='4.jpg';
                        img2.src='2.jpg';
                        break
                    case 3:
                        img1.src='4.jpg';
                        img2.src='3.jpg';
                        break
                    case 5:
                        img1.src='4.jpg';
                        img2.src='5.jpg';
                        break
                    case 6:
                        img1.src='4.jpg';
                        img2.src='6.jpg';
                        break
                } 
            break;
            case 5:
                switch(rndInt2){
                    case 1:
                        img1.src='5.jpg';
                        img2.src='1.jpg';
                        break
                    case 2:
                        img1.src='5.jpg';
                        img2.src='2.jpg';
                        break
                    case 3:
                        img1.src='5.jpg';
                        img2.src='3.jpg';
                        break
                    case 4:
                        img1.src='5.jpg';
                        img2.src='4.jpg';
                        break
                    case 6:
                        img1.src='5.jpg';
                        img2.src='6.jpg';
                        document.getElementById("result").innerHTML="איזה אש! יצא לך שש בש"
                        break
                }
            break;
          
          case 6:  
                switch(rndInt2){
                    case 1:
                        img1.src='6.jpg';
                        img2.src='1.jpg';
                        break
                    case 2:
                        img1.src='6.jpg';
                        img2.src='2.jpg';
                        break
                    case 3:
                        img1.src='6.jpg';
                        img2.src='3.jpg';
                        break
                    case 4:
                        img1.src='6.jpg';
                        img2.src='4.jpg';
                        break
                    case 5:
                        img1.src='6.jpg';
                        img2.src='5.jpg';
                        document.getElementById("result").innerHTML="איזה אש! יצא לך שש בש"
                        break
                }
            break;
        }
    }
}
