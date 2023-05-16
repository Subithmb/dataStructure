
// adding element in an array 
// function addElements(pos,val){
//     arr=[1,2,3,4,5];

// for(i=arr.length-1;i>=pos-1;i--){
//     arr[i+1]=arr[i]
// }
// arr[pos-1]=val;
// }
// addElements(5,130);
// console.log(arr);

// deletin array value by position

// function deleteval(pos){
//     var arr=[1,2,3,4,5,6,7];
//     for(i=pos-1;i<arr.length;i++){
//         arr[i]=arr[i+1];
//     }
//    arr.length=arr.length-1;
//     return arr
// }
// console.log(deleteval(4)
// );

// adding to last

// function addlast(val){
//     var arr=[1,2,3,4,5,6];
//     arr[arr.length]=val;
//  return arr
// }
// console.log(addlast(100));


// adding to first
// function addfirst(val){
//     arr=[1,2,3,4,5];
//     for(i=arr.length-1;i>=0;i--){
//         arr[i+1]=arr[i]
//     }
//      arr[0]=val
//     return arr
// }
// console.log(addfirst(100));

// duplicate elements

// function dup(){
//     arr=[1,2,3,4,5,0];
//     for(i=0;i<arr.length-1;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 return arr[i];
//             }}}
   
//         return "no-duplicate"
//   }
// console.log(dup());



//  linked list  

// class node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }}
// class linked{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//     }
//     dataadding(data)
// {
//     let add=new node(data);
//     if(this.head==null){
//         this.head=add;
//     }else{
//         this.tail.next=add
//     }
//     this.tail=add
// }
// display(){
//     let curr=this.head
//     while(curr){
//         console.log(curr.data);
//         curr=curr.next
//  }}}
// let list=new linked()
// list.dataadding(10)
// list.dataadding(20)
// list.dataadding(30)
// list.dataadding(100)
// list.display()



// linear search


// const arr = [1,2,5,8,10,20,25];
// const target  = 20
// function find(arr,target){

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i+1;
//         }
//     }
//     return "invalid number not in list";
// }

// const result = find(arr,target)
// console.log(result);









// class node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null;
//         this.tail=null
//     }

//     // add to list 

//     addtolist(data){
//         let add=new node(data)
//         if(this.head==null){
//             this.head=add
//         }
//         else{
//             this.tail.next=add
//         }
//         this.tail=add
//     }

//     // add to begin  

//     addtobegin(data){
//         let addval =new node(data)
//         addval.next=this.head
//         this.head=addval
//     }


//     // delete node

//     nodedelete(value){
//         let samhead=this.head
//         if(samhead.data==value){
//             this.head=samhead.next
//             return
//         }
//         while(samhead.next){
//             if(samhead.next.data==value){
//                 samhead.next=samhead.next.next
//             }
//             if(samhead.next==null){
//                 this.tail=samhead
//                 return
//             }
//             samhead=samhead.next
//         }
//     }



//     // add after


//     addafter(nextTo, data) {
//         let newNod = new node(data);
//         let temp = this.head;
//         while (temp !== null && temp.data !== nextTo) {
//             temp = temp.next;
//         }
//         if (temp === null) {
//             return;
//         }
//         if (temp === this.tail) {
//             this.tail.next = newNod;
//             this.tail = newNod;
//             return;
//         }
//         newNod.next = temp.next;
//         temp.next = newNod;
//     }
    
// // add before

// addbefore(before,data){
//     let nw=new node(data)
//     let hd=this.head
//     if(before==hd.data){
//         nw.next=this.head
//         this.head=nw
//         return
//     }
//     while(hd.next){
//         if(hd.next.data== before){
//             nw.next=hd.next
//             hd.next=nw
//             return
//         }
//         hd=hd.next
//     }
// }

// // linked list add by poisition

// addbyposition(pos,data){
//     let i=1
//     let temp=this.head
//     let newnode=new node(data)
   
//     while(temp){
//      if(i==pos){
//         newnode.next=temp.next
//         temp.next=newnode
//         return
//      }
//      if(pos==this.tail){
//         this.tail.next=newnode
//         this.tail=newnode
//         return
//      }
//      i++;
//      temp=temp.next
//     }
//     console.log('not found');
    
// }

//     //  dsisplay items 

//     display(){
//         let temp=this.head
//         while(temp){
//             console.log(temp.data);
//             temp=temp.next
//         } }

// }


// let newdata=new linkedlist()

