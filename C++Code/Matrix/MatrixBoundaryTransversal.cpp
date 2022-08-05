#include<iostream>
using namespace std;
void Boundary(int arr[3][3]){
        int i,j;
        int x=0;
        int y=0;
        for(i=1;i<3;i++){
            cout<<arr[x][y++]<<" ";
        }
        for(i=1;i<3;i++){
            cout<<arr[x++][y]<<" "; 
        }
         for(i=1;i<3;i++){
            cout<<arr[x][y--]<<" ";
        }
        for(i=1;i<3;i++){
            cout<<arr[x--][y]<<" "; 
        }
}
int main(){
    int arr[3][3]={{1,2,10},{3,4,11},{5,6,12}};
    Boundary(arr);
}