// // function array(arr){
// //     for(i=0;i<arr.length;i++)
// //     {count=0
// //         for(j=0;j<arr.length;j++)
// //         {
// //             if(i != j && arr[i]==arr[j]){
// //                 count++
// //                 break
// //             }

            
// //         }
// //         if(count==0){
// //                 return arr[i]
// //         }
// //     }
// // }
// // arr=[1,1,2,3,3,5,5,9]
// // let res=array(arr)
// // console.log(res);


// // bubble sort

// // function bubblesort(arr){

// //     let sorted
// //     do{
// //          sorted=false
// //         for(i=0;i<arr.length;i++){
// //             if(arr[i]>arr[i+1]){
// //                 let temp=arr[i]
// //                 arr[i]=arr[i+1]
// //                 arr[i+1]=temp
// //                 sorted=true
// //             }}

// //     }
// //     while(sorted){
// //         return arr
// //     }}



// // arr=[100,-10000,5,-10,90,1,-5,30,10]
// // let res=bubblesort(arr)
// // // console.log(res);


// //  selection sort

// // function selectionSort(arr){
// //     for(i=0;i<arr.length;i++){
// //         for(j=i+1;j<arr.length;j++){
// //             if(arr[i]>arr[j]){
// //                 let temp=arr[i]
// //                 arr[i]=arr[j]
// //                 arr[j]=temp
// //             }
// //         }
// //     }
// //     return arr
// // }
// // arr=[1,2,7,5,0,-11]
// // let res=selectionSort(arr)
// // console.log(res);

// //  Insertion Sort

// // function Insertion(arr){
// //     for(i=1;i<arr.length;i++){

// //         let val=arr[i];
// //         for(j=i-1;j>=0 && arr[j]>val;j--)
// //          arr[j+1]=arr[j]
        
// //         arr[j+1]=val
// //     }
// //     return arr
// // }

// // arr=[1,0,10,25,3,9,16]
// // let res=Insertion(arr)
// // console.log(res);


// // function selection(arr){
// //     for(i=0;i<arr.length;i++){
// //         for(j=i+1;j<arr.length;j++){
// //             if(arr[i]>arr[j]){
// //                 let temp= arr[i]
// //                 arr[i]=arr[j]
// //                 arr[j]=temp
// //             }

// //         }
// //     }
// //     return arr
// // }

// // arr=[70,04,5,-3,56,78]
// // let res=selection(arr)
// // console.log(res);

// // function selection_sort(arr){
// //     for(let i=0; i<arr.length; i++){
// //         let min_idx = i;
// //         for(let j=i+1; j<arr.length; j++){
// //             if(arr[j] < arr[min_idx]){
// //                 min_idx = j;
// //             }
// //         }
// //         let temp = arr[i];
// //         arr[i] = arr[min_idx];
// //         arr[min_idx] = temp;
// //     }
// //     return arr;
// // }

// // let arr = [70, 4, 5, -3, 56, 78];
// // let res = selection_sort(arr);
// // console.log(res); // Output: [-3, 4, 5, 56, 70, 78]



// // bubble

// // function bubble(arr){
// //     let sorted
// //     do {
// //         sorted=false
// //         for(i=0;i<arr.length;i++){
// //             if(arr[i]>arr[i+1]){
// //                 let temp=arr[i]
// //                 arr[i]=arr[i+1]
// //                 arr[i+1]=temp
// //                 sorted=true
// //             }
// //         }
// //     } while (sorted){
// //         return arr
// //     }
// // }
// // arr=[23,1,6,4,899,12,-5]
// // console.log(bubble(arr));


// // function selection(arr){
// //     for(i=0;i<arr.length;i++){
// //         let value=i
// //         for(j=0;j<arr.length;j++){
// //             if(arr[j]>arr[value]){
// //                 let temp=arr[value]
// //                 arr[value]=arr[j]
// //                 arr[j]=temp
// //             }
// //         }

// //     }
// //     return arr
// // }
// // console.log(selection(arr));

// // function Insertion(arr){
// //     for(i=1;i<arr.length;i++){
// //         let value=arr[i]
// //         for(j=i-1;j>=0 && arr[j]>value;j--)
// //             arr[j+1]=arr[j]
// //             arr[j+1]=value

        
// //     }
// //     return arr
// // }

// // console.log(Insertion(arr));



