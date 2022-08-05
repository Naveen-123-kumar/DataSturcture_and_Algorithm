#include<iostream>
using namespace std;
int findSquareRoot(int n){
    int tem=n;
    int low=1;
    int high=n;
    int ans=-1;
    while(low<=high){
        int mid=(low+high)/2;
        if(mid*mid==tem){
            return mid;
        }
        else if(mid*mid<tem){
            low=mid+1;
            ans=mid;
        }
        else{
            high=mid-1;

        }
    }
    return ans;
}
int main(){
    int n=25;
    cout<<findSquareRoot(n)<<endl;
}