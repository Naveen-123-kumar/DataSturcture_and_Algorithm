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
void printData(Node *head){
    Node *tem=head;
    while(tem!=NULL){
        cout<<tem->data<<" ";
        tem=tem->next;
    }
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
    printData(head);


}