#include <iostream>
#include <string>
#include <exception>
using namespace std;
#include "tester.h"

Tester::Tester()
{
	cout << "Initializing tests" << endl << endl;
}

void Tester::start()
{
	Complex a = Complex(1 , 2);
	Complex b = Complex(3, 4);
	try {
		cout << "a = " << a << endl;
		cout << "b = " << b << endl;
		Complex c = a;
		cout << "a = c = " << c << endl;
	} catch (string str) {
		cout << "Error in creating new complex numbers: " << str << endl;
	}
	Tester::testArithmeticOperators(a, b);
	Tester::testBooleanOperators(a, b);
}

void Tester::testArithmeticOperators(Complex &a, Complex &b)
{
	cout << endl << "Testing arithmetic operators" << endl;
	try {
		cout << "a + b = " << a + b << endl;
		cout << "a - b = " << a - b << endl;
		cout << "a * b = " << a * b << endl;
		cout << "a / b = " << a / b << endl;
	} catch (string str) {
		cout << "Error in executing arithmetic operators: " << str << endl;
	}
}

void Tester::testBooleanOperators(Complex &a, Complex &b)
{
	cout << endl << "Testing boolean operators" << endl;
	try {
		string result = a == b ? "true" : "false";
		cout << "a == b " << result << endl; 
		result = a != b ? "true" : "false";
		cout << "a != b " << result << endl;
	} catch (string str) {
		cout << "Error in boolean operators: " << str << endl;
	}

}
