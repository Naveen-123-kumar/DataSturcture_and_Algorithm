#include<iostream>
using namespace std;
void SnackPattern(int arr[3][3]){
    int i,j;
    for(i=0;i<3;i++){
        if(i%2==0){
        for(j=0;j<3;j++){
            cout<<arr[i][j]<<' ';
        }
        }
        else{
            for(j=2;j>=0;j--){
                cout<<arr[i][j]<< " ";
            }
        }
    }
}
int main(){
    int arr[3][3]={{1,2,10},{3,4,11},{5,6,12}};
    SnackPattern(arr);
}
// What is typeOf operator
// What is the difference between == && ===
// What is the difference between undefined and null ?
// What is Nan
// What is Functions
// What is Anonymous Functions
// What is JS ?
// What is JS engine and what are different engines available?
// What is the difference between var let and const
// what is temporal dead zone
// what is hoisting ?
// what is arrow functions ?