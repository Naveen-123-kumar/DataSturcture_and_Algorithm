class Node{
    constructor(element){
        this.element=element
        this.left=null
        this.right=null

    }
}
class BinaryTree{
    constructor(){
        this.root=null
    }
    insert(data){
        var newNode=new Node(data);
        if(this.root===null){
            this.root=newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.data<root.data){
            if(root.left==null){
                root.left=newNode
            }
            else{
                return this.insertNode(root.left,newNode)
            }
        }
        else{
            if(root.right==null){
                root.right=newNode
            }
            else{
                return this.insertNode(root.right,newNode)
            }
        }
    }
  
    remove(data){
        this.root=removeNode(this.root,data)
    }

    removeNode(root,data){
        if(root.left==null && root.right==null){
            root=null
            return root
        }
        else if(root==null){
            return null;

        }
        else if(data<root.data)
        {
            root.left=this.removeNode(root.left,data)
            return root
        }
        else if(data>root.data){
            root.right=this.removeNode(root.right,data)
            return root;
        }
        else{
        
            let min=this.FindMin(root.right)
            root.data=min.data
            root.right=this.removeNode(root.right,min.data)
            return root;

        }

    }
    FindMin(root)
    {
        let tem=root.left
        while(tem.left!=null){
            tem=tem.left
        }
        return tem.data
    }
    Search(root,data){
        if(root==null){
            return null
        }
        else if(data<root.data){
            return this.Search(root.left,data)
        }
        else if(data> root.data){
            return this.Search(root.right,data)
        }
        else{
            return root;
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
    findRoot(){
        return this.root
    }

}
let bst =new BinaryTree()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
var root=bst.findRoot();
// bst.remove(10)
bst.Search(20)
bst.preorder(root)
