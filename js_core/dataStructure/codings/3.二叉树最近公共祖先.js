// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先
class TreeNode{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left
        this.right = right
    }
}

const lowestCommonAncestor = function(root, p, q) {
    // 从根节点开始，如果当前节点为 null 或者等于其中一个目标节点，直接返回当前节点
    if(root == null || root === p || root === q) return root

    // 递归地在左子树和右子树中查找目标节点
    const left = lowestCommonAncestor(root.left, p,q)
    const right  = lowestCommonAncestor(root.right, p,q)

    // 如果左子树和右子树都能找到目标节点，说明根节点是最近公共祖先；如果只在左子树中找到目标节点，则返回左子树的结果；如果只在右子树中找到目标节点，则返回右子树的结果
    if(left && right){
        return root 
    }else if(left){
        return left 
    }else{
        return right
}
};

//
// 创建二叉树
let root = new TreeNode(3);
let node5 = new TreeNode(5);
let node1 = new TreeNode(1);
let node6 = new TreeNode(6);
let node2 = new TreeNode(2);
let node0 = new TreeNode(0);
let node8 = new TreeNode(8);
let node7 = new TreeNode(7);
let node4 = new TreeNode(4);

root.left = node5;
root.right = node1;
node5.left = node6;
node5.right = node2;
node2.left = node7;
node2.right = node4;
node1.left = node0;
node1.right = node8;

// 寻找最近公共祖先
let p = node5;
let q = node1;
let ancestor = lowestCommonAncestor(root, p, q);
console.log(ancestor.val);  // 输出: 3