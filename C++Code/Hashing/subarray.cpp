#include <iostream>
#include<unordered_set>
using namespace std;
int sub_array(int arr[], int n, int sum)
{
    unordered_set<int> s;
    int preSum=0;
    for(int i=0;i<n;i++){
        preSum=preSum+arr[i];
        if(s.find(preSum)!=s.end()){
            return true;
        }
        if(preSum==0){
            return true;
        }
        s.insert(arr[i]);
    }
    return false;

}
int main()
{
    int arr1[] = {2, 3, 4, -7, 5, 4};
    int n1 = sizeof(arr1) / sizeof(arr1[0]);
    int sum = 0;
    cout<<sub_array(arr1, n1, sum)<<endl;
}