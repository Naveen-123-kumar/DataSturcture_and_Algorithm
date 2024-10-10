#include <iostream>
using namespace std;

int findStr_Length(string s)
{
    int n;
    n = s.length();
    return n;        
}

int main()
{
    string str = "naveen";
    int number = findStr_Length(str);
    cout << "Size of string = " << number << endl;
    return 0;
}