// // class stack{
// //     constructor(){
// // this.item=[]
// //     }
// //     push(element){
// //         this.items.push(element)
// //     }
// //     pop(){
// //         return this.items.pop()
// //     }
// //     peack(){
// //         return this.items[this.items.length-1]
// //     }
// //     isEmpty(){
// //         return this.item.length===0
// //     }
// //     size(){
// //         return this.items.length
// //     }
// //     print(){
// //         console.log(this.items);
// //     }
// // }


// class Stack {
//     constructor() {
//       this.arr = [];
//     }
  
//     push(e) {
//       this.arr.push(e);
//       return this.arr.length;
//     }
//     pop() {
//       let val = this.arr.pop();
//       return val;
//     }
//     peek() {
//       return this.arr[this.arr.length - 1];
//     }
//     isEmpty() {
//       return !this.arr.length;
//     }
//     size() {
//       return this.arr.length;
//     }
//     print() {
//       return this.arr
//     }
//   }

// // let newstack=new Stack()
// // console.log(newstack.isEmpty());
// // newstack.push(10)
// // newstack.push(20)
// // newstack.push(30)
// // console.log(newstack.print())
// // console.log(newstack.pop());
// // console.log(newstack.print())
// // console.log(newstack.size());
// // console.log(newstack.peek());




// //===================== quick sort====================



// // function partition(a, l, r) {
// //     let pivot = a[l];
// //     let i = l + 1;
// //     let j = r;
  
// //     while (i <= j) {
// //       while (a[i] < pivot) {
// //         i++;
// //       }
// //       while (a[j] > pivot) {
// //         j--;
// //       }
  
// //       if (i <= j) {
// //         let temp = a[i];
// //         a[i] = a[j];
// //         a[j] = temp;
// //         i++;
// //         j--;
// //       }    }
  
// //     let temp = a[l];
// //     a[l] = a[j];
// //     a[j] = temp;
  
// //     return j;
// //   }
  
// //   function quicksort(a, l, r) {
// //     if (l < r) {
// //       let p = partition(a, l, r);
// //       quicksort(a, l, p - 1);
// //       quicksort(a, p + 1, r);
// //     }
// //     return a;
// //   }
  
// //   const array = [5, 2, 7, 4, 9, 3, 6, 12];
// //   let l = 0;
// //   let r = array.length - 1;
  
// //   const sortedArray = quicksort(array, l, r);
// //   console.log(sortedArray);
  
// //==============================merge sort==========================


// // function mergeSort(a,lb,ub){
// //     if(lb<ub){
// //         let mid=Math.floor((lb+ub)/2)

// //         mergeSort(a,lb,mid)
// //         mergeSort(a,mid+1,ub)
// //       merge(a,lb,mid,ub)
// //     }
// // }

// // function merge(a,lb,mid,ub){
// //     let i=lb
// //     let j=mid+1
// //     let k=lb
// //     const b=[]


// //     while(i<=mid&&j<=ub){
// //         if(a[i]<=a[j]){
// //             b[k]=a[i]
// //             i++
// //         }
// //         else{
// //             b[k]=a[j]
// //             j++
// //         }
// //         k++
// //     }

    
// //     while(i<=mid){
// //         b[k]=a[i]
// //         i++
// //         k++
// //     }
// //         while(j<=ub){
// //             b[k]=a[j]
// //             j++
// //             k++
// //         }
    
// //         for(let x=lb;x<=ub;x++){
// //             a[x]=b[x]
// //         }
   
    
   
// // }

// // const array=[5,2,7,8,3,11,6,12]

// // let lb=0
// // let ub=array.length-1

// // mergeSort(array,lb,ub)

// // console.log(array);

// // quick sort

// // function partition(a,l,r){
// //     let pivot=a[l]
// //     let i =l+1
// //     let j=r
// //     while(i<=j){
// //         while(a[i]<pivot)
// //         i++
// //         while(a[j]>pivot)
// //         j--
// //         if(i<=j){
// //             let temp=a[i]
// //             a[i]=a[j]
// //             a[j]=temp
// //             j--
// //             i++
// //         }
// //     }
// //     let temp=a[l]
// //     a[l]=a[j]
// //     a[j]=temp
// //     return j
// // }

// // function quick(a,l,r){
// //     if(l<r){
// //         let p= partition(a,l,r)
// //         quick(a,p+1,r)
// //         quick(a,l,p-1)

