
class bob{
    constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var bobPos=this.body.position;	
		//push()
		//translate(bobPos.x, bobPos.y);
		// rectMode(CENTER);
		//rotate(this.body.angle)
		fill(255,0,255);
		imageMode(CENTER);
		ellipseMode(CENTER);
        //rect(this.x, this.y, this,r);
		//image(this.image, 0,0,this.r*2, this.r*2)
		//pop()
 }
}
