#include<iostream>
using namespace std;
struct insertNodeAtEnd
{
    int data;
    insertNodeAtEnd *next;
    insertNodeAtEnd(int x){
        data=x;
        next=NULL;
    }
};
insertNodeAtEnd *insertAtEnd(insertNodeAtEnd *head,int num){
    insertNodeAtEnd *tem=new insertNodeAtEnd(num);
    if(head==NULL){
        return tem;
    }
    insertNodeAtEnd *curr=head;
    while(curr->next!=NULL){
        curr=curr->next;
    }
    curr->next=tem;
    return head;
 
}
void printData(insertNodeAtEnd *head){
    insertNodeAtEnd *tem=head;
    while(tem!=NULL){
        cout<<tem->data<<endl;
        tem=tem->next;
    }
}
insertNodeAtEnd *deleteNode(insertNodeAtEnd *head){
if(head==NULL){
    return NULL;
}
else{
    insertNodeAtEnd *tem=head->next;
    delete head;
    return tem;
}
}
insertNodeAtEnd *deleteNodeFromEnd(insertNodeAtEnd *head){
if(head==NULL){
    return NULL;
}
else{
    insertNodeAtEnd *tem=head->next;
    delete head;
    return tem;
}
}
int main(){
    insertNodeAtEnd *head=NULL;
    head=insertAtEnd(head,20);
    head=insertAtEnd(head,21);
    head=insertAtEnd(head,22);
    head=insertAtEnd(head,23);
    head=deleteNode(head);
    printData(head);

}