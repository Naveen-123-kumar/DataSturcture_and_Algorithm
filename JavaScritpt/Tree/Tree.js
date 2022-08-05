class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null;
    }
}
class BinaryTree{
    constructor(){
        this.root=null
    }
insertData(data){
    var newNode=new Node(data);
    if(this.root==null){
        this.root=newNode;
    }
    else{
        this.insertNode(this.root,newNode)
    }
}
insertNode(node,newNode){
    if(newNode.data<node.data){
        if(node.left==null){
            node.left=newNode
        }
        else{
            return this.insertNode(node.left,newNode)
        }
    }
    else{
        if(node.right==null){
            node.right=newNode
        }
        else{
            return this.insertNode(node.right,newNode)
        }
    }
}

remove(data){
    this.root=this.removeNode(this.root,data)
}
removeNode(node,data){
    if(node==null){
        return null;
    }

    else if(data < node.data){
            node.left=this.removeNode(node.left,data)
            return node;
    }
    else if(data>node.data)
    {
        node.right=this.removeNode(node.right,data)
        return node;
    }
    else{
        if(root.left===null && root.right===null){
            node=null;
            return node;
        }
        else if(root.left===null){
            node=node.right
            return node
        }
        else if(root.right===null){
            node=node.left
            return node
        }
        else{
            let tem=this.findMin(root.right)
            node.data=tem.data
            node.right=this.removeNode(node.right,tem.data);
            return node;
        }
    }
}
findMin(node){
    let current=node.left
    while(current.left!=null){
        current=current.left
    }
    return current.data;
}
Search(node,data){
    if(node==null){
        return null;
    }
    else if(data<node.data){
        return this.Search(node.left,data)
    }
    else if(data>node.data){
        return this.Search(node.right,data)
    }
    else{
        return node
    }
}
inorder(node){
    if(node!==null){
        this.inorder(node.left)
        console.log(node.data)
        this.inorder(node.right)
    }
}
preorder(node){
    if(node!==null){
        console.log(node.data)
        this.inorder(node.left)
        this.inorder(node.right)
    }
}
postorder(node){
    if(node!==null){
        this.inorder(node.left)
        this.inorder(node.right)
        console.log(node.data)
    }
}
getRootNode(){
    return this.root
}

}
var bst=new  BinaryTree();
bst.insertData(10)
bst.insertData(20)
bst.insertData(1)
bst.insertData(28)
bst.insertData(101)
bst.insertData(210)
bst.insertData(1025)
bst.insertData(240)
var root=bst.getRootNode()
console.log("The inorder of given tree is:-")

bst.inorder(root)
console.log("The preorder of given tree is:-")
bst.preorder(root)