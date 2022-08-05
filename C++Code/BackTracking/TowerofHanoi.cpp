#include<iostream>
using namespace std;
void hanoi(int n,char a,char b,char c){
	if(n==0){
		return;
	}
	else{
		hanoi(n-1,a,c,b);
		cout<<"Move disc "<<n<<" from disc "<<a<<" to disc "<<b<<endl;
		hanoi(n-1,b,a,c);
	}
}
int main(){
	int n=3;
	hanoi(n,'a','b','c');
	return 0;
}



























// #include<iostream>
// using namespace std;
// void towerOfHanoi(int n, char from_rod,
// 					char to_rod, char aux_rod)
// {
// 	if (n == 0)
// 	{
// 		return;
// 	}
// 	towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
// 	cout << "Move disk " << n << " from rod " << from_rod <<" to rod " << to_rod << endl;
// 	towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
// }
// int main()
// {
// 	int n = 4; 
// 	towerOfHanoi(n, 'A', 'C', 'B'); 
// 	return 0;
// }

