

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




class minheap{
    constructor(){
        this.heap=[]
    }
    buildHeap(array){
        this.heap=[...array]
        for(let i=this.parent(this.heap.length-1);i>=0;i--)
        this.shiftDown(i)
    }
    shiftDown(currentIndex){
        let endidx=this.heap.length-1
        let leftIdx=this.leftChild(currentIndex)
        while(leftIdx<=endidx){
            let rightIdx=this.rightChild(currentIndex)
            let swapidx
            if(rightIdx<=endidx && this.heap[rightIdx]<this.heap[leftIdx])
            swapidx=rightIdx
            else
            swapidx=leftIdx
            if(this.heap[currentIndex]>this.heap[swapidx]){
                this.swap(currentIndex,swapidx)
                currentIndex=swapidx
                leftIdx=this.leftChild(currentIndex)
            }else
            return
        }
    }

    shiftup(currentIndex){
        let parentIdx=this.parent(currentIndex)
        while(currentIndex>0 && this.heap[parentIdx]>this.heap[currentIndex]){
            this.swap(currentIndex,parentIdx)
            currentIndex=parentIdx
            parentIdx=this.parent(currentIndex)
        }
    }

    remove(){
        this.swap(0,this.heap.length-1)
        this.heap.pop()
        this.shiftDown(0)
    }
    print(){
        for(let i=0;i<this.heap.length;i++)
        console.log(this.heap[i]);
    }
    parent(i){
        return(Math.floor((i-1)/2))
    }
    leftChild(i){
        return i*2+1
    }
    rightChild(i){
        return i*2+2
    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
}



      
  
      
       let array=[213,3,6,7,8,1,43]
       let heap=new minheap()
       heap.buildHeap(array)
       heap.print()
       console.log('.......................');
       heap.remove()
       heap.print()