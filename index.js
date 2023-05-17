

// treee work out


// class Node{ 
//     constructor(data){ 
//       this.data=data; 
//       this.left=null; 
//       this.right=null; 
//     } 
//   } 
   
//   class binarySearchTree{ 
//     constructor(){ 
//       this.root=null; 
//     } 
   
//     insert(data){ 
//       let currentNode=this.root; 
       
  
//       if(currentNode==null){ 
//         this.root=new Node(data); 
//       }else{ 
//         while(true){ 
//           if(data<currentNode.data){ 
//             if(currentNode.left==null){ 
//               currentNode.left=new Node(data); 
//               break 
//             }else{ 
//               currentNode=currentNode.left 
//             } 
//           }else{ 
//             if(currentNode.right==null){  
//               currentNode.right=new Node(data); 
//               break 
//             }else{ 
//               currentNode=currentNode.right 
//             } 
//           } 
//         } 
//       } 
//     } 
   
   
  
//     contains(data){ 
//       let currentNode=this.root; 
//       while(currentNode!=null){ 
//         if(data<currentNode.data){ 
//           currentNode=currentNode.left 
//         }else if(data>currentNode.data){ 
//           currentNode=currentNode.right 
//         }else{ 
//           return true 
//         } 
//       } 
//       return false 
//     } 
   
   
//     remove(data){ 
//       this.removeHelper(data,this.root,null); 
//     } 
   
//     removeHelper(data,currentNode,parentNode){ 
//       while(currentNode!=null){ 
//         if(data<currentNode.data){ 
//           parentNode=currentNode; 
//           currentNode=currentNode.left 
//         }else if(data>currentNode.data){ 
//           parentNode=currentNode; 
//           currentNode=currentNode.right 
//         }else{ 
//           if(currentNode.left!=null&&currentNode.right!=null){ 
//             currentNode.data=this.getMinValue(currentNode.right); 
//             this.removeHelper(currentNode.data,currentNode.right,currentNode); 
//           }else{ 
//             if(parentNode==null){ 
//               if(currentNode.right==null){ 
//                 this.root=currentNode.left 
//               }else{ 
//                 this.root=currentNode.right 
//               } 
//             }else{ 
//               if(parentNode.left==currentNode){ 
//                 if(currentNode.right==null){ 
//                   parentNode.left=currentNode.left 
//                 }else{ 
//                   parentNode.left=currentNode.right 
//                 } 
//               }else{ 
//                 if(parentNode.right==null){ 
//                   parentNode.right=currentNode.left 
//                 }else{ 
//                   parentNode.right=currentNode.right; 
//                 } 
//               } 
//             } 
//           } 
//           break;
//         } 
//       } 
      
//     } 
   
   
//     getMinValue(currentNode){ 
//       if(currentNode.left==null){ 
//         return currentNode.data 
//       }else{ 
//         return this.getMinValue(currentNode.left) 
//       } 
//     } 
   


//     inOrder(){ 
//       this.inOrderHelper(this.root) 
//     } 
//     inOrderHelper(currentNode){ 
//       if(currentNode!=null){ 
         
//           this.inOrderHelper(currentNode.left) 
//         console.log(currentNode.data); 
//         this.inOrderHelper(currentNode.right) 
        
//       } 
//     } 
//   preOrder(){ 
//     this.preOrderHelper(this.root) 
//   } 
   
//   preOrderHelper(currentNode){ 
//     if(currentNode!=null){ 
//       console.log(currentNode.data); 
//       this.preOrderHelper(currentNode.left) 
//       this.preOrderHelper(currentNode.right) 
//     }   
//   } 
   
//   postOrder(){ 
//   this.postOrderHelper(this.root) 
//   } 
   
//   postOrderHelper(currentNode){ 
//     if(currentNode!=null){ 
//       this.postOrderHelper(currentNode.left) 
//       this.postOrderHelper(currentNode.right) 
//       console.log(currentNode.data); 
//     } 
//   } 
   


   
//   findClosest(target){ 
//     let currentNode=this.root; 
//     let closest=currentNode.data; 
//     while(currentNode!=null){ 
//       if(Math.abs(target-closest)>Math.abs(target-currentNode.data)){ 
//         closest=currentNode.data; 
//       }if(target<currentNode.data){ 
//         currentNode=currentNode.left 
//       }else if(target>currentNode.data){ 
//         currentNode=currentNode.right 
//       }else{ 
//         break 
//       } 
//     } 
//     return closest 
//   } 
   
//   isBST() { 
//     return this.isBstHelper(this.root, 0, Infinity); 
//   } 
   
//   isBstHelper(root, min, max) { 
//     if (root == null) { 
//       return true; 
//     } 
//     if (root.data < min || root.data > max) { 
//       return false; 
//     } 
//     return ( 
//       this.isBstHelper(root.left, min, root.data - 1) &&
//         this.isBstHelper(root.right, root.data + 1, max) 
  
//     ); 
//   } 
   
//   }
   
  
   
   
   
   
//   const bst=new binarySearchTree(); 
//   bst.insert(10) 
//   bst.insert(8) 
//   bst.insert(11) 
//   bst.insert(4) 
//   bst.insert(9) 
//   bst.insert(12) 
//   // bst.root.left.data=12; 
   
//   // bst.remove(9) 
//   // console.log(bst.contains(9)) 
   
//   // bst.inOrder() 
//   // bst.preOrder() 
//   // bst.postOrder() 
//   // console.log(bst.findClosest(12))
//   // bst.root.left.data=2
//   console.log(bst.isBST())




// bst creating 
// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'.............root'
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'............left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'............right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }
// }

// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'..........ROOT'
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'..........left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'..........right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }
// }

// .............................................tree with pre,post,in.................................

// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+".........root"
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'..........left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'...........right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inorder(){
//         this.inorderHelper(this.root)
//     }
//     inorderHelper(currentNode){
//         if(currentNode!=null){
//             this.inorderHelper(currentNode.left)
//             console.log(currentNode.data);
//             this.inorderHelper(currentNode.right)
//         }
//     }

//     preorder(){
//        this.preorderHelper(this.root)
        
//     }
//     preorderHelper(currentNode){
//         if(currentNode!=null){
//             console.log(currentNode.data);
//             this.preorderHelper(currentNode.left)
//             this.preorderHelper(currentNode.right)
//         }
//     }

//     postorder(){
//         this.postorderHelper(this.root)
//     }
//     postorderHelper(currentNode){
//         if(currentNode!=null){
//             this.postorderHelper(currentNode.left)
//             this.postorderHelper(currentNode.right)
//             console.log(currentNode.data);
//         }
//     }

// }


// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'...........root'
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'............left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'..........right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inorder(){
//         this.inorderHelper(this.root)
//     }
//     inorderHelper(currentNode){
//         if(currentNode!=null){
//             this.inorderHelper(currentNode.left)
//             console.log(currentNode.data);
//             this.inorderHelper(currentNode.right)
//         }
//     }
//     preorder(){
//         this.preorderHelper(this.root)
//     }
//     preorderHelper(currentNode){
//         if(currentNode!=null){
//             console.log(currentNode.data);
//             this.preorderHelper(currentNode.left)
//             this.preorderHelper(currentNode.right)
//         }
//     }
//     postorder(){
//         this.postorderHelper(this.root)
//     }
//     postorderHelper(currentNode){
//         if(currentNode!=null){
//             this.postorderHelper(currentNode.left)
//             this.postorderHelper(currentNode.right)
//             console.log(currentNode.data);
//         }
//     }
//     // contains(data){
//     //     let currentNode=this.root
//     //     while(currentNode!=null){
//     //         if(data<currentNode.data){
//     //             currentNode=currentNode.left
//     //         }
//     //         else if(data>currentNode.data){
//     //             currentNode=currentNode.right
//     //         }else{
//     //             return true
//     //         }
//     //     }
//     //     return false
//     // }

//     contains(data){
//         let currentNode=this.root
//         while(currentNode!=null){
//             if(data<currentNode.data){
//                 currentNode=currentNode.left
//             }else if(data>currentNode.data){
//                 currentNode=currentNode.right
//             }else{
//                 return true
//             }
//         }
//         return false
//     }
// }

// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'.......root'
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'.......left'
//                     }else{
//                         currentNode=currentNode.left
//                     }

//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'.......right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }

//         }
//     }
// }


// let bst =new binarySearchTree()
// console.log(bst.insert(40));
// console.log(bst.insert(30));
// console.log(bst.insert(25));
// console.log(bst.insert(45));
// console.log(bst.insert(45));
// console.log(bst.insert(47));
// console.log('inorder');
// bst.inorder()
// console.log('preorder')
// bst.preorder()
// console.log('postorder');
// bst.postorder()
// console.log(bst.contains(25));



//     isBST() { 
//     return this.isBstHelper(this.root, 0, Infinity); 
//   } 
   
//   isBstHelper(root, min, max) { 
//     if (root == null) { 
//       return true; 
//     } 
//     if (root.data < min || root.data > max) { 
//       return false; 
//     } 
//     return ( this.isBstHelper(root.left, min, root.data - 1) && this.isBstHelper(root.right, root.data + 1, max)); 
//   } 

// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'.....root'
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'......left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'.......right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inorder(){
//         this.inorderHelper(this.root)
//     }
//     inorderHelper(currentNode){
//        if(currentNode!=null){
//             this.inorderHelper(currentNode.left)
//             console.log(currentNode.data);
//             this.inorderHelper(currentNode.right)
//         }
//     }

    // contain(data){
    //     let currentNode=this.root
    //     while(currentNode!=null){
    //         if(data<currentNode.data){
    //            currentNode=currentNode.left
    //         }else if(data>currentNode.data){
    //             currentNode=currentNode.right
    //         }else{
    //             return true
    //         }
    //     }
    //     return false
    // }
    // preorder(){
    //     this.preorderHelper(this.root)
    // }
    // preorderHelper(currentNode){
    //     if(currentNode!=null){
    //         console.log(currentNode.data);
    //         this.preorderHelper(currentNode.left)
    //         this.preorderHelper(currentNode.right)
    //     }
    // }
    // postorder(){
    //     this.postorderHelper(this.root)
    // }
    // postorderHelper(currentNode){
    //     if(currentNode!=null){
    //         this.postorderHelper(currentNode.left)
    //         this.postorderHelper(currentNode.right)
    //         console.log(currentNode.data);
    //     }
    // }

    // contain(data){
    //     let currentNode=this.root
    //     while(currentNode!=null){
    //         if(data<currentNode.data){
    //             currentNode=currentNode.left
    //         }else if(data>currentNode.data){
    //             currentNode=currentNode.right
    //         }else{
    //             return true
    //         }
    //     }
    //     return false
    // }

//     contain(data){
//         let currentNode=this.root
//         while(currentNode!=null){
//             if(data<currentNode.data){
//                 currentNode=currentNode.left
//             }else if(data>currentNode.data){
//                 currentNode=currentNode.right
//             }else{
//                 return true
//             }
//         }
//         return false
//     }
// }

// let binary =new binarySearchTree()
// console.log(binary.insert(40));
// console.log(binary.insert(20));
// console.log(binary.insert(19));
// console.log(binary.insert(25));
// console.log(binary.insert(45));
// console.log(binary.insert(42));
// console.log(binary.insert(50));
// console.log('inorder');
// binary.inorder()
// console.log(binary.contain(400));
// console.log('preorder');
// binary.preorder()
// console.log('postorder');
// binary.postorder()


// class node {
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root

//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'.....root'
//         }
//         // else if(data==10){
//         //   currentNode.right=new node(data)
//         //   return currentNode.right.data+'.....10 added right'
//         // }
//         else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'.....left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }
//                 else{
//                     if(currentNode.right===null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'.....right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }
//     contain(data){
//         let currentNode=this.root
//         while(currentNode!=null){
//             if(data<currentNode.data){
//                 currentNode=currentNode.left
//             }else if(data>currentNode.data){
//                 currentNode=currentNode.right
//             }else{
//                 return true
//             }
//         }
//         return false
//     }
//     inorder(){
//         this.inorderHelper(this.root)
//     }
//     inorderHelper(currentNode){
//         if(currentNode!=null){
//             this.inorderHelper(currentNode.left)
//             console.log(currentNode.data);
//             this.inorderHelper(currentNode.right)
//         }
//     }

    // isbst(){
    //    return this.isbstHelper(this.root,0,Infinity)
    // }
    // isbstHelper(root,min,max){
    //     if(root==null)
    //     return true
    //     if(root.data<min && root.data>max)
    //     return false
    //     return( this.isbstHelper(root.left,min,root.data-1) && this.isbstHelper(root.right,root.data+1,max))
    // }

    // isbst(){
    //     return this.isbstHelper(this.root,-Infinity,Infinity)
    // }
    // isbstHelper(root,min,max){
    //     if(root==null)
    //     return true
    //     if(root.data<min || root.data>max)
    //     return false
    //     return(this.isbstHelper(root.left,min,root.data-1)&& this.isbstHelper(root.right,root.data+1,max))
    // }
       
//   isbst() { 
//     return this.isBstHelper(this.root, 0, Infinity); 
//   } 
   
//   isBstHelper(root, min, max) { 
//     if (root == null) { 
//       return true; 
//     } 
//     if (root.data < min || root.data > max) { 
//       return false; 
//     } 
//     return ( 
//       this.isBstHelper(root.left, min, root.data - 1) &&
//         this.isBstHelper(root.right, root.data + 1, max) 
  
//     ); 
//   } 
// MIN(){
//     let currentNode=this.root
//     let min
//     while(currentNode!=null){
//         min=currentNode.data
//         currentNode=currentNode.left
//     }
//     return min+'.....min value'
// }
// max(){
//     let currentNode=this.root
//     let big
//     while(currentNode!=null){
//          big=currentNode.data
//         currentNode=currentNode.right
//     }
//     return big+'......max value'
// }
// }

//     let bst=new binarySearchTree()


//     console.log(bst.insert(40));
//     console.log(bst.insert(10));
//     console.log(bst.insert(35));
//     console.log(bst.insert(36));
//     console.log(bst.insert(50));
//     console.log(bst.insert(41));
//     console.log(bst.insert(46));
//     console.log(bst.insert(1));
//     console.log(bst.insert(60));
   
//     console.log(bst.isbst());
//     console.log(bst.MIN());
//     console.log(bst.max());



// ..............................heap...............................

// class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(array) {
//       this.heap = [...array];
//       for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//         this.shiftDownMax(i);
//       }
//     }
  
//     shiftDownMax(currentIndex, endIdx) {
//       let leftIdx = this.leftChild(currentIndex);
//       while (leftIdx <= endIdx) {
//         let rightIdx = this.rightChild(currentIndex);
//         let idxToShift;
//         if (rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]) {
//           idxToShift = rightIdx;
//         } else {
//           idxToShift = leftIdx;
//         }
//         if (this.heap[currentIndex] < this.heap[idxToShift]) {
//           this.swap(currentIndex, idxToShift);
//           currentIndex = idxToShift;
//           leftIdx = this.leftChild(currentIndex);
//         } else {
//           return;
//         }
//       }
//     }
  
//     shiftUpMax(currentIndex) {
//       let parentIndex = this.parent(currentIndex);
//       while (currentIndex > 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
//         this.swap(currentIndex, parentIndex);
//         currentIndex = parentIndex;
//         parentIndex = this.parent(currentIndex);
//       }
//     }
  
//     // peek() {
//     //   return this.heap[0];
//     // }
  
//     remove() {
//       this.swap(0, this.heap.length - 1);
//       this.heap.pop();
//       this.shiftDownMax(0, this.heap.length - 1);
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.shiftUpMax(this.heap.length - 1);
//     }
  
//     parent(i) {
//       return Math.floor((i - 1) / 2);
//     }
  
//     leftChild(i) {
//       return i * 2 + 1;
//     }
  
//     rightChild(i) {
//       return i * 2 + 2;
//     }
  
    // maxHeapSort(array) {
    //   let maxHeap = new MaxHeap();
    //   maxHeap.buildHeap(array);
    
    //   for (let i = array.length - 1; i >= 1; i--) {
    //     maxHeap.swap(0, i);
    //     maxHeap.shiftDownMax(0, i - 1);
    //   }
    
    //   return maxHeap.heap;
    // }
  
//     display() {
//       for (let i = 0; i < this.heap.length; i++) {
//         console.log(this.heap[i]);
//       }
//     }
  
//     swap(i, j) {
//       [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }
//   }
  
//   let array = [2,1,3];
//   let heap = new MaxHeap();
//   heap.buildHeap(array)
// //   heap.insert(10)
// //   console.log(heap.maxHeapSort(array));
//   heap.display();




// ....................................minHeap ............................

// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
    
//     buildHeap(array) {
//       this.heap = [...array];
//       for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//         this.shiftDown(i);
//       }
//     }
  
    // shiftDown(currentIndex) {
    //   let endIdx = this.heap.length - 1;
    //   let leftIdx = this.leftChild(currentIndex);
    //   while (leftIdx <= endIdx) {
    //     let rightIdx = this.rightChild(currentIndex);
    //     let idxToShift;
    //     if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) {
    //       idxToShift = rightIdx;
    //     } else {
    //       idxToShift = leftIdx;
    //     }
    //     if (this.heap[currentIndex] > this.heap[idxToShift]) {
    //       this.swap(currentIndex, idxToShift);
    //       currentIndex = idxToShift;
    //       leftIdx = this.leftChild(currentIndex);
    //     } else {
    //       return;
    //     }
    //   }
    // }
  
//     shiftUp(currentIndex) {
//       let parentIndex = this.parent(currentIndex);
//       while (currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
//         this.swap(currentIndex, parentIndex);
//         currentIndex = parentIndex;
//         parentIndex = this.parent(currentIndex);
//       }
//     }
  
   
  
//     remove() {
//       this.swap(0, this.heap.length - 1);
//       this.heap.pop();
//       this.shiftDown(0);
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.shiftUp(this.heap.length - 1);
//     }
  
//     parent(i) {
//       return Math.floor((i - 1) / 2);
//     }
  
//     leftChild(i) {
//       return i * 2 + 1;
//     }
  
//     rightChild(i) {
//       return i * 2 + 2;
//     }
  
//     display() {
//       for (let i = 0; i < this.heap.length; i++) {
//         console.log(this.heap[i]);
//       }
//     }
  
//     swap(i, j) {
//       [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }
//   }
  
//   let array = [40,6, 2, 8];
//   let heap = new MinHeap();
//   heap.buildHeap(array);
//   heap.display();
//   console.log('');
//   heap.insert(1);
//   heap.insert(5);
//   heap.insert(15);
//   heap.insert(3);
//   heap.display();
//   console.log('');
//   heap.remove();
//   heap.display();

// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)

//         }
//     }


//     shiftDown(currentIndex){
//         let endIdx=this.heap.length-1
//         let leftindx=this.leftchild(currentIndex)
//         while(leftindx<=endIdx){
//             let rightindx=this.rightchild(currentIndex)
//             let shiftindx
//             if(rightindx<=endIdx && this.heap[rightindx]<this.heap[leftindx]){
//                 shiftindx=rightindx
//             }else{
//                 shiftindx=leftindx
//             }
//             if(this.heap[currentIndex]>this.heap[shiftindx]){
//                 this.swap(currentIndex,shiftindx)
//                 currentIndex=shiftindx
//                 leftindx=this.leftchild(currentIndex)
                
//             }else{
//                 return
//             } } }

//     parent(i){
//         return(Math.floor((i-1)/2))
//     }
//     leftchild(i){
//         return i*2+1;
//     }
//     rightchild(i){
//         return i*2+2;
//     }
//     swap(i,j){
//         return [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
// }


// let array = [,46,6, 2, 8];
// let newheap=new minHeap()
// newheap.buildHeap(array)
// newheap.display()

// class heap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(currentIndex){
//         let endidx=this.heap.length-1
//         let leftidx=this.leftChild(currentIndex)
//         while(leftidx<=endidx){
//             let rightidx=this.rightChild(currentIndex)
//             let shftidx
//             if(rightidx<=endidx && this.heap[rightidx]<this.heap[leftidx]){
//                 shftidx=rightidx
//             }else{
//                 shftidx=leftidx
//             }
//             if(this.heap[currentIndex]>this.heap[shftidx]){
//                 this.swap(currentIndex,shftidx)
//                 currentIndex=shftidx
//                 leftidx=this.leftChild(currentIndex)
//             }else{
//                 return
//             }
//         }
//     }

//     print(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
//     parent(i){
//         return(Math.floor((i-1)/2))
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//      [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

// }



// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         this.shiftDown(i)
//     }
//     shiftDown(currentIndex){
//         let enIdx=this.heap.length-1
//         let lftIdx=this.leftchild(currentIndex)
//         while(lftIdx<=enIdx){
//             let rgtIdx=this.rightChild(currentIndex)
//             let shftIdx
//             if(rgtIdx<=enIdx && this.heap[rgtIdx]<this.heap[lftIdx])
//             shftIdx=rgtIdx
//             else
//             shftIdx=lftIdx
//             if(this.heap[currentIndex]>this.heap[shftIdx]){
//               this.swap(currentIndex,shftIdx)
//               currentIndex=shftIdx
//               lftIdx=this.leftchild(currentIndex)  
//             }else
//             return
//         }
//     }
//     print(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }

//     parent(i){
//         return(Math.floor((i-1)/2))
//     }
//     leftchild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//         return [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]

//     }
// }
// let array=[35,5,76,54,1,2,7,23,21]
// let heaps=new minHeap()
// heaps.buildHeap(array)
// heaps.print()


// ...................BS treeeeeeeee..................

// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'.....root'
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'.....left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'.....right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inorder(){
// this.inorderhelper(this.root)
//     }
//     inorderhelper(currentNode){
//         if(currentNode!=null){
//             this.inorderhelper(currentNode.left)
//             console.log(currentNode.data);
//             this.inorderhelper(currentNode.right)
//         }
//     }

//     max(){
//         let big
//         let currentNode=this.root
//         while(currentNode!=null){
//              big=currentNode.data
//             currentNode=currentNode.right
//         }
//         return big+'....maximum'
//         }

//         min(){
//             let minimum
//             let currentNode=this.root
//             while(currentNode!=null){
//                 minimum=currentNode.data
//                 currentNode=currentNode.left
//             }
//             return minimum+'....minimum'
//         }

//         isBst(){
//             return this.isBstHelper(this.root,0,Infinity)
//         }
//         isBstHelper(root,min,max){

//             if(root==null)
//             return true
//             if(root.data<min || root.data>max)
//             return false
//            return(this.isBstHelper(root.left,min,root.data-1) && this.isBstHelper(root.right,root.data+1,max))
//         }
// }


// let bst=new binarySearchTree()
// console.log(bst.insert(40));
// console.log(bst.insert(10));
// console.log(bst.insert(3));
// console.log(bst.insert(30));
// console.log(bst.insert(45));
// bst.inorder()
// console.log(bst.max());
// console.log(bst.min());
// console.log(bst.isBst());

// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         this.shiftDown(i)
//     }
//     shiftDown(currentIndex){
//         let endIdx=this.heap.length-1
//         let leftidx=this.leftchild(currentIndex)
//         while(leftidx<=endIdx){
//             let rgtidx=this.rightChild(currentIndex)
//         let swapidx
//         if(rgtidx<=endIdx && this.heap[rgtidx]<this.heap[leftidx])
//         swapidx=rgtidx
//         else
//         swapidx=leftidx
//         if(this.heap[currentIndex]>this.heap[swapidx]){
//             this.swap(currentIndex,swapidx)
//             currentIndex=swapidx
//             leftidx=this.leftchild(currentIndex)
//         }else
//         return
//         }
//     }

//     print(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
//     parent(i){
//         return(Math.floor((i-1)/2))
//     }
//     leftchild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j)
//     {
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }

// let array=[123,34,4,45,23,21,8,2,1]
// let heap=new minHeap()
// heap.buildHeap(array)
// heap.print()

// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i= this.parent(this.heap.length-1);i>=0;i--)
//         this.shiftDown(i)
//     }
//     shiftDown(currentIndex){
//         let endidx=this.heap.length-1
//         let leftidx=this.leftChild(currentIndex)
//         while(leftidx<=endidx){
//             let rightidx=this.rightChild(currentIndex)
//             let swapidx
//             if(rightidx<=leftidx && this.heap[rightidx]<this.heap[leftidx])
//             swapidx=rightidx
//             else
//             swapidx=leftidx
//             if(this.heap[currentIndex]>this.heap[swapidx]){
//                 this.swap(currentIndex,swapidx)
//                 currentIndex=swapidx
//                 leftidx=this.leftChild(currentIndex)
//             }else
//             return
//         }
//     }

//     print(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }

//     parent(i){
//         return(Math.floor((i-1)/2))
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }
// let array=[12,432,45,7,87,34,45,1]
// let heap=new minHeap()
// heap.buildHeap(array)
// heap.print()

// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'.....root'
//         }
//         else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null)
//                     {
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'.....left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'.....right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }
//     inorder(){
//         this.inorderHelper(this.root)
//     }
//     inorderHelper(currentNode){
        
//         if(currentNode!=null){
//             this.inorderHelper(currentNode.left)
//             console.log(currentNode.data);
//             this.inorderHelper(currentNode.right)
//         }
//     }
//     preorder(){
//         this.preorderHelper(this.root)
//     }
//     preorderHelper(currentNode){
//         if(currentNode!=null){
//             console.log(currentNode.data);
//             this.preorderHelper(currentNode.left)
//             this.preorderHelper(currentNode.right)
//         }
//     }
//     postorder(){
//         this.postorderHelper(this.root)
//     }
//     postorderHelper(currentNode){
//         if(currentNode!=null){
//             this.postorderHelper(currentNode.left)
//             this.postorderHelper(currentNode.right)
//             console.log(currentNode.data);
//         }
//     }

//     isbst(){
//        return this.isbstHelper(this.root,0,Infinity)
//     }
//     isbstHelper(root,min,max){
//         if(root==null)
//         return true
//         if(root.data<min || root.data>max)
//         return false
//         return (this.isbstHelper(root.left,min,root.data-1)&& this.isbstHelper(root.right,root.data+1,max))
//     }

//     max(){
//         let currentNode=this.root
//         let big
//         while(currentNode!=null){
//             big=currentNode.data
//             currentNode=currentNode.left
//         }
//         return big+'.....large'
//     }
//     min(){
//         let currentNode=this.root
//         let small
//         while(currentNode!=null){
//             small=currentNode.data
//             currentNode=currentNode.right
//         }
//         return small+'.....smallest'
//     }
//     print(){
//         for(let i=0;i<this.root.length;i++)
//         console.log(this.root[i])
//     }
// }




// class minheap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         this.shiftDown(i)
//     }
//     shiftDown(currentIndex){
//         let endidx=this.heap.length-1
//         let leftIdx=this.leftChild(currentIndex)
//         while(leftIdx<=endidx){
//             let rightIdx=this.rightChild(currentIndex)
//             let swapidx
//             if(rightIdx<=endidx && this.heap[rightIdx]<this.heap[leftIdx])
//             swapidx=rightIdx
//             else
//             swapidx=leftIdx
//             if(this.heap[currentIndex]>this.heap[swapidx]){
//                 this.swap(currentIndex,swapidx)
//                 currentIndex=swapidx
//                 leftIdx=this.leftChild(currentIndex)
//             }else
//             return
//         }
//     }

    // shiftup(currentIndex){
    //     let parentIdx=this.parent(currentIndex)
    //     while(currentIndex>0 && this.heap[parentIdx]>this.heap[currentIndex]){
    //         this.swap(currentIndex,parentIdx)
    //         currentIndex=parentIdx
    //         parentIdx=this.parent(currentIndex)
    //     }
    // }

    // remove(){
    //     this.swap(0,this.heap.length-1)
    //     this.heap.pop()
    //     this.shiftDown(0)
    // }
//     print(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
//     parent(i){
//         return(Math.floor((i-1)/2))
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }



      
  
      
//        let array=[213,3,6,7,8,1,43]
//        let heap=new minheap()
//        heap.buildHeap(array)
//        heap.print()
//        console.log('.......................');
//        heap.remove()
//        heap.print()

