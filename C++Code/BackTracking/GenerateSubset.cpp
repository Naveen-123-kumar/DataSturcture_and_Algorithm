#include<iostream>
using namespace std;
void subset(string s,string current=" ",int i=0){
    int n=s.length();
    if(n==i){
        cout<<current<<endl;
        return;
    }
    else{
        subset(s,current,i+1);
        subset(s,current+s[i],i+1);

    }

}
int main(){
    subset("abc");
    return 0;

}





















// #include<iostream>
// using namespace std;
// void subset(string s,string current="",int i=0){
// 	int n=s.length();
//     if(i==n){
//         cout << current << endl;
//         return;
//     }
//     subset(s,current,i+1);
//     subset(s,current+s[i],i+1);  
// }
// int main(){
//     subset("abc");
//     return 0;
// }
// CPP program to generate power set
// #include<iostream>
// using namespace std;
// void powerSet(string str, int index = -1,
// 			string curr = "")
// {
// 	int n = str.length();
// 	if (index == n)
// 		return;
// 	cout << curr << "\n";
// 	for (int i = index + 1; i < n; i++) {
// 		curr += str[i];
// 		powerSet(str, i, curr);
// 		// Once all subsets beginning with
// 		// initial "curr" are printed, remove
// 		// last character to consider a different
// 		// prefix of subsets.
// 		curr.erase(curr.size() - 1);
// 	}
// 	return;
// }
// // Driver code
// int main()
// {
// 	string str = "abc";
// 	powerSet(str);
// 	return 0;
// }
