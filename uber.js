class uber{
    constructor(distance,rate,waitingPeroid){
        this.distance=distance;
        this.rate=rate;
        this.waitingPeroid=waitingPeroid;
    }
getRideDetails(){
    return(`This distance of the ride is ${this.distance} with rate of${this.rate} 
    and waitingperoid ${this.waitingPeroid}`)

}
getPrice(){
    let TotalPrice=(this.distance*this.rate)+(this.waitingPeroid*5)
    return TotalRate;

}
}
let customer1=new uber(150,30,5)
console.log(customer1);