// class node{
//     constructor(data){
//         this.data=data
//         this.right=null
//         this.left=null
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let currentNode=this.root
//         if(currentNode==null){
//             this.root=new node(data)
//             return this.root.data+'.....root'
//         }else{
//             while(true){
//                 if(data<currentNode.data){
//                     if(currentNode.left==null){
//                         currentNode.left=new node(data)
//                         return currentNode.left.data+'.....left'
//                     }else{
//                         currentNode=currentNode.left
//                     }
//                 }else{
//                     if(currentNode.right==null){
//                         currentNode.right=new node(data)
//                         return currentNode.right.data+'.....right'
//                     }else{
//                         currentNode=currentNode.right
//                     }
//                 }
//             }
//         }
//     }

//     inorder(){
//         this.inorderHelper(this.root)
//     }
//     inorderHelper(currentNode){
//         if(currentNode!=null){
//             this.inorderHelper(currentNode.left)
//             console.log(currentNode.data);
//             this.inorderHelper(currentNode.right)
//         }
//     }

//     isBst(){
//        return this.isBstHelper(this.root,0,Infinity)
       
//     }
//     isBstHelper(root,min,max){
//         if(root==null)
//         return true
//         if(root.data<min || root.data>max)
//         return false
//         return((this.isBstHelper(root.left,min,root.data-1) && this.isBstHelper(root.right,root.data+1,max)))
//     }
   
