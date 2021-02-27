

class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
 this.Visiblity=255;
 this.damageLevel = 0;
    this.dead = false;
  }
display()
{
  console.log(this.body.speed)
  if(this.body.speed > 3 && this.damageLevel === 0){
    this.image = loadImage("sprites/enemyDamaged.png");
    this.damageLevel = 1;
  }else if(this.body.speed > 4 && this.damageLevel === 1){
    this.image = loadImage("sprites/enemyCritical.png");
    this.damageLevel = 2;super.display();}
  //super.display();
  else if(this.body.speed < 5 && this.dead === false){
    super.display();
  }else{
    this.dead = true;
World.remove(world,this.body)  

push();
this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity)

//do nothing
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();
}}
};



    //   this.dead = true;
    // this.dead = false;
