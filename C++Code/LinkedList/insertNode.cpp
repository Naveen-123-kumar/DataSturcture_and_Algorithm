/*
#include<iostream>
using namespace std;
struct Node{
    int data;
    Node *next;
    Node(int x){
        data=x;
        next=NULL;
    }
};
Node *InsertNode(Node *head,int x){
    Node *tem=new Node(x);
    tem->next=head;
    return tem;
}
void printNode(Node *head){
    cout<<head->data<<" ";
    return printNode(head->next);
}
int main(){
     Node *head=NULL;
     head=InsertNode(head,10);
     head=InsertNode(head,11);
     head=InsertNode(head,12);
     head=InsertNode(head,13);
     printNode(head);
     return 0;
}*/

#include<iostream>
using namespace std;
struct createNode
{
    int data;
    createNode *next;
    createNode(int x){
        data=x;
        next=NULL;
    }
};
createNode *InsertElement(createNode *head,int x){
    createNode *tem=new createNode(x);
    // while (tem!=NULL)
    // {
    //      tem=tem->next;

    // }
    tem->next=head;
    return tem;
}

createNode *insertAtPosition(createNode *head,int num,int position ){
    createNode *tem=new createNode(num);
    if(position==1){
        tem->next=head;
        return tem;
    }
    createNode *curr=head;
    if(curr==NULL){
        return head;
    }
    int i=0;
    while( i <position && curr!=NULL){
        curr=curr->next;
        i++;
    }
    tem->next=curr->next;
    curr->next=tem;
    return head;
}
void print(createNode *head){
    createNode *tem=head;
    while(tem!=NULL){
    cout<<tem->data<<endl;
    tem=tem->next;
    }
}
int main(){
    createNode *head=NULL;
    // createNode *n1=new createNode(10);
    // createNode *n2=new createNode(11);
    // createNode *n3=new createNode(11);


    // n1->next=n2;
    // n2->next=n3;
    head=InsertElement(head,20);
    head=InsertElement(head,21);
    head=InsertElement(head,22);
    head=InsertElement(head,23);
    head=insertAtPosition(head,100,1);
    print(head);
}