import {Coordinate, Relation} from './coordinate';
import {isValidSet, JackscriptSet} from './functions'

// This function is to validate equality between two elements of the same type but not neccessarily coming from the same array... etc.
function coordinatesEqual<T>(a: Coordinate<T, T>, b: Coordinate<T, T>): boolean {
    return a[0] === b[0] && a[1] === b[1];
}
function setValuesEqual<T>(a: Set<T>, b: Set<T>): boolean{
    return a === b;
}

// Make a mental note that a relation is not the same thing as a Jackscript set:
// Keep them seperate... Dont try to run jackscriptset operations/methods on a realtion type.

// lets declare the Jacksript set:
let setA = new JackscriptSet<number>();
let setB = new JackscriptSet<number>();

let nsetA: any = new JackscriptSet<number>([1,2,3]);
let nsetB: any = new Set<number>([4,5,6]);
setA.add(1,2,6);
setB.add(6,7);

let setR: Relation<number | string, number> = setA.createCartesian(setB);


// create a test Coordinate array and add these values in a test Relation set, then compare the sets:
// let testRelation: Relation<number, number> = new JackscriptSet<number>();
let test = new JackscriptSet<Coordinate<number, number>>();
let myarray : Coordinate<number, number> [] = [[1,1], [2,2], [6,6]] as const;

for(let item of myarray){
    test.add(item);
}

// console.log(nsetA.isReflexive(test));
let cod : Coordinate<number, number> = [1,1];
// console.log(myarray[0])
// console.log(cod);

// console.log(coordinatesEqual());
// console.log(myarray[0] == cod);
// console.log(coordinatesEqual(myarray[0], cod));

// testing the intersect method:
let intersectArray = JackscriptSet.intersect(setA, setB);
// console.log(intersectArray);


// 
let testSet4 = new JackscriptSet<string>("samuel")
let testSet5 = new JackscriptSet<string>("sam");
let result = new JackscriptSet<string>;
// result.add("sam");
// console.log(JackscriptSet.union(testSet4, testSet5));

// test the domain and range:
// console.log(JackscriptSet.domain(setR));
// console.log(JackscriptSet.range(setR));


// Testing of the domain::: not done:
let testSet = new JackscriptSet<number>([1,2,3,4,5,6]);
let testSet2 = new JackscriptSet<number>([3,4,5]);
let water : Relation<number, number> = testSet.createCartesian(testSet2);
let domainTest = new JackscriptSet<number>([1,2,3,4,5,6])
let domainTest2 = JackscriptSet.domain(water)
// console.log(typeof domainTest.internalset());
// console.log(setValuesEqual(domainTest2, domainTest.internalset()))

let testSetSubset = new JackscriptSet<number>([1,2]);
console.log(testSetSubset.isSubsetOf(testSet));

console.log(testSet5.isSubsetOf(testSet4));
