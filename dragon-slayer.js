
var slaying=true;
var youHit=Math.floor(Math.random() *2);
var damageThisRound= Math.floor(Math.random()*5 +1);
var totalDamage=0;
while(slaying)
{
    if(youHit)
    {
        console.log("Congrats you have hit the dragon");
        totalDamage+=damageThisRound;
        if(totalDamage>=4)
        {
            console.log("You've slewed the dragon");
        }
        else
        {
            youHit=Math.random();
        }   
    }
    else
    {
        console.log("Sorry Dragon defeated you!");
    }
    slaying=false;
}