// }
// let bst=new binarySearchTree()
// console.log(bst.insert(40));
// console.log(bst.insert(45));
// console.log(bst.insert(50));
// console.log(bst.insert(42));
// console.log(bst.insert(30));
// console.log(bst.insert(32));
// console.log(bst.insert(28));
// bst.inorder()
// console.log(bst.isBst());


// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         this.shiftDown(i)
//     }
//     shiftDown(currentIndex){
//         let endIdx=this.heap.length-1
//         let leftIdx=this.leftChild(currentIndex)
//         while(leftIdx<=endIdx){
//             let rightIdx=this.rightChild(currentIndex)
//             let swapidx
//             if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 swapidx=rightIdx
//             }else{
//                 swapidx=leftIdx
//             }
//             if(this.heap[currentIndex]>this.heap[swapidx]){
//                 this.swap(currentIndex,swapidx)
//                 currentIndex=swapidx
//                 leftIdx=this.leftChild(currentIndex)
//             }else{

//                 return
//             }
//         }
//     }

    // shiftUp(currentIndex){
    //     parentIDx=this.parent(currentIndex)
    //     while(currentIndex>0 && this.heap[parentIDx]>this.heap[currentIndex]){
    //         this.swap(currentIndex,parentIDx)
    //         currentIndex=parentIDx
    //         parentIDx=this.parent(currentIndex)
    //     }
    // }

    // insert(value) {
    //           this.heap.push(value);
    //           this.shiftUp(this.heap.length - 1);
    //         }

    // contains(data){
    //     let curentdata=this.root
    //     while(curentdata){
    //         if(data<curentdata.data)
    //         curentdata=curentdata.left
    //         else if(data>curentdata.data)
    //         curentdata=curentdata.right
    //         else
    //         return true

    //     }
    //     return false
    // }

    // remove(){
    //     this.swap(0,this.heap.length-1)
    //     this.heap.pop()
    //     this.shiftDown(0)
    // }

