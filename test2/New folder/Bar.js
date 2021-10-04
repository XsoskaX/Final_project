class Bar{

    constructor(x,height){
        this.x = x;
        this.y = 300;
        this.width= 50-10;
        this.height = -height*5.5;
        this.value =  parseInt((height)).toString();
        this.rgb ='rgb(0,255,0)';
        
        
        
        
    }
    draws(){ 
        fill(this.rgb);
       // console.log(`${this.x}, ${this.y} ,${this.width}, ${this.height}`);
        rect(this.x, this.y ,this.width, this.height);
    } 
   update(){
       this.x +=1;
   }
    
    texts(){
        fill(255);
        textSize(16);
        text(this.value,this.x+12 , this.y+30);
        
    }
    
    swap(otherBar){
        let height = this.exchange(this.height,otherBar.height);
        let value = this.exchange(this.value , otherBar.value);
        this.height = height[0];
        otherBar.height = height[1];
        this.value = value[0];
        otherBar.value = value[1];

    }
    exchange(val1, val2){
        let temp  = val1 ;
        val1 = val2;
        val2 = temp;
        return [val1,val2];   
    }
    setColor(rgbColor){
        this.rgb = rgbColor;
    }
    
   


   


}