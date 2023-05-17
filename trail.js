
class MinHeap {
    constructor() {
      this.heap = [];
    }
    
    buildHeap(array) {
      this.heap = [...array];
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  
    shiftDown(currentIndex) {
      let endIdx = this.heap.length - 1;
      let leftIdx = this.leftChild(currentIndex);
      while (leftIdx <= endIdx) {
        let rightIdx = this.rightChild(currentIndex);
        let idxToShift;
        if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
          idxToShift = rightIdx;
        } else {
          idxToShift = leftIdx;
        }
        if (this.heap[currentIndex] > this.heap[idxToShift]) {
          this.swap(currentIndex, idxToShift);
          currentIndex = idxToShift;
          leftIdx = this.leftChild(currentIndex);
        } else {
          return;
        }
      }
    }
  
    shiftUp(currentIndex) {
      let parentIndex = this.parent(currentIndex);
      while (currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(currentIndex);
      }
    }
  
   
  
    remove() {
      this.swap(0, this.heap.length - 1);
      this.heap.pop();
      this.shiftDown(0);
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return i * 2 + 1;
    }
  
    rightChild(i) {
      return i * 2 + 2;
    }
  
    display() {
      for (let i = 0; i < this.heap.length; i++) {
        console.log(this.heap[i]);
      }
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  }
  
  let array = [40,6, 2, 8];
  let heap = new MinHeap();
  heap.buildHeap(array);
  heap.display();
  console.log('');
  heap.insert(1);
  heap.insert(5);
  heap.insert(15);
  heap.insert(3);
  heap.display();
  console.log('');
  heap.remove();
  heap.display();

  
// .............................trie ...........................


  class TrieNode{ 
    constructor(){ 
        this.children=new Map(); 
    } 
} 
 
 
class Trie{ 
    constructor(str){ 
        this.root=new TrieNode(); 
        this.endSymbol='*'; 
        this.populateSuffixTrie(str) 
    } 
 
    populateSuffixTrie(str){ 
        for(let i=0;i<str.length;i++){ 
            this.insertSubstring(i,str) 
        } 
    } 
 
 
    insertSubstring(index,str){ 
        let node=this.root; 
        for(let i=index;i<str.length;i++){ 
            const letter=str.charAt(i); 
            if(!node.children.has(letter)){ 
                node.children.set(letter,new TrieNode()) 
            } 
            node=node.children.get(letter) 
        } 
        node.children.set(this.endSymbol,null); 
    } 
 
    contains(str){ 
        let node=this.root; 
        for(let i=0;i<str.length;i++){ 
            const letter=str.charAt(i); 
            if(!node.children.has(letter)){ 
                return false 
            } 
            node=node.children.get(letter) 
        } 
        return node.children.has(this.endSymbol) 
    } 
 
} 
 
 
const tr=new Trie("tree"); 
console.log(tr.contains("e"))

// ..........................minHeap...........................



class MinHeap {
    constructor() {
      this.heap = [];
    }
    
    buildHeap(array) {
      this.heap = [...array];
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  
    shiftDown(currentIndex) {
      let endIdx = this.heap.length - 1;
      let leftIdx = this.leftChild(currentIndex);
      while (leftIdx <= endIdx) {
        let rightIdx = this.rightChild(currentIndex);
        let idxToShift;
        if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
          idxToShift = rightIdx;
        } else {
          idxToShift = leftIdx;
        }
        if (this.heap[currentIndex] > this.heap[idxToShift]) {
          this.swap(currentIndex, idxToShift);
          currentIndex = idxToShift;
          leftIdx = this.leftChild(currentIndex);
        } else {
          return;
        }
      }
    }
  
    shiftUp(currentIndex) {
      let parentIndex = this.parent(currentIndex);
      while (currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(currentIndex);
      }
    }
  
   
  
    remove() {
      this.swap(0, this.heap.length - 1);
      this.heap.pop();
      this.shiftDown(0);
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return i * 2 + 1;
    }
  
    rightChild(i) {
      return i * 2 + 2;
    }
  
    display() {
      for (let i = 0; i < this.heap.length; i++) {
        console.log(this.heap[i]);
      }
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  }
  
  let array = [40,6, 2, 8];
  let heap = new MinHeap();
  heap.buildHeap(array);
  heap.display();
  console.log('');
  heap.insert(1);
  heap.insert(5);
  heap.insert(15);
  heap.insert(3);
  heap.display();
  console.log('');
  heap.remove();
  heap.display();

  // .....................bst .................................

  
class node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class binarySearchTree{
    constructor(){
        this.root=null
    }
    insert(data){
        let curentdata=this.root
        if(curentdata==null){
            this.root=new node(data)
            return this.root.data+'...root'
        }else{
            while(true){
                if(data<curentdata.data){
                    if(curentdata.left==null){
                        curentdata.left=new node(data)
                        return curentdata.left.data+'...left'

                    }else{
                        curentdata=curentdata.left
                    }
                }else{
                    if(curentdata.right==null){
                        curentdata.right=new node(data)
                        return curentdata.right.data+'...right'
                    }else{
                        curentdata=curentdata.right
                    }
                }
            }
        }
    }

    inorder(){
        this.inorderHelper(this.root)
    }
    inorderHelper(curentdata){
        if(curentdata!=null){
            this.inorderHelper(curentdata.left)
            console.log(curentdata.data);
            this.inorderHelper(curentdata.right)
        }
    }

    contain(data){
        let curentdata=this.root
        while(curentdata!=null){
            if(data<curentdata.data)
            curentdata=curentdata.left
            else if(data>curentdata.data)
            curentdata=curentdata.right
            else
            return true
        }
        return false
    }

    isBst()
    {
        return this.isBstHelper(this.root,0,Infinity)
    }
    isBstHelper(root,min,max){
        if(root==null)
        return true
        if(root.data<min || root.data>max)
        return false
        return(this.isBstHelper(root.left,min,root.data-1)&& this.isBstHelper(root.right,root.data+1,max))
    }
}
let tree=new binarySearchTree()
console.log(tree.insert(40));
console.log(tree.insert(30));
console.log(tree.insert(32));
console.log(tree.insert(28));
console.log(tree.insert(50));
console.log(tree.insert(45));
tree.inorder()
console.log(tree.contain(0));
console.log(tree.isBst());

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>graph  >>>>>>>>>>>>>>>>>>>>>>>>>>


class Graph {
  constructor() {
      this.map = new Map();
  }
  addVertex(vertex) {
      this.map.set(vertex, []);
  }
  insert(vertex, edge, isbidirection = false) {
      if (!this.map.has(vertex)) {
          this.addVertex(vertex);
      }
      if (!this.map.has(edge)) {
          this.addVertex(edge);
      }
      this.map.get(vertex).push(edge);
      if (isbidirection) {
          this.map.get(edge).push(vertex);
      }
  }
  delete(vertex){
      if (this.map.has(vertex)){
          let edges = this.map.get(vertex);
          console.log(edges);
          for ( let edge of edges){
              this.map.get(edge).splice(this.map.get(edge).indexOf(vertex), 1);
          }
          this.map.delete(vertex);
      }
  }
  
  display() {
      for (let vertex of this.map.keys()) {
          let temp = this.map.get(vertex);
          console.log(vertex, temp);
      }
  }
}
let obj = new Graph();
obj.insert("A", 1);
obj.insert("B", 2);
obj.insert("C", 1,true);
obj.insert("D", 'A',true);
// obj.delete("A");
obj.display();