// //     }
// //     return a
// // }


// // let a=[465,40,356,35,12,10,5,8]
// // let l=0
// // let r=a.length-1
// // let res=quick(a,l,r)
// // console.log(res);


// // bubble
// // function bubble(arr){
// //     let sorted
// //     do {
// //         sorted=false
// //         for(i=0;i<arr.length;i++){
// //             if(arr[i]>arr[i+1]){
// //                 let temp=arr[i]
// //                 arr[i]=arr[i+1]
// //                 arr[i+1]=temp
// //                 sorted=true
// //             }
// //         }
// //     } while (sorted){
// //         return arr
// //     }
// // }
// // function partition(a, l, r) {
// //     let pivot = a[l];
// //     let i = l + 1;
// //     let j = r;
  
// //     while (i <= j) {
// //       while (a[i] < pivot) {
// //         i++;
// //       }
// //       while (a[j] > pivot) {
// //         j--;
// //       }
  
// //       if (i <= j) {
// //         let temp = a[i];
// //         a[i] = a[j];
// //         a[j] = temp;
// //         i++;
// //         j--;
// //       }
// //     }
  
// //     let temp = a[l];
// //     a[l] = a[j];
// //     a[j] = temp;
  
// //     return j;
// //   }
  
// //   function quicksort(a, l, r) {
// //     if (l < r) {
// //       let p = partition(a, l, r);
// //       quicksort(a, l, p - 1);
// //       quicksort(a, p + 1, r);
// //     }
// //     return a;
// //   }
  
// //   const array = [5, 2, 7, 4, 9, 3, 6, 12];
// //   let l = 0;
// //   let r = array.length - 1;
  
// //   const sortedArray = quicksort(array, l, r);
// //   console.log(sortedArray);
  
// //==============================merge sort==========================


// // function mergeSort(a,lb,ub){
// //     if(lb<ub){
// //         let mid=Math.floor((lb+ub)/2)

// //         mergeSort(a,lb,mid)
// //         mergeSort(a,mid+1,ub)
// //       merge(a,lb,mid,ub)
// //     }
// // }

// // function merge(a,lb,mid,ub){
// //     let i=lb
// //     let j=mid+1
// //     let k=lb
// //     const b=[]
// //     while(i<=mid&&j<=ub){
// //         if(a[i]<=a[j]){
// //             b[k]=a[i]
// //             i++
// //         }
// //         else{
// //             b[k]=a[j]
// //             j++
// //         }
// //         k++
// //     }
// //     while(i<=mid){
// //         b[k]=a[i]
// //         i++
// //         k++
// //     }
// //         while(j<=ub){
// //             b[k]=a[j]
// //             j++
// //             k++
// //         }
    
// //         for(let x=lb;x<=ub;x++){
// //             a[x]=b[x]
// //         }}

// // const array=[5,2,7,8,3,11,6,12]

// // let lb=0
// // let ub=array.length-1

// // mergeSort(array,lb,ub)

// // console.log(array);



// // merge


// // function mergeSort(a,lb,ub){
// //   if(lb<ub){
// //     let mid=Math.floor((lb+ub)/2)
// //     mergeSort(a,lb,mid)
// //     mergeSort(a,mid+1,ub)
// //     merge(a,lb,mid,ub)
// //   }
// // }

// // function merge(a,lb,mid,ub){
// //   let i=lb
// //   let j=mid+1
// //   let k=lb
// //   let b=[]
// //   while(i<=mid && j<=ub){
// //   if(a[i]<a[j])
// //   {
// //     b[k]=a[i]
// //     i++
// //   }else{
// //     b[k]=a[j] 
// //     j++
// //   }
// //   k++
// //   }
// //   while(i<=mid){
// //     b[k]=a[i]
// //     i++
// //     k++
// //   }
// //   while(j<=ub){
// //     b[k]=a[j]
// //     j++
// //     k++
// //   }
// //   for(x=lb;x<=ub;x++)
// //   a[x]=b[x]
 
// // }

// // let a=[123,32,56,78,23,87,1,4,6]
// // let lb=0
// // let ub=a.length-1
// // mergeSort(a,lb,ub)
// // console.log(a);


// function mergeSort(a,lb,ub){
//   if(lb<ub){
//     let mid=Math.floor((lb+ub)/2)
//     mergeSort(a,lb,mid)
//     mergeSort(a,mid+1,ub)
//     merge(a,lb,mid,ub)
//   }
// }

