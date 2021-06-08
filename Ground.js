class Ground{

constructor(){
    
    var options = {
        isStatic:true,
        visible:false
    }
    
    rectMode(CENTER)
    this.body=Bodies.rectangle(700,700,1400,10,options)

}

 display(){

    rect(0,0,1400,10)

 }






}