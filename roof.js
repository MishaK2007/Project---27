class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
       
    this.body = Bodies.rectangle(this.x,this.y,200,20,options);
    World.add(world,this.body);
    }

    display(){
     
     Engine.update();
     rectMode(CENTER);
     fill("grey");
     rect(this.x,this.y,200,20);   
    }
}