// newdata.addtolist(10)
// newdata.addtolist(20)
// newdata.addtolist(30)
// newdata.addtolist(300)
// newdata.display()
// console.log('sdfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgds');
// newdata.addtobegin(1000)
// newdata.nodedelete(20)
// newdata.addafter(300,500)
// newdata.addbefore(10,500)
// newdata.display()
// console.log(newdata.head.data,'dfgdfgdgfdgdfgfdgfgfdgbfhgfhgfghfd',newdata.tail.data);

// newdata.addbyposition(2,222)
// newdata.display()


// const arr = [1,2,5,8,10,20,25];

// function binary(arr,target) {
//     let starts = 0
//     let end  = arr.length
    
//     while(starts <= end){
//         let mid = Math.floor((starts+end)/2)
//         if(target == arr[mid]){
//             return mid
//         }
//         if(target > arr[mid])(
//              starts = mid+1
//         )
//         if(target < arr[mid]){
//             end = mid-1
//         }
//         }
//         return -1
// }

// console.log(binary(arr,20));


// binary search

// arr=[1,2,3,4,5,6,7,8,9,10]

// function binaryu(arr,tar){
//     let right=arr.length-1
//     let left=0
//     let mid
//     for(i=0;i<arr.length;i++){
//         mid=Math.floor((left+right)/2)

//         if(tar==mid){
//             return mid
//         }
//         if(mid<tar){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
// }

// a=binaryu(arr,9)
// console.log(a);






// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class list{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     addtolist(data){
//         let newnode=new node(data)
//         if(this.head==null){
//             this.head=newnode
//         }else{
//             this.tail.next=newnode
//         }
//         this.tail=newnode
//     }


//     addtoposition(pos,data){
//         let newnode=new node(data)
//         let temp=this.head
//         let i=1
//         if(i==pos){
//             newnode.next=this.head
//             this.head=newnode
//             return
//         }
//         while(temp.next){
//             if(i==pos){
//                 newnode.next=temp.next
//                 temp.next=newnode
//                 return
//             }
//             i++
//             temp=temp.next
//         }
//         console.log('invalid');
//     }

//     aadbefore(before,data){
//         let newnode=new node(data)
//         let temp=this.head
//         if(temp.data==before){
//             newnode.next=this.head
//             this.head=newnode
//         }
//         while(temp.next){
//             if(temp.next.data==before){
//                 newnode.next=temp.next
//                 temp.next=newnode
//                 return
//             }
//             temp=temp.next
//         }
//     }

// deletenode(value){
//     let temp=this.head
//     if(temp.data==value){
//         this.head=temp.next
//         return
//     }
//     while(temp.next){
//         if(temp.next.data==value){
//             if(temp.next==this.tail){
//                 this.tail=temp
//                 return
//             }
//             temp.next=temp.next.next
//             return
//         }
//         temp=temp.next

//     }

// }


//     display(){
//         let temp=this.head
//         while(temp){
//             console.log(temp.data);
//             temp=temp.next
//         }
//     }
// }


// let addlist=new list()
// addlist.addtolist(10)
// addlist.addtolist(20)
// addlist.addtolist(30)
// addlist.addtolist(40)
// addlist.addtolist(50)
// addlist.display()
// console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,');
// addlist.deletenode(30)
// addlist.display()

// console.log(addlist.head.data,'head','.............................',addlist.tail.data,'tail');



// function binary(arr,tar){
//     let left=0
//     let right=arr.length-1
//     let mid
//     for(i=0;i<arr.length;i++){
//         mid =Math.floor((left+right)/2)
//         if(arr[mid]==tar){
//             return mid+1
//         }
//         if(arr[mid]<=tar){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
//     return -1
// }

// arr=[10,20,30,40,50]
// let result=binary(arr,50)
// console.log(result);



// arr=[10,20,30,40,50,60]
// let l=0
// let r=arr.length-1
// let tar=10
// let value=recBinary(arr,l,r,tar)
// console.log(value);


// function recBinary(arr,l,r,x){
//     if(l<=r){
//         mid=Math.floor((l+r)/2)
//         if(arr[mid]==x){
//             return mid+1
//         }
//         if(arr[mid]<x){
//             return recBinary(arr,mid+1,r,x)
//         }else{
//             return recBinary(arr,l,mid-1,x)
//         }
//     }
//     return -1
// }


// function findtrue(arr){
//     let x=0
//     let y=0
//     for(i=0;i<arr.length;i++){
//         if(i%2==0){
//             if(arr[i]=='{'){
//                 x++
//             }else{
//                 return 'false'
//             }
//         }else{
//             if(arr[i]=='}'){
//                 y++
//             }else{
//                 return 'false'
//             }
//         }
//     }
//     if(x==y){
//         return 'true'
//     }else{
//         return 'false'
//     }
// }


