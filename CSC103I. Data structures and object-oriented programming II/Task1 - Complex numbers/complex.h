/*
 * Complex.h
 *
 * class for working with complex numbers
 */

#ifndef COMPLEX_H_
#define COMPLEX_H_

#include <iostream>
#include <string>
#define TYPE int
using namespace std;

class Complex {

    friend istream& operator>>(istream &s, Complex &com);
    friend ostream& operator<<(ostream &s, const Complex &com);

    public:
        Complex(TYPE, TYPE);
        operator double() const;
        operator long() const;
        Complex& operator=(const Complex &c);
        Complex& operator+=(const Complex &c);
        Complex& operator-=(const Complex &c);
        Complex& operator*=(const Complex &c);
        Complex& operator/=(const Complex &c);
        Complex operator+(const Complex &c) const;
        Complex operator-(const Complex &c) const;
        Complex operator*(const Complex &c) const;
        Complex operator/(const Complex &c) const;
        bool operator==(const Complex &c) const;
        bool operator!=(const Complex &c) const;
	TYPE getReal() const;
	TYPE getImaginary() const;
    private:
        TYPE real;
        TYPE imaginary;
};

#endif
