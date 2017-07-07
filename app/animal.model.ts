export class Animal {
  //does not work for adding s to make name plural for editing existing animal
  // public namePlural: string = this.Animal.name + "'s'" 
    constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string,public likes: string, public dislikes: string) { }
}
