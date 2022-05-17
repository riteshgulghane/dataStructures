class TreeNode {

    constructor(value, parent = null, descendents = []) {
        this.parent = null;
        this.descendents = [];
        this.value = value;
    }

    addLeaf(value) {
        let temp = new TreeNode(value);
        temp.parent = this;
        this.descendents.push(temp);
        return temp;
    }

    getLeaf(value, isDeep = false) {
        let leaf = this.descendents.map(leaf => {
            if (leaf.value == value) {
                return leaf;
            }
            if (leaf.descendents.length)
                return getLeaf(leaf.value);
            return;
        }, value).find(leaf => leaf);
        return isDeep ? new TreeNode(leaf.value, leaf.parent, leaf.descendents) : leaf;
    }

    addAtLeaf(nodeVal, value) {
        this.getLeaf(nodeVal).addLeaf(value);
    }
}


module.exports = TreeNode;