// function merge(a,lb,mid,ub){
//   let i=lb
//   let j=mid+1
//   let k=lb
//   let b=[]
//   while (i<=mid && j<=ub) {
//     if(a[i]<a[j]){
//       b[k]=a[i]
//       i++
//     }else{
//       b[k]=a[j]
//       j++
//     }
//     k++
    
//   }
//   while(i<=mid){
//     b[k]=a[i]
//     i++
//     k++
//   }
//   while(j<=ub){
//     b[k]=a[j]
//     j++
//     k++
//   }
//   for(x=lb;x<=ub;x++)
//   a[x]=b[x]
// }

// let a=[23,43,54,756,67,2,5,8,6]
// let lb=0
// let ub=a.length-1
// mergeSort(a,lb,ub)
// console.log(a);



// function bubble(a){
//   let sorted
//   do {
//     sorted =false
//     for(i=0;i<a.length;i++)
//     {
//       if(a[i]>a[i+1]){
//         let temp=a[i]
//         a[i]=a[i+1]
//         a[i+1]=temp
//         sorted=true
//       }
//     }
//   } while (sorted){
//     return a
//   }
// }
// a=[2342,433,34,65,8,9,54,2,1]
// console.log(bubble(a));


// // function bubble(arr){
// //     let sorted
// //     do {
// //         sorted=false
// //         for(i=0;i<arr.length;i++){
// //             if(arr[i]>arr[i+1]){
// //                 let temp=arr[i]
// //                 arr[i]=arr[i+1]
// //                 arr[i+1]=temp
// //                 sorted=true
// //             }
// //         }
// //     } while (sorted){
// //         return arr
// //     }
// // }
// // arr=[23,1,6,4,899,12,-5]
// // console.log(bubble(arr));

// function insertion(a){
//   for(i=1;i<a.length;i++){
//     let val=a[i]
//     for(j=i-1;j>=0 && a[j]>val;j--)
//     a[j+1]=a[j]
//     a[j+1]=val
//   }
//   return a
// }
// a=[23,34,45,767,87,89,2,1,4]
// console.log(insertion(a));












// class Node{
//   constructor(data) {
//           this.data=data
//           this.next=null
          
//   }
// }
// class Stack{
//   constructor() {
//           this.top=null
//           this.size=0
//   }

//   push(data){

//           const newNode=new Node(data)

//           if(!this.top){
//                   this.top=newNode
//           }
//           else{
//                   newNode.next=this.top
//                   this.top=newNode
//           }
//           this.size++
//   }

//   pop(){
//           if(this.top){

//                   let poped=this.top.data

//                   this.top= this.top.next
//                   return poped
//           }
//           else{
//                   console.log("underflow");
//           }
//   }

//   removeMiddle(){
//           let mid=Math.floor(this.size/2)
//           let count=0

//           let currentNode=this.top
//           while(currentNode){
//                   count++
//                   if(count==mid){
//                           currentNode.next=currentNode.next.next
//                   }
//                   currentNode=currentNode.next
//           }
//   }

//   display(){
//           let currentNode=this.top
//           while(currentNode){
//                   console.log(currentNode.data);
//                   currentNode=currentNode.next
//           }
//   }
// }

// const myStack=new Stack()

// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)

// myStack.display()
// console.log("==========");

// // console.log(myStack.pop(),"poped");
// myStack.removeMiddle()
// console.log("=============");

// myStack.display()

// //================================undo redo===============

// class Stack{
//   constructor() {
//           this.array=[]
//           this.array2=[]
//   }

//   push(data){
//           this.array.push(data)
//   }

//   undo(){
//           this.array2.push(this.array.pop())
//   }

//   redo(){
//           if(this.array2.length>0)
//           this.array.push(this.array2.pop())
//   }

//   pop(){
//           this.array.pop()
//   }

//   display(){
//           console.log(this.array);
//   }
// }

// const myStack=new Stack()

// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)

// myStack.display()

// console.log("--------");

// // myStack.undo()
// myStack.redo()
// myStack.display()




// class Node{
//   constructor(data) {
//           this.data=data
//           this.next=null
          
//   }
// }
// class Stack{
//   constructor() {
//           this.top=null
//           this.size=0
//   }

//   push(data){

