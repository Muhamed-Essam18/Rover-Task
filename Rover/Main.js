
class Position {

    constructor(x,y,Direction){
        
    this.x= x;
    this.y= y;
        
                        //0      //1    //2    //3
    this.Directions= ['North','East','South','West'];
    this.directionIndex= this.Directions.indexOf(Direction);
    this.moveVectors = [
        { x: 0, y: 1 },   
        { x: 1, y: 0 },
        { x: 0, y: -1 },  
        { x: -1, y: 0 }   
    ];
    
};        
        rotateRight(){
        this.directionIndex = (this.directionIndex+1)%4;
        }
        
        rotateLeft(){
        this.directionIndex = (this.directionIndex-1+4)%4;
        }
        
        
        
        

        getNextposition(Command){
            
            const move = this.moveVectors[this.directionIndex]

            if(Command==="R"){
            this.rotateRight();
            }

            else if(Command==="L"){
            this.rotateLeft();
            }
            else if(Command==="F"){
                this.x= this.x= this.x + move.x;
                this.y= this.y=this.y+ move.y;
            }
            else if(Command==="B"){
                this.x = this.x= this.x - move.x;
                this.y = this.y=this.y- move.y;
            }

            else{
                console.log("Invalid Command");    
            }

                return {x: this.x, y: this.y, Direction: this.Directions[this.directionIndex]};

        }

        reportPosition(){
            return {x: this.x, y: this.y, direction: this.Directions[this.directionIndex]};
        }; 


};
    const Rover = new Position(4,2,"East");

    let Commands = "";

    document.getElementById("submit").addEventListener("click", function() {
            
     Commands = document.getElementById("command").value;
        
        for (let command of Commands) {
        Rover.getNextposition(command);
    };
        
    document.getElementById("location").innerHTML = JSON.stringify(Rover.reportPosition());
    console.log(Rover.reportPosition());
    });
        
   document.getElementById("location").innerHTML = JSON.stringify(Rover.reportPosition());
    


    
    