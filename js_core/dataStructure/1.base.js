// // 1) 数组 

// const arr = [1,2,3]

// // 访问第一个 
// console.log(arr[0]); //1

// // 遍历 数组 
// for(let i = 0;i < arr.length; i++){
//     console.log(arr[i]); // 1 2 3
// }

// // 2)链表 (Linked List)  单向链表 有next  双向链表 you prev xx next
// class Node{
//     constructor(data){
//         this.data = data 
//         this.next = null
//     }
// }

// // 创建链表
// let head = new Node(1)
// let second = new Node(2)
// let third = new Node(3)

// // 连接链表
// head.next = second
// second.next = third

// // 遍历 链表
// let current = head
// while(current !== null){
//     console.log('current',current.data);  // current 1 current 2 current 3
//     current = current.next
// }

// // 3） 栈 (Stack)  先进后出 原则
// let stack = []

// // 入栈 
// stack.push(1)
// stack.push(2)
// stack.push(3)

// // 出栈
// let item = stack.pop()
// console.log('item',item); // item 3

// // 栈顶元素 
// const len = stack.length - 1 
// let topItem = stack[len]
// console.log('topItem', topItem); // topItem 2

// // 4) 队列 (Queue) 先进先出
// let queue = []

// // 入队 
// queue.push(1)
// queue.push(2)
// queue.push(3)

// // 出队
// const item = queue.shift()
// console.log('item', item) // item 1;

// // 队首 
// const firstItem = queue[0]
// console.log('firstItem', firstItem) // firstItem 2;


// // 4) 哈希表 (Hash Table) 使用哈希函数将键映射到存储桶中，提供了快速的插入、查找和删除操作
// let hashTable = {}

// // 插入健值对 
// hashTable['name'] = 'ppx'
// hashTable['age'] = 18
// hashTable['gender'] = 'male'

// console.log('hashTable', hashTable) // hashTable { name: 'ppx', age: 18, gender: 'male' }
// // 删除键值对 
// delete hashTable['age']
// console.log('hashTable-delete', hashTable) // hashTable-delete { name: 'ppx', gender: 'male' }

// // 遍历 
// for(let key in hashTable) {
//     console.log(key + ' ' + hashTable[key] ); // name ppx   gender male
// }

// 5） 基本树 
// class TreeNode{
//     constructor(value){
//         this.value = value;
//         this.children = [];
//     }
//     appendChild(child){
//         this.children.push(child);
//     }
// }

// // 创建树
// let root = new TreeNode(1)
// let child1 = new TreeNode(2)
// let child2 = new TreeNode(3)

// // 子节点插入树中
// root.appendChild(child1)
// root.appendChild(child2)

// // 遍历 
// function traverse(node){ // 深度优先
//     console.log(node.value)
//     node.children.forEach(child => traverse(child))
// }

// traverse(root) // 1 2 3

// 5-1） 二叉树 (Binary Tree)
// class BinaryTreeNode{
//     constructor(value){
//         this.value = value;
//         this.left = null 
//         this.right = null
//     }
// }

// // 创建二叉树
// let root  = new BinaryTreeNode(1)
// let leftChild  = new BinaryTreeNode(2)
// let rightChild = new BinaryTreeNode(3)

// root.left = leftChild
// root.right = rightChild

// // 中序遍历  左-->root --> 右
// function inorderTraversal(node){
//     if(node == null) return 

//     inorderTraversal(node.left)
//     console.log('value',node.value) // value 2 1 3 
//     inorderTraversal(node.right);
// }

// inorderTraversal(root)

// 5-2）分类和标签结构：树可用于表示分类和标签的层次结构，如产品分类、文章标签
// class TreeNode{
//     constructor(name){
//         this.name = name
//         this.children = []
//     }

//     appendChild(child){
//         this.children.push(child)
//     }
// }

// // 创建分类树
// let root = new TreeNode('root')
// let electronics = new TreeNode('Electronics');
// let clothing = new TreeNode('Clothing');

// root.appendChild(electronics)
// root.appendChild(clothing)

// let smartphones = new TreeNode('Smartphones');
// let laptops = new TreeNode('Laptops');
// let tShirts = new TreeNode('T-Shirts');
// let jeans = new TreeNode('Jeans');

// electronics.appendChild(smartphones);
// electronics.appendChild(laptops);
// clothing.appendChild(tShirts);
// clothing.appendChild(jeans);

// // 遍历
// function traverse(node){
//     console.log(node.name);
//     node.children.forEach(child => traverse(child))
// }

// traverse(root)

// 5-3） 文件系统：树可用于表示文件系统中的目录结构
class TreeNode {
    constructor(name){
        this.name = name
        this.children = []
    }

    addChild(child){
        this.children.push(child)
    }
}

// 创建文件系统树
let root = new TreeNode('root')
let documents = new TreeNode('Documents')
let pictures = new TreeNode('Pictures')
let music  = new TreeNode('Music')

root.addChild(documents)
root.addChild(pictures)
root.addChild(music)

let work = new TreeNode('Work')
let project = new TreeNode('Project')

documents.addChild(work)
documents.addChild(project)

// 遍历 
function traverse(node){
    console.log(node.name);
    node.children.forEach(child => traverse(child))
}

traverse(root)
// 6）图 
// 创建图 社交网络：图可用于表示社交网络中的用户和他们之间的关系
// class Graph{
//     constructor(){
//         this.vertices = []
//         this.edge = {}
//     }

