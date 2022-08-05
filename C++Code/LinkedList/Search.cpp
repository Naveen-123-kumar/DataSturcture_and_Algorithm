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
int search(Node *head,int target){
    if(head==NULL){
        return -1;
    }
    Node *tem=head;
    while(tem!=NULL){
        if(tem->data==target){
            return 1;
            break;
        }
        else{
        tem=tem->next;
        }
    }
    return -1;
}
Node *insertAtPosition(Node *head,int num,int position ){
    Node *tem=new Node(num);
    if(position==1){
        tem->next=head;
        return tem;
    }
    Node *curr=head;
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
int main(){
    Node *head=NULL;
    head=insertAtPosition(head,10,1);
    head=insertAtPosition(head,20,2);
    head=insertAtPosition(head,30,3);
    head=insertAtPosition(head,50,2);
    head=insertAtPosition(head,60,4);
    head=insertAtPosition(head,100,5);
    // head=search(head,30);
    if(search(head,30)==1){
        cout<<"found"<<endl;
    }
}