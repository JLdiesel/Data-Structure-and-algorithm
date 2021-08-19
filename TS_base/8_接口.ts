type InfoType = { name: string, age: number }

//
interface IInfoType {
    readonly name: string;
    age: number;
    friend?: {
        name: string
    }
    swimming(){
    console.log('swimming');
    
    }
}
class Info implements IInfoType {
    name: string;
    age: number
    swimming() {
        
    }
}

const info: IInfoType = {
    name: 'jl',
    age: 18,
    friend: {
        name: 'lauv'
    }
}

console.log(info.friend?.name);
console.log(info.name);
info.age = 444
// info.name='jl'  readonly