//     // 添加顶点
//     addVertex(vertex){
//         this.vertices.push(vertex)
//         this.edge[vertex] = []
//     }

//     addEdge(vertex1,vertex2){
//         this.edge[vertex1].push(vertex2)
//         this.edge[vertex2].push(vertex1)
//     }

//     // 获取朋友列表
//     getFriends(vertex){
//         return this.edge[vertex]
//     }
// }

// // 构建社交网络图
// let socialNetwork = new Graph();
// socialNetwork.addVertex('Alice'); // 添加 四个顶点 
// socialNetwork.addVertex('Bob');
// socialNetwork.addVertex('Charlie');
// socialNetwork.addVertex('Dave');

// socialNetwork.addEdge('Alice', 'Bob'); // 添加顶点之间的关系
// socialNetwork.addEdge('Bob', 'Charlie');
// socialNetwork.addEdge('Charlie', 'Dave');

// // 获取用户的朋友列表
// let friends = socialNetwork.getFriends('Charlie');
// console.log(friends);  // 输出: [ 'Alice', 'Charlie' ]

// 6-1） 
// 网络路由：图可用于表示网络中的节点和它们之间的连接关系，用于网络路由算法
// class Graph {
//     constructor() {
//         // 初始化图的顶点数组 vertices 和边的对象 edges
//       this.vertices = [];
//       this.edges = {};
//     }
  
//     addVertex(vertex) {
//       this.vertices.push(vertex); // 将顶点添加到顶点数组 vertices 中
//       this.edges[vertex] = []; // 在边的对象 edges 中创建一个空数组来存储与该顶点相关的边
//     }
  
//     addEdge(vertex1, vertex2, weight) {
//       this.edges[vertex1].push({ vertex: vertex2, weight: weight }); // 在 edges[vertex1] 中添加一个对象，包含目标顶点 vertex2 和边的权重 weight
//       this.edges[vertex2].push({ vertex: vertex1, weight: weight }); // 在 edges[vertex2] 中也添加一个对象，包含源顶点 vertex1 和边的权重 weight
//     }
  
//     // 使用队列来迭代顶点，并更新最短距离和前置顶点的信息。最后，通过回溯前置顶点数组，构建最短路径并返回。
//     findShortestPath(startVertex, endVertex) { //  Dijkstra 算法 找最短路径
//       let distances = {}; // 存储起始顶点到各顶点的距离
//       let previous = {}; // 存储当前顶点的前置顶点
//       let queue = []; // 用于迭代顶点的队列
//       let path = [];   // 存储最短路径的数组
  
//        // 初始化起始顶点到各顶点的距离为无穷大，前置顶点为 null
//       distances[startVertex] = 0;
//       this.vertices.forEach(vertex => {
//         // console.log('vertex',vertex); // A B C D E 
//         if (vertex !== startVertex) {
//           distances[vertex] = Infinity;
//         }
//         // distances[vertex] 0
//         // previous[vertex] null
//         // distances[vertex] Infinity
//         // previous[vertex] null
//         // distances[vertex] Infinity
//         // previous[vertex] null
//         // distances[vertex] Infinity
//         // previous[vertex] null
//         // distances[vertex] Infinity
//         // previous[vertex] null
//         // console.log('distances[vertex]',distances[vertex]);
//         previous[vertex] = null;
//         // console.log('previous[vertex]',previous[vertex]);
//       });
  
//       queue.push(startVertex); // 将起始顶点加入队列
//       console.log('queue',queue); // queue [ 'A' ]
  
//       while (queue.length > 0) {
//         let currentVertex = queue.shift(); // 从队列中取出当前顶点 'A'
   
//         if (currentVertex === endVertex) { // 'A' !== 'E'
//             // 如果当前顶点是目标顶点，则回溯前置顶点数组构建最短路径
//           while (previous[currentVertex]) {
//             // console.log('path',path)
//             path.unshift(currentVertex);
//             // console.log(' path.unshift(currentVertex);', path.unshift(currentVertex));
//             currentVertex = previous[currentVertex];
//           }
//           break;
//         }
  
//         this.edges[currentVertex].forEach(neighbor => {
//             // 遍历当前顶点的邻居顶点
//           let distance = distances[currentVertex] + neighbor.weight;
//           console.log('distance',distance);
//           if (distance < distances[neighbor.vertex]) {
//             // 如果新路径更短，则更新距离和前置顶点信息
//             distances[neighbor.vertex] = distance;
//             previous[neighbor.vertex] = currentVertex;
//             queue.push(neighbor.vertex);
//           }
//         });
//       }
  
//       path.unshift(startVertex); // 加入起始顶点到最短路径
//       return path; // 返回最短路径数组
//     }
//   }
  
//   // 构建网络路由图
//   let network = new Graph();
//   network.addVertex('A');
//   network.addVertex('B');
//   network.addVertex('C');
//   network.addVertex('D');
//   network.addVertex('E');
  
//   network.addEdge('A', 'B', 4);
//   network.addEdge('A', 'C', 2);
//   network.addEdge('B', 'C', 1);
//   network.addEdge('B', 'D', 5);
//   network.addEdge('C', 'D', 8);
//   network.addEdge('C', 'E', 10);
//   network.addEdge('D', 'E', 2);
  
//   // 查找最短路径
//   let shortestPath = network.findShortestPath('A', 'E');
//   console.log(shortestPath);  // 输出: ['A', 'C','B', 'D', 'E']
  