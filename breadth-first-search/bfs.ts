class TreeNode {
    value: number;
    children: TreeNode[];

    constructor(value:number, children: TreeNode[] = []){
        this.value = value;
        this.children = children;
    }
}

const rootNode = new TreeNode(1, [
	new TreeNode(2, [new TreeNode(4), new TreeNode(5)]),
	new TreeNode(3, [new TreeNode(6), new TreeNode(7)]),
])

const bfs = (rootNode: TreeNode | null, targetValue: number):boolean => {
    if(rootNode === null) return false;
    const queue: TreeNode[] = []
    queue.push(rootNode)
    while(queue.length > 0) {
        const currentNode = queue.shift()
        if(currentNode?.value === targetValue) return true
        for (const child of currentNode?.children!) {
            queue.push(child);
        }
    }

    return false;
}

const targetValue= 2
console.log(bfs(rootNode, targetValue))
