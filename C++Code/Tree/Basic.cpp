#include<iostream>
using namespace std;
struct Node
{
    int key;
    Node *left;
    Node *right;
    Node(int k){
        key=k;
        left=right=NULL;
    }
};
void Inorder(Node *root){
    if(root!=NULL){
    cout<<root->key<<endl;
    Inorder(root->left);
    Inorder(root->right);
    }
}
int height(Node *root){
    if(root==NULL){
        return 0;
    }
    else{
        return max(height(root->left),height(root->right)) +1;
    }
}
void printNodeAtHeight(Node *root,int h){
    if(root==NULL){
        return;
    }
    if(h==0){
     cout<<"the balue is"<<root->key<<endl;
    }
    else{
        return printNodeAtHeight(root->left,h-1);
        return printNodeAtHeight(root->right,h-1);
    }
}
int findMax(Node *root){
    if(root==NULL){
        return;
    }
}
int main(){
Node *root=new Node(10);
root->left=new Node(20);
root->right=new Node(30);
root->left->left=new Node(200);
root->right->left=new Node(30);
root->left->right=new Node(20);
root->right->left=new Node(30);
printNodeAtHeight(root,2);
Inorder(root);
int x=height(root);
cout<<"The height of"<<x<<endl;
// cout<<root->left->key<<endl;
}