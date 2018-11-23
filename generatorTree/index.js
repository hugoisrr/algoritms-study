class Tree {
    /* Constructor of the Tree that receives a value and an array as children */
    constructor(value = null, children = []) {
        this.value = value;
        this.children = children;
    }

    /* first prints the value, then for every child recursively will print the children of the first value */
    *printValues() {
        yield this.value;
        for (let child of this.children) {
            yield* child.printValues();
        }
    }
}

/* new instance of Tree class [1,2,4,3]*/
const tree = new Tree(1, [
    new Tree(2, [new Tree(4)]),
    new Tree(3)
])

/* new array to save values of the tree */
const values = [];
/* iterates through all the values of the tree and push them into array */
for (let value of tree.printValues()) {
    values.push(value);
}
/* prints the array */
console.log(values);

module.exports = { Tree };