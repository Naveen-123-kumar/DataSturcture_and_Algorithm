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
void PrintData(Node *head){
    if(head==NULL){
        return;
    }
    cout<<head->data<<' ';
    return PrintData(head->next);
}
int main(){
    Node *head=new Node(10);
    Node *h1=new Node(20);
    Node *h2=new Node(30);
    head->next=h1;
    h1->next=h2;
    PrintData(head);
}