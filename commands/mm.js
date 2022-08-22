
function generatecode(){
    let gn =  []
    if(gn.length < 1){
        for (let i = 0; i < 4; i++) {
            let random = Math.floor(Math.random()*5)
            gn.push(random)
        }
    }; console.log(gn)
    let fgn = gn.map(num =>{
        return String(num)
    }); return fgn
}

let secret=[]
export default function (msg, args){
    if(msg.content=="!mm"){
        msg.channel.send("welcome to the wacky world of mastermind \ntry to guess my randomized color combination \ntype '!mm help' for uhm.. help") 
    }
    
    
    if(args[0]=="start"){
        secret = generatecode()
        msg.channel.send("the code has been generated successfully\ni am now waiting for your guess ;)")
    }
    if(args[0]=="showcode"){
        msg.channel.send("secret: "+secret)
    }

    if(args[0]=="guess"){
       
    }

    if(args[0]=="help"){
        msg.channel.send("HELP USER INTERFACE\n'!mm start' starts the game and generates the secret code u have to guess\n'!mm guess xxxx' substitute the xs with ur guess\nlocks in your guess and gives you feedback\ntype '!mm retry' if you failed miserably")
    }
    if(args[0]=="retry"){
        
    }
    
}