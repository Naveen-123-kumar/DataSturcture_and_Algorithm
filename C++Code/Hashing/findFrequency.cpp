#include<iostream>
using namespace std;
#include<unordered_map>
void find_frequencies(int arr[],int a){
    unordered_map<int,int> s;
    for(int i=0;i<a;i++){
        s[arr[i]]++;
    }
    for( auto i: s){
        cout<<i.first<<' '<<i.second<<endl;

    }
}
int main(){


int arr[] = { 6, 10, 5, 4, 9, 120, 4, 6, 10 };
    int n = sizeof(arr) / sizeof(arr[0]);
    find_frequencies(arr, n);
    return 0;
    }