//           const newNode=new Node(data)

//           if(this.top==null){
//                   this.top=newNode
//           }
//           else{
//                   newNode.next=this.top
//                   this.top=newNode
//           }
//           this.size++
//   }

//   pop(){
//           if(this.top){

//                   let poped=this.top.data

//                   this.top= this.top.next
//                   return poped
//           }
//           else{
//                   console.log("underflow");
//           }
//   }

 

//   display(){
//           let currentNode=this.top
//           while(currentNode){
//                   console.log(currentNode.data);
//                   currentNode=currentNode.next
//           }
//   }
// }

// class linkedlist{
//   constructor(data){
//     this.data=data
//     this.next=null
//   }
// }
// class stack{
//   constructor(){
//     this.top=null
//   }
//   push(data){
//     let newlinked=new linkedlist(data)
//     if(this.top==null){
//       this.top=newlinked
//     }else{
//       newlinked.next=this.top
//       this.top=newlinked

//     }
//   }
//   pop(){
//     this.top=this.top.next
//   }
//   display(){
//     let temp=this.top
//     while(temp){
//       console.log(temp.data);
//       temp=temp.next
//     }
//   }
// }
// let newstack=new stack()
// newstack.push(10)
// newstack.push(20)
// newstack.push(30)
// newstack.display()
// console.log(newstack.top.data,'top');
// newstack.pop()
// console.log('================');
// newstack.display()
// console.log(newstack.top.data,'top');

// class stack{
//   constructor(){
//     this.array=[]
//      this.array2=[]
//   }
//   push(data){
//     this.array.push(data)
//   }
//   pop(){
//     this.array.pop()
//   }
//   undo(){
//     this.array2.push(this.array.pop())
//   }
//   redo(){
//     this.array.push(this.array2.pop())
//   }

//   secondlarge(){
   
//       let big = -Infinity; 
//       let second = -Infinity; 
      
//       for(let i = 0; i < this.array.length; i++){
//         if(this.array[i] > big){
//           second = big;
//           big = this.array[i]; 
//         }
//         else if(this.array[i]>second && second<big){
//           second=this.array[i]
//       }
      
      
    
//   }
//   console.log('Largest value is', big);
//       console.log('Second largest value is', second);
// }
//   display()
//   {
//     console.log(this.array);
//   }
// }

// let newstack=new stack
// newstack.push(10)
// newstack.push(200)
// newstack.push(80)
// newstack.push(40)
// newstack.push(50)
// newstack.push(90)
// newstack.display()
// console.log('=====================');
// // newstack.pop()
// newstack.display()
// // newstack.undo()
// newstack.display()
// // newstack.redo()
// console.log('=-=================');
// newstack.display()
// newstack.secondlarge()


// merge sort

// function mergeSort(a,lb,ub){
//   if(lb<ub){
//     let mid=Math.floor((lb+ub)/2)
//     mergeSort(a,lb,mid)
//     mergeSort(a,mid+1,ub)
//     merge(a,lb,mid,ub)
//   }
// return a
// }

// function merge(a,lb,mid,ub){
//   let i=lb
//   let j=mid+1
//   let k=lb
//   let b=[]
//   while(i<=mid && j<=ub){
//     if(a[i]<a[j]){
//       b[k]=a[i]
//       i++
//     }
//     else{
//       b[k]=a[j]
//       j++
//     }
//     k++
//   }
//   while(i<=mid){
//     b[k]=a[i]
//     i++
//     k++
//   }
//   while(j<=ub){
//     b[k]=a[j]
//     j++
//     k++
//   }
//   for(let x=lb;x<=ub;x++)
//   a[x]=b[x]
// }

// a=[12,6546,35,48,79,0,9,8,7,1]
// let lb=0
// let ub=a.length-1

// console.log(mergeSort(a,lb,ub));



// .....................................insertion sort


// function insertion(a){
//   for(i=1;i<a.length;i++){
//     let value=a[i]
//     for(j=i-1;j>=0 && a[j]>value;j--)
//     a[j+1]=a[j]
//     a[j+1]=value
//   }
//   return a
// }
// a=[23,32,4,6,3,1]
// console.log(insertion(a));

