const debugDeafGma = function(){
    let cont = true
    let goodbyes = 0
    let userInput = window.prompt('Say hello to MeeMaw!')
    
    while(cont){
        if(userInput === ""){
            userInput = window.prompt("WHAT!?")
        }
        else if(userInput.toUpperCase() !== userInput ) {
            userInput = window.prompt("SPEAK UP, KID!")
        }
        else if(userInput === "GOODBYE!") {
            goodbyes += 1
            if(goodbyes == 1){
                userInput = window.prompt("LEAVING SO SOON?")
            }
            else if(goodbyes === 2){
                window.alert("LATER, SKATER!")
                cont = false
            }
        }
        else if (userInput.toUpperCase() === userInput) {
            userInput = window.prompt('NO, NOT SINCE 1946!')
        }
    }
}

debugDeafGma()