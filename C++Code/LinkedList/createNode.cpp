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
    /* data */
};
void printNode(createNode *head){
 createNode *tem=head;
 while(tem!=NULL){
    cout<<tem->data<<' ';
    tem=tem->next;
 }
}
int main(){
    createNode *head=new createNode(10);
    createNode *h1=new createNode(20);
    createNode *h2=new createNode(30);
    head->next=h1;
    h1->next=h2;
    printNode(head);
}