//   shiftUp(currentIndex){
//     let prarentIdx=this.parent(currentIndex)
//     while(currentIndex>0 && this.heap[prarentIdx]>this.heap[currentIndex]){
//         this.swap(currentIndex,prarentIdx)
//         currentIndex=prarentIdx
//         prarentIdx=this.parent(currentIndex)
//     }
//   }

//   remove(){
//     this.swap(0,this.heap.length-1)
//     this.heap.pop()
//     this.shiftDown(0)
//   }


//     insert(data){
//         this.heap.push(data)
//         this.shiftUp(this.heap.length-1)
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
//     parent(i){
//         return(Math.floor((i-1)/2))
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }

// let array=[50,55,25,15,60,30]
// let heap=new minHeap()
// heap.buildHeap(array)
// heap.display()
// heap.remove()
// console.log('.................');
// heap.display()
// console.log('.................');
// heap.insert(5)
// heap.display()


// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
// buildHeap(array){
//     this.heap=[...array]
//     for(let i=this.parent(this.heap.length-1);i>=0;i--)
//     this.shifDown(i)
// }
// shifDown(currentIndex){
//     let endIdx=this.heap.length-1
//     let leftIdx=this.leftChild(currentIndex)
//     while(leftIdx<=endIdx ){
//         let rightIdx=this.rightChild(currentIndex)
//        let swapidx
//        if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//         swapidx=rightIdx
//        }else{
//         swapidx=leftIdx
//        }
//        if(this.heap[currentIndex]>this.heap[swapidx]){
//         this.swap(currentIndex,swapidx)
//         currentIndex=swapidx
//         leftIdx=this.leftChild(currentIndex)
//        }else{
//         return
//        }
//     }
// }
// shifUp(currentIndex){
//     let parentIdx=this.parent(currentIndex)
//     while(currentIndex>0 && this.heap[parentIdx]>this.heap[currentIndex]){
//         this.swap(currentIndex,parentIdx)
//         currentIndex=parentIdx
//         parentIdx=this.parent(currentIndex)
//     }
// }

// remove(){
//     this.swap(0,this.heap.length-1)
//     this.heap.pop()
//     this.shifDown(0)
// }

// insert(data){
//     this.heap.push(data)
//     this.shifUp(this.heap.length-1)
// }

// display(){
//     for(let i=0;i<this.heap.length;i++)
//     console.log(this.heap[i]);
// }
// parent(i){
//     return (Math.floor((i-1)/2))
// }
// leftChild(i){
// return i*2+1
// }
// rightChild(i){
// return i*2+2
// }
// swap(i,j){
//     [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
// }
// }

// let array=[123,34,5,67,7,4,1]
// let heap=new minHeap()
// heap.buildHeap(array)
// heap.display()
// heap.remove()
// heap.display()
// console.log('..................');
// heap.insert(100)
// heap.display()


// shiftDown(currentindex){
//     let endIdx=this.heap.length-1
//     let leftIdx=leftChild(currentindex)
//     while(leftIdx<=currentindex){
//         let rightIdx=rightChild(currentindex)
//         let swapidx
//         if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//             swapidx=rightIdx
//         }else{
//             swapidx=leftIdx
//         }
//         if(this.heap[currentindex]>this.heap[swapidx]){
//             swap(currentindex,swapidx)
//             currentindex=swapidx
//             leftIdx=leftChild(currentindex)
//         }else{
//             return
//         }
//     }
// }
// shiftUp(currentindex){
//     parentIdx=parent(currentindex)
//     while(currentindex>0 && this.heap[parentIdx]>this.heap[currentindex]){
//         swap(currentindex,parentIdx)

//     currentindex=parentIdx
//     parentIdx=parent(currentindex)
//     }
// }

// insert(data){
//     this.heap.push(data)
//     this.shiftUp(this.heap.length-1)
// }
// remove(){
//     swap(0,this.heap.length-1)
//     this.heap.pop()
//     this.shiftDown(0)
// }

// Contain(data){
//     let curentdata=this.root
//     while(curentdata!=null){
//         if(data<curentdata.data){
//             curentdata=curentdata.left
//         }else if(data>curentdata.data){
//             curentdata=curentdata.right
//         }else{
//             return true
//         }
//     }
//     return false
// }


// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let curentdata=this.root
//         if(curentdata==null){
//             this.root=new node(data)
//             return this.root.data+'.....root'
//         }else{
//             while(true){
//                 if(data<curentdata.data){
//                     if(curentdata.left==null){
//                         curentdata.left=new node(data)
//                         return curentdata.left.data+'.....left'
//                     }else{
//                         curentdata=curentdata.left
//                     }
//                 }else{
//                     if(curentdata.right==null){
//                         curentdata.right=new node(data)
//                         return curentdata.right.data+'.....right'
//                     }else{
//                         curentdata=curentdata.right
//                     }
//                 }
//             }
//         }
//     }
//     contains(data){
//         let curentdata=this.root
//         while(curentdata!=null){
//             if(data<curentdata.data){
//                 curentdata=curentdata.left
//             }else if(data>curentdata.data){
//                 curentdata=curentdata.right
//             }else{
//                 return true
//             }
//         }
//         return false
//     }

