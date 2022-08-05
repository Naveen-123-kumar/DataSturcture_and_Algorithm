#include<iostream>
using namespace std;
#define m 4
#define n 4
void Boundary(int r,int c,int arr[m][n]){

        int i=0,j=0;
        int x=0;
        int y=0;
        while(0<r && 0<c){
            if(r==1){
                 for(i=0;i<c;i++){
                cout<<arr[x][y++]<<" ";
            }
            }
            else if(c==1){
            for(i=0;i<r;i++){
                cout<<arr[x++][y]<<" ";
            }
            }
            else{

            for(i=0;i<c-1;i++){
                cout<<arr[x][y++]<<" ";
            }
            for(i=0;i<r-1;i++){
                cout<<arr[x++][y]<<" ";
            }
            for(i=0;i<c-1;i++){
                cout<<arr[x][y--]<<" ";
            }
            for(i=0;i<r-1;i++){
                cout<<arr[x--][y]<<" ";
            }
            r=r-2;
            c=c-2;
            x=x+1;
            y=y+1;
            }

        }
      
}
int main(){
    int arr[m][n]={{1,2,10,100},{3,4,11,101},{5,6,12,102},{2,15,84,96}};
    Boundary(m,n,arr);
}