#include<iostream>
using namespace std;
// void printMatrix(int row,int col){
//     int i=1,j;
//         for(j=0;j<col*row;j++){
//             if(j%col==0){
//                 cout<<endl;
//             }
//             cout<<i++<<" ";

//          }
// }
int main(){
    // int row=4;
    // int col=4;
    // printMatrix(row,col);
    int arr[3][3]={{1,2,10},{3,4,11},{5,6,12}};
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
}