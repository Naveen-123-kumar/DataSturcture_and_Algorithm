#include<iostream>
#include<unordered_set>
using namespace std;
int countDistinct(int arr[],int n){
    unordered_set<int> s;
    for(int i=0;i<n;i++){
        s.insert(arr[i]);
    }
    s.insert(50);
    s.erase(50);
   if(s.find(50)==s.end()){
    return false;
   }
   else{
    return true;

   }
}
int main(){
    int arr[] = { 6, 10, 5, 4, 9, 120, 4, 6, 10 };
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << countDistinct(arr, n);
    return 0;
}