//     isbst(){
//         return this.isbstHelper(this.root,0,Infinity)
//     }
//     isbstHelper(root,min,max)
//     {
//         if(root==null){

//             return true
//         }
//         if(root.data<min || root.data>max){

//             return false
//         }
//         return(this.isbstHelper(root.left,min,root.data-1)&& this.isbstHelper(root.right,root.data+1,max))
        
//     }
//     inOrder(){
//         this.inOrderHelper(this.root)
//     }
//     inOrderHelper(curentdata){
//         if(curentdata!=null){
//             this.inOrderHelper(curentdata.left)
//             console.log(curentdata.data);
//             this.inOrderHelper(curentdata.right)
//         }
//     }
// }

// let bst=new binarySearchTree()
// console.log(bst.insert(-40));
// console.log(bst.insert(30));
// console.log(bst.insert(35));
// console.log(bst.insert(29));
// console.log(bst.insert(50));
// console.log(bst.insert(48));
// console.log(bst.insert(52));
// bst.inOrder()
// console.log(bst.isbst());



// class minHeap{
// constructor(){
//     this.heap=[]
// }
// buildHeap(array){
//     this.heap=[...array]
//     for(let i=this.parent(this.heap.length-1);i>=0;i--){
//         this.shiftDown(i)
//     }

// }
// shiftDown(currentIndex){
//     let endIdx=this.heap.length-1
//     let leftIdx=this.leftChild(currentIndex)
//     while(leftIdx<=endIdx){
//         let rightIdx=this.rightChild(currentIndex)
//         let swapidx
//         if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//             swapidx=rightIdx
//         }else{
//             swapidx=leftIdx
//         }
//         if(this.heap[currentIndex]>this.heap[swapidx]){
//             this.swap(currentIndex,swapidx)
//             currentIndex=swapidx
//             leftIdx=this.leftChild(currentIndex)
//         }else{
//             return
//         }
//     }
// }

// shiftUp(currentIndex){
//     let parentIdx=this.parent(currentIndex)
//     while(currentIndex>0 && this.heap[parentIdx]>this.heap[currentIndex])
//     {
//         this.swap(currentIndex,parentIdx)
//         currentIndex=parentIdx
//         parentIdx=this.parent(currentIndex)
//     }
// }


// insert(data){
//     this.heap.push(data)
//     this.shiftUp(this.heap.length-1)
// }
// remove(){
//     this.swap(0,this.heap.length-1)
//     this.heap.pop()
//     this.shiftDown(0)
// }


// display(){
//     for(let i=0;i<this.heap.length;i++)
//     console.log(this.heap[i]);
// }
// parent(i){
//     return (Math.floor((i-1)/2))
// }
// leftChild(i){
//     return i*2+1
// }
// rightChild(i){
//     return i*2+2
// }
// swap(i,j){
//     [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
// }
// }
// let array=[12,32,43,5,1,8]
// let heap=new minHeap()
// heap.buildHeap(array)
// heap.display()
// console.log('.................');
// heap.insert(30)
// heap.display()

// console.log('.................');
// heap.remove()
// heap.display()

//....................................Trie............................................

// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(str){
//         this.root=new trienode()
//         this.endsymbol='*'
//         this.poppulateSubstring(str)
//     }
//     poppulateSubstring(str){
//         for(let i=0;i<str.length;i++){
//             this.insertSublist(i,str)
//         }
//     }
//     insertSublist(index,str){
//         let node=this.root
//         for(let i=index;i<str.length;i++){
//             let letter=str.charAt(i)

//             if(!node.children.has(letter)){
//                 node.children.set(letter,new trienode())
//             }
//             node=node.children.get(letter)
//         }
//         node.children.set(this.endSymbol,null)
//     }
// }

// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }

// class trie{
//     constructor(str){
//         this.root=new trienode()
//         this.endsymbol='*'
//         this.poppulatesubstring(str)
//     }
//     poppulatesubstring(str){
//         for(let i=0;i<str.length;i++){
//             this.insertsublist(i,str)
//         }
//     }
//     insertsublist(index,str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new trienode())
//             }
//             node=node.children.get(letter)

//         }
//         node.children.set(this.endsymbol,null)
//     }
// }

// class TrieNode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(str){
//         this.root=new TrieNode()
//         this.endSymbol='*'
//         this.poppulatesuffixstring(str)
//     }
//     poppulatesuffixstring(str){
//         for(let i=0;i<str.length;i++){
//             this.insertsubstring(i,str)
//         }
//     }
//     insertsubstring(index,str){
//         let node =this.root
//         for(let i=index;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new TrieNode())
//             }
//             node=node.children.get(letter)
//         }
//         node.children.set(this.endSymbol,null)

//     }
// }

// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(str){
//         this.root=new trienode()
//         this.endSymbol='*'
//         this.poppulatesuffixtrie(str)
//     }
//     poppulatesuffixtrie(str){
//         for(let i=0;i<str.length;i++){
//             this.insertsubstring(i,str)
//         }
//     }
//     insertsubstring(index,str){
//         let node=this.root
//         for(let i=index;i<str.length;i++){
//                 let letter=str.charAt(i)
//                 if(!node.children.has(letter)){
//                     node.children.set(letter,new trienode())
//                 }
//                 node=node.children.get(letter)
//         }
//         node.children.set(this.endSymbol,null)
//     }
//     contain(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 return false
//             }
//             node=node.children.get(letter)
//         }
//         return node.children.has(this.endSymbol)
//     }
// }
// const tri=new trie('tree')
// console.log(tri.contain('ree'));


// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(str){
//         this.root=new trienode()
//         this.endSymbol='*'
//         this.poppulateSuffixtrie(str)
//     }
//     poppulateSuffixtrie(str){
//         for(let i=0;i<str.length;i++)
//         this.insertsubstring(i,str)
//     }
//     insertsubstring(index,str){
//         let node=this.root
//         for(let i=index;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new trienode())
//             }
//             node=node.children.get(letter)
//         }
//         node.children.set(this.endSymbol,null)
//     }

//     contain(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter =str.charAt(i)
//             if(!node.children.has(letter)){
//                 return false
//             }
//             node=node.children.get(letter)
//         }
//         return node.children.has(this.endSymbol)
//     }
// }
// let str=new trie('tree')
// console.log(str.contain('e'));


// class trienode{
//     constructor(){
//         this.childrean=new Map()
//     }
// }
// class trie{
//     constructor(str){
//         this.root=new trienode()
//         this.endsymbol='*'
//         this.poppulatesuffixtrie(str)
//     }
//     poppulatesuffixtrie(str){
//         for(let i=0;i<str.length;i++){
//             this.insertsubstring(i,str)
//         }
//     }
//     insertsubstring(index,str){
//         let node=this.root
//         for(let i=index;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.childrean.has(letter)){
//                 node.childrean.set(letter,new trienode())
//             }
//             node=node.childrean.get(letter)
//         }
//         node.childrean.set(this.endsymbol,null)
//     }

//     contain(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.childrean.has(letter)){

//                 return false
//             }
//             node=node.childrean.get(letter)
//         }
//         return node.childrean.has(this.endsymbol)
//     }

// }
// let tr=new trie('tree')
// console.log(tr.contain('e'));