// function partition(a,l,r){
//   let pivot=a[l]
//   let i=l+1
//   let j=r
//   while(i<=j){
//     while(a[i]<pivot)
//     i++
//     while(a[j]>pivot)
//     j--
//     if(i<=j){
//       let temp=a[i]
//       a[i]=a[j]
//       a[j]=temp
//       j--
//       i++
//     }
//   }
//   let temp=a[l]
//   a[l]=a[j]
//   a[j]=temp
//   return j
// } 

// .......................quicksort

// function quicksort(a,l,r){
//   if(l<r){
//     let p=partition(a,l,r)
//     quicksort(a,p+1,r)
//     quicksort(a,l,p-1)
//   }
//   return a
// }
// a=[123,34,56,78,99,9,8,2,1]
// let l=0
// let r=a.length-1
// console.log(quicksort(a,l,r));

// class stack {
//   constructor(){
//   this.array=[]
//   this.array2=[]
//   }
//   push(data){
//     this.array.push(data)
//   }
//   pop(){
//     if(this.array.length !=0)
//    this.array.pop()
//    else
//    console.log('stack underflow');
  
//   }
//   undo(){
//     this.array2.push(this.array.pop())
//   }
//   redo(){
//     if(this.array2.length<0)
//     this.array.push(this.array2.pop())
//     else
//     console.log('stack underflow');
//   }
//   secondlarge(){
//     let big=-Infinity
//     let second=-Infinity
//     for(let i=0;i<this.array.length;i++){
//       if(this.array[i]>big){
//         second=big
//         big=this.array[i]
//       }
//       else if(second<this.array[i] && second<big){
//         second=this.array[i]
//       }
//     }
//     console.log('second large is ',second);
//   }
//   display(){
//     console.log(this.array);
//   }
// }
// let newstack=new stack()
// newstack.push(10)
// newstack.push(20)
// newstack.push(30)
// newstack.push(40)
// // newstack.pop()
// // newstack.redo()
// newstack.secondlarge()
// newstack.display()

// class node{
//   constructor(data){
//     this.data=data
//     this.next=null
//   }
// }

// .................................stack

// class stack{
//   constructor(){
//     this.top=null
//     this.size=0
//   }
//   push(data){
//     let newnode=new node(data)
//     if(this.top==null)
//     this.top=newnode
//     else{
//       newnode.next=this.top
//       this.top=newnode
//     }
//     this.size++
//   }
//   pop(){
//     if(this.top){
//       this.top=this.top.next
//     }
//   }
//   removemid(){
//     let mid=Math.floor(this.size/2)
//     let i=0;
//     let temp=this.top;
//     while (temp) {
//       i++
//       if(i==mid){
//         var remove=temp.next.data
//         temp.next=temp.next.next
//       }
//       temp=temp.next
//     }
//    console.log('removemid=',remove);
//   }
//   secondlarge(){
//    let big=-Infinity
//    let second=-Infinity
//    let temp=this.top
  
//   while (temp) {
//     if(temp.data>big)
//     big=temp.data
//     else if(temp.data>second )
//     second=temp.data
    
//     temp=temp.next
//   }
   

//    console.log('big=',big);
//    console.log('second big=',second);
//   }
//   display(){
//     let temp=this.top
//     while(temp){
//       console.log(temp.data)
//       temp=temp.next;
//     }
//   }
// }

// let newstack=new stack()
// newstack.push(10)
// newstack.push(20)
// newstack.push(30)
// newstack.push(40)
// newstack.push(50)
// newstack.display()
// // newstack.pop()
// console.log('==================');
// newstack.display()
// console.log('top=',newstack.top.data);
// newstack.removemid()
// newstack.display()
// newstack.secondlarge()


// function selection(a){
//   for(i=0;i<a.length;i++){
//     let min=i
//     for(j=i+1;j<a.length;j++){
//       if(a[j]<a[min])
//       min=j
//     }
//     if(min !=i){
//       let temp=a[i]
//       a[i]=a[min]
//       a[min]=temp
//     }
//   }
//   return a
// }
// a=[12,4,5,3,1,6]
// console.log(selection(a));


// function bubble(a){
//   let sorted
//  do {
//   sorted=false
//   for(i=0;i<a.length;i++){
//     if(a[i]>a[i+1]){
//       let temp=a[i]
//       a[i]=a[i+1]
//       a[i+1]=temp
//       sorted=true

//     }
//   }
  
//  } 
//  while (sorted);
// return a
  
// }
// a=[23,3,4,1,7,5]   
// console.log(bubble(a));
