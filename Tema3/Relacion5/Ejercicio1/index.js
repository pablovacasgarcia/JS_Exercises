/*Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.

Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
Last, write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.*/

class cat{
    constructor(name,tiredness, hunger, lonliness, hapiness){
        this.name=name;
        this.tiredness=tiredness;
        this.hunger=hunger;
        this.lonliness=lonliness;
        this.hapiness=hapiness;
    }

    sleep(){
        this.tiredness-=5;
        this.lonliness+=5
    }

    feed(){
        this.hunger-=5
    }

    play(){
        this.tiredness+=3
        this.hapiness+=3
    }

    pet(){
        this.hapiness+=3
        this.lonliness-=3
    }

    printStatus(){
        document.write(this.name+" is ")
        if(this.tiredness>7){
            document.write("going to fall asleep. ");
        }
        if(this.hunger>7){
            document.write("Going to eat you. ");
        }
        if(this.lonliness>7){
            document.write("Singing sad songs. ");
        }
        if(this.hapiness>7){
            document.write("Jumping for joy. ");
        }
    }
}



Tommy = new cat("Tommy", 5, 5, 5, 5);

Tommy.pet();
Tommy.feed();
Tommy.play();
Tommy.play();

Tommy.printStatus();