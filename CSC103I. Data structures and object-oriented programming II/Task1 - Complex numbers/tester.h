#ifndef TESTER_H_
#define TESTER_H_

#include <iostream>
#include <string>
#include <exception>
using namespace std;
#include "complex.h"

class Tester {
	private:
		int n;
		void testArithmeticOperators(Complex &, Complex &);
		void testBooleanOperators(Complex &, Complex &);
	public:
		Tester();
		void start();
};

#endif