// class node{
//     constructor(data){
//  this.data=data
//  this.left=null
//  this.right=null        
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let curentdata=this.root
//         if(curentdata==null){
//             this.root=new node(data)
//             return this.root.data+'.....root'
//         }else{
//             while(true){
//                 if(data<curentdata.data){
//                     if(curentdata.left==null){
//                         curentdata.left=new node(data)
//                         return curentdata.left.data+'.....left'
//                     }else{
//                         curentdata=curentdata.left
//                     }
//                 }else{
//                     if(curentdata.right==null){
//                         curentdata.right=new node(data)
//                         return curentdata.right.data+'.....right'
//                     }else{
//                         curentdata=curentdata.right
//                     }
//                 }
//             }
//         }
//     }
//     inorder(){
//         this.inorderHelper(this.root)
//     }

//     inorderHelper(curentdata){
        
//         if(curentdata!=null){
//             this.inorderHelper(curentdata.left)
//             console.log(curentdata.data);
//             this.inorderHelper(curentdata.right)
//         }
//     }
//     contain(data){
//         let curentdata=this.root
//         while(curentdata!=null){
//             if(data<curentdata.data){
//                 curentdata=curentdata.left
//             }else if(data>curentdata.data){
//                 curentdata=curentdata.right

//             }  else{
//                 return true
//             }
//         }
//         return false
//     }

//     isbst(){
//        return this.isbstHelper(this.root,0,Infinity)
//     }
//     isbstHelper(root,min,max){
//         if(root==null)
//         return true
//         if(root.data<min || root.data>max)
//         return false
//         return(this.isbstHelper(root.left,min,root.data-1) && this.isbstHelper(root.right,root.data+1,max))
//     }
// }let tree=new binarySearchTree()
// console.log(tree.insert(-40));
// console.log(tree.insert(30));
// console.log(tree.insert(42));
// console.log(tree.insert(41));
// tree.inorder()
// console.log(tree.isbst());
// console.log(tree.contain(0));


// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(str){
//         this.root=new trienode()
//         this.endSymbol='*'
//         this.poppulatesuffixtrie(str)
//     }
//     poppulatesuffixtrie(str){
//         for(let i=0;i<str.length;i++){

//             this.insertsubstring(i,str)
//         }
//     }
//     insertsubstring(index,str){
//         let node=this.root
//         for(let i=index;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new trienode())
//             }
//             node=node.children.get(letter)
//         }
//         node.children.set(this.endSymbol,null)
//     }
//     contain(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter =str.charAt(i)
//             if(!node.children.has(letter)){
//                 return false
//             }
//             node=node.children.get(letter)
//         }
//        return node.children.has(this.endSymbol)
//     }
// }
// let tr=new trie('tree')
// console.log(tr.contain('tre'));


// class minHeap{
//     constructor(){
//         this.heap=null
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         this.shiftDown(i)


//     }
//     shiftDown(currentIndex){
//         let endIdx=this.heap.length-1
//         let leftIdx=this.leftChild(currentIndex)
//         while(leftIdx<=endIdx){
//             let rightIdx=this.rightChild(currentIndex)
//             let swapidx
//             if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 swapidx=rightIdx
//             }else{
//                 swapidx=leftIdx
//             }if(this.heap[currentIndex]>this.heap[swapidx]){
//                 this.swap(currentIndex,swapidx)
//                 currentIndex=swapidx
//                 leftIdx=this.leftChild(currentIndex)

//             }else{
//                 return
//             }
//         }
//     }
//     shiftUp(currentIndex){
//         let parentIdx=this.parent(currentIndex)
//         while(currentIndex>0 && this.heap[parentIdx]>this.heap[currentIndex]){
//             this.swap(currentIndex,parentIdx)

//             currentIndex=parentIdx
//             parentIdx=this.parent(currentIndex)
//         }
//     }

//     insert(data){
//         this.heap.push(data)
//         this.shiftUp(this.heap.length-1)
//     }

//     remove()
//     {
//         this.swap(0,this.heap.length-1)
//         this.heap.pop()
//         this.shiftDown(0)
//     }
//     print(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
//     parent(i){
//         return (Math.floor((i-1)/2))
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }
// let array=[12,34,45,76,3,6,9,5]
// let heap=new minHeap()
// heap.buildHeap(array)
// heap.print()
// console.log('...........');
// heap.insert(1)
// heap.print()
// console.log('...........');
// heap.remove()
// heap.print()

// .............bst tree...................
// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let curentdata=this.root
//         if(curentdata==null){
//             this.root=new node(data)
//             return this.root.data+'.....root'
//         }else{
//             while(true){
//                 if(data<curentdata.data){
//                     if(curentdata.left==null)
//                     {
//                         curentdata.left=new node(data)
//                         return curentdata.left.data+'.....left'
//                     }else
//                     curentdata=curentdata.left
//                 }else{
//                     if(curentdata.right==null){
//                         curentdata.right=new node(data)
//                         return curentdata.right.data+'......right'
//                     }else
//                     curentdata=curentdata.right
//                 }
//             }
//         }
//     }
//     inorder(){
//         this.inorderHelper(this.root)
//     }
//     inorderHelper(curentdata){
//         if(curentdata!=null){
//             this.inorderHelper(curentdata.left)
//             console.log(curentdata.data);
//             this.inorderHelper(curentdata.right)
//         }
//     }
//     preorder(){
//         this.preorderHelper(this.root)
//     }
//     preorderHelper(curentdata){
//         if(curentdata!=null){
//             console.log(curentdata.data);
//             this.preorderHelper(curentdata.left)
//             this.preorderHelper(curentdata.right)
//         }
//     }
//     postorder(){
//         this.postorderHelper(this.root)
//     }
//     postorderHelper(curentdata){
//         if(curentdata!=null){
//             this.postorderHelper(curentdata.left)
//             this.postorderHelper(curentdata.right)
//             console.log(curentdata.data);
//         }
//     }
//     contain(data){
//         let curentdata=this.root
//         while(curentdata!=null){
//             if(data<curentdata.data)
//             curentdata=curentdata.left
//             else if(data>curentdata.data)
//             curentdata=curentdata.right
//             else
//             return true
//         }
//         return false
//     }
//     isBst(){
//        return this.isBstHelper(this.root,0,Infinity)
//     }
//     isBstHelper(root,min,max){
//         if(root==null)
//         return true
//         if(root.data<min || root.data>max )
//         return false
//         return(this.isBstHelper(root.left,min,root.data-1) && this.isBstHelper(root.right,root.data+1,max))
//     }
// }

// let tree=new binarySearchTree()
// console.log(tree.insert(40));
// console.log(tree.insert(30));
// console.log(tree.insert(35));
// console.log(tree.insert(28));
// console.log(tree.insert(48));
// console.log(tree.insert(45));
// console.log(tree.insert(52));
// tree.inorder()
// console.log('.......');
// tree.postorder()
// console.log('.......');
// tree.preorder()
// console.log('.......');
// console.log(tree.isBst());
// console.log(tree.contain(0));

// ...............heap minheap.............

// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         this.shiftDown(i)
//     }
//     shiftDown(currentIndex){
//         let endIdx=this.heap.length-1
//         let leftIdx=this.leftChild(currentIndex)
//         while(leftIdx<=endIdx){
//             let rightIdx=this.rightChild(currentIndex)
//             let swapidx
//             if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){

//                 swapidx=rightIdx
//             }
//             else{

//                 swapidx=leftIdx
//             }
//             if(this.heap[currentIndex]>this.heap[swapidx])
//             {
//                 this.swap(currentIndex,swapidx)
//                 currentIndex=swapidx
//                 leftIdx=this.leftChild(currentIndex)
//             }else{