// arr=['{','}','{','}','{']
// let res=findtrue(arr)

// console.log(res);


// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class list{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     addtolist(data){
//         let newnode=new node(data)
//         if(this.head==null){
//             this.head=newnode
//         }else{
//             this.tail.next=newnode
//         }this.tail=newnode
//     }

//     addtomid(data){
//         let newnode1=new node(data)
//         let temp=this.head
//         let i=0
//         let count=1
//         while(temp){
//             i++
//             temp=temp.next
//         }
//         let mid=parseInt(i/2)
//         let temp1=this.head
//         while(temp1){
           
//             if(mid==count){
               
//                 newnode1.next=temp1.next
//                 temp1.next=newnode1
//                 return
//             }
//             count++
            
//             temp1=temp1.next

//         }
//     }

//     headchange(data){
//         let temp=this.head
//         let newnode=new node(data)
//         while(temp){
//             newnode.next=this.head
//             this.head=newnode
//             return
//         }
//     }

//     addafter(after,data){
//         let temp=this.head
//         let newnode=new node(data)
//         while(temp){
//             if(temp.data==after){
//                 if(temp==this.tail){
//                     this.tail.next=newnode
//                     this.tail=newnode
//                     return

//                 }
//                 newnode.next=temp.next
//                 temp.next=newnode
//                 return
//             }
//             temp=temp.next
//         }
//     }


//     addbefore(before,data){
//         let temp=this.head
//         let newnode=new node(data)
//         if(temp.data==before){
//             newnode.next=this.head
//             this.head=newnode
//             return
//         }
//         while(temp.next){
//             if(temp.next.data==before){
//                 newnode.next=temp.next
//                 temp.next=newnode
//                 return
//             }
//             temp=temp.next
//         }
//     }

//     delete(value){
//         let temp=this.head
//         if(temp.data==value){
//             this.head=temp.next
//             return
//         }
//         while(temp.next){
//             if(temp.next.data==value){
//                 temp.next=temp.next.next
               
//             }
//             if(temp.next==null){
              
//                 this.tail=temp
//                 return
//             }
//             temp=temp.next
//         }
//     }

//     display(){
//         let temp=this.head
//         while(temp){
//             console.log(temp.data);
//             temp=temp.next
//         }
//     }

// }


// let nodes=new list()

// nodes.addtolist(10)
// nodes.addtolist(100)
// nodes.addtolist(10)
// nodes.addtolist(40)
// nodes.addtolist(10)
// nodes.addtolist(10)
// nodes.addtolist(108)
// nodes.addtolist(102)
// nodes.display()
// console.log('........................................');
// nodes.delete(40)
// nodes.display()
// console.log('.............',nodes.head.data,'head...........................',nodes.tail.data,'tail');



// arr=[1,2,3,4,5]
// function arrayins(arr,pos,newval){
//     if(arr.length==pos){
//         arr[arr.length]=newval
//         return arr
//     }
//     for(i=arr.length-1;i>pos-1;i--){
//         arr[i+1]=arr[i];
//         arr[i]=newval
//     }
    
 
//     return arr
// }
// let a=delarr(arr,1)
// console.log(a);


// function delarr(arr,pos){
//     for(i=pos-1;i<arr.length;i++){
       
//             arr[i]=arr[i+1]
            
//         }
//         arr.length=arr.length-1
//         return arr
// }


// function arrRev(arr){

//     for(i=0,j=arr.length-1;i<j;i++,j--){
//         var temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//     }
//     return arr

// }

// function adde(arr,pos,val){
//     for(i=arr.length-1;i>pos-1;i--){
//         arr[i+1]=arr[i]
//         arr[i]=val
//     }
//     return arr
// }
// function del(arr,pos){
//     for(i=pos-1;i<arr.length-1;i++){
//         arr[i]=arr[i+1]
        
//     }
//     arr.length=arr.length-1
//     return arr
// }
// arr=[1,2,3,4,5,6,7]
// let res=del(arr,7)
// console.log(res);

// function binary(arr,tar){
//     let left=0
//     let right=arr.length-1
//     let mid
//     for(i=0;i<arr.length;i++){
//         mid =Math.floor((left+right)/2)
//         if(arr[mid]==tar){
//             return mid+1
//         }
//         if(arr[mid]<=tar){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
//     return -1
// }
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































