#include<iostream>
#include<queue>
using namespace std;
int main(){
    queue<int> q;
    q.push(20);
    q.push(21);
    q.push(22);
    q.push(23);
    q.push(230);
    q.pop();

    cout<<q.back()<<endl;
    cout<<q.front()<<endl;
    // cout<<q.empty()<<endl;

}