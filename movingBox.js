function killerBox(){
  this.y = random(25,h-25)
  this.x = w + 100
  this.height = 25
  this.width =  25
  this.speed = 10
  this.show = function(){
    fill(255,0,0);
    rect(this.x, this.y, this.width, this.height)
  }
  this.update = function(){
    this.x -= this.speed
    if (this.speed < 20){
      this.speed *= 2
    }
  }
}