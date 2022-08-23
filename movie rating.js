class movie {
     constructor(Title,Studio,Rating){
          this.Title=Title;
          this.Studio=Studio;
          this.Rating=Rating;
     }
     getDetails(){
          return(`The name of the movie is ${this.Title} and it present on ${this.Studio}
          and the movie Rating is ${this.Rating}`)
     }
}
let Movie1= new movie("Casino Royale","Eon Productions","PG13");
let Movie2= new movie("Master","sun productions","PG16");
console.log(Movie1.getDetails());
console.log(Movie2.getDetails());