//                 return
//             }
//         }
//     }
//     shiftUp(currentIndex){
//         let parentIdx=this.parent(currentIndex)
//         while(currentIndex > 0 && this.heap[parentIdx]>this.heap[currentIndex]){
//             this.swap(currentIndex,parentIdx)
//             currentIndex=parentIdx
//             parentIdx=this.parent(currentIndex)
//         }
//     }
//     insert(data){
//         this.heap.push(data)
//         this.shiftUp(this.heap.length-1)
//     }
//     remove(){
//         this.swap(0,this.heap.length-1)
//         this.heap.pop()
//         this.shiftDown(0)
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//     [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }
// let array=[10,5,8]
// let heap=new minHeap()
// heap.buildHeap(array)
// heap.display()
// // heap.display()
// console.log('.............');
// // heap.remove()
// // heap.display()
// console.log('.............');
// heap.insert(3)
// heap.insert(1)
// heap.display()

// ..............trie.............

// class TrieNode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(str){
//         this.root=new TrieNode()
//         this.endsymbol='*'
//         this.poppulatesuffixtrie(str)
//     }
//     poppulatesuffixtrie(str){
//         for(let i=0;i<str.length;i++)
//        this.insertString(i,str)
//     }
//     insertString(index,str){
//         let node=this.root
//         for(let i=index;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new TrieNode())
//             }node=node.children.get(letter)
//         }node.children.set(this.endsymbol,null)
//     }
//     contain(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 return false
//             }
//             node=node.children.get(letter)
//         }return node.children.has(this.endsymbol)
//     }
// }
// let tr=new trie('tree')
// console.log(tr.contain('tre'));



// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){

//             this.shiftDown(i)
//         }

//     }
//     shiftDown(currentindex){
//         let endIdx=this.heap.length-1
//         let leftIdx=this.leftChild(currentindex)
//         while(leftIdx<=endIdx){
//             let rightIdx=this.rightChild(currentindex)
//             let swapidx
//             if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 swapidx=rightIdx
//             }else{
//                 swapidx=leftIdx
//             }if(this.heap[currentindex]>this.heap[swapidx]){
//                 this.swap(currentindex,swapidx)
//                 currentindex=swapidx
//                 leftIdx=this.leftChild(currentindex)
//             }else{
//                 return
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//        [this.heap[i],this.heap[j]] =[ this.heap[j],this.heap[i]]
       
//     }
// }
// let array=[12,3,9,8,2,1]
// let he=new minHeap()
// he.buildHeap(array)
// he.display()

// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(str){
//         this.root=new trienode()
//         this.endSymbol='*'
//         this.poppulateSuffixTrie(str)
//     }
//     poppulateSuffixTrie(str){
//         for(let i=0;i<str.length;i++)
//         this.insertSubstring(i,str)
//     }
//     insertSubstring(index,str){
//         let node=this.root
//         for(let i=index;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new trienode())
//         }node=node.children.get(letter)
//     }
//     node.children.set(this.endSymbol,null)
// }
// contain(str){
//     let node=this.root
//     for(let i=0;i<str.length;i++){
//         let letter=str.charAt(i)
//         if(!node.children.has(letter)){
//             return false
//         }node=node.children.get(letter)
//     }return node.children.has(this.endSymbol)
// }
// }
// let tr=new trie('tree')
// console.log(tr.contain('tree'));


// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(array){
//         this.heap=[...array]
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         this.shiftDown(i)

//     }
//     shiftDown(curentdata){
//         let endIdx=this.heap.length-1
//         let leftIdx=this.leftChild(curentdata)
//         while(leftIdx<=endIdx){
//             let rightIdx=this.rightChild(curentdata)
//             let swapidx
//             if(rightIdx<=endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
//                 swapidx=rightIdx
//             }else{
//                 swapidx=leftIdx
//             }
//             if(this.heap[curentdata]>this.heap[swapidx]){
//                 this.swap(curentdata,swapidx)
//                 curentdata=swapidx
//                 leftIdx=this.leftChild(curentdata)
//             }else{
//                 return
//             }
//         }
//     }

//     shiftUp(currentIndex){
//         let parentIDx=this.parent(currentIndex)
//         while(currentIndex>0 && this.heap[parentIDx]>this.heap[currentIndex]){
//             this.swap(currentIndex,parentIDx)
//             currentIndex=parentIDx
//             parentIDx=this.parent(currentIndex)
//         }
//     }
//     insert(data){
//         this.heap.push(data)
//         this.shiftUp(this.heap.length-1)
//     }
//     remove(){
//         this.swap(0,this.heap.length-1)
//         this.heap.pop()
//         this.shiftDown(0)
//     }
//     print(){
//         for(let i=0;i<this.heap.length;i++)
//         console.log(this.heap[i]);
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return i*2+1
//     }
//     rightChild(i){
//         return i*2+2
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }
// let array=[13,34,56,9,1,67]
// let heap=new minHeap()
// heap.buildHeap(array)
// heap.print()
// console.log('......................');
// heap.remove()
// heap.print()
// console.log('......................');
// heap.insert(2)
// heap.print()
// // console.log('......................');

// class trienode{
// constructor(){
//     this.children=new Map()
// }
// }
// class trie{
//     constructor(str){
//         this.root=new trienode()
//         this.endSymbol='*'
//         this.populatesuffixtrie(str)
//     }
//     populatesuffixtrie(str){
//         for(let i=0;i<str.length;i++)
//         this.insertsubstring(i,str)
//     }
//     insertsubstring(index,str){
//         let node=this.root
//         for(let i=index;i<str.length;i++){
//             let letter=str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new trienode())
//             }node=node.children.get(letter)
//     }node.children.set(this.endSymbol,null)
// }
// contain(str){
//     let node =this.root
//     for(let i=0;i<str.length;i++){
//         let letter=str.charAt(i)
//         if(!node.children.has(letter)){
//             return false
//         }node=node.children.get(letter)
//     }return node.children.has(this.endSymbol)
// }
// }
// let tr=new trie('tree')
// console.log(tr.contain('ree'));


class node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }

}
class binarySearchtree{
    constructor(){
        this.root=null
    }
    insert(data){
        let currentdata=this.root

        if(currentdata==null){
            this.root=new node(data)
            return this.root.data+'...root'
        }else{
            while(true){
                if(data<currentdata.data){
                    if(currentdata.left==null){
                        currentdata.left=new node(data)
                        return currentdata.left.data+'...left'
                    }else{
                        currentdata=currentdata.left
                    }
                }else{
                    if(currentdata.right==null){
                        currentdata.right=new node(data)
                        return currentdata.right.data+'...right'
                    }else{
                        currentdata=currentdata.right
                    }
                }
            }
        }
    }

    contain(data){
        let curentdata=this.root
        while(curentdata!=null){
            if(data<curentdata.data){
                curentdata=curentdata.left
            }
            else if(data<curentdata.data){
                curentdata=curentdata.left
            }else{
                return true
            }
        }
        return false
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

isBst(){
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

let tr=new binarySearchtree()
console.log(tr.insert(40));
console.log(tr.insert(30));
console.log(tr.insert(32));
console.log(tr.insert(28));
console.log(tr.insert(58));
console.log(tr.insert(50));
console.log(tr.insert(42));
tr.inorder()
console.log(tr.contain(50));
console.log(tr.isBst());