#include <iostream>
#include <string>
#include <exception>
using namespace std;
#include "complex.h"

Complex::Complex(TYPE a, TYPE b)
{
	real = a;
	imaginary = b;
}

TYPE Complex::getReal() const
{
    return real;
}

TYPE Complex::getImaginary() const
{
    return imaginary;
}

ostream& operator<<(ostream &s, const Complex &com)
{
    return s << com.real << " + " << com.imaginary << "i";
}

Complex Complex::operator+(const Complex &c) const 
{
    return Complex(real + c.getReal(), imaginary + c.getImaginary());
}

Complex Complex::operator-(const Complex &c) const 
{
    return Complex(real - c.getReal(), imaginary - c.getImaginary());
}

Complex Complex::operator*(const Complex &c) const 
{
    return Complex(real*c.getReal() - imaginary*c.getImaginary(),
                    imaginary*c.getReal() + real*c.getImaginary());
}


Complex Complex::operator/(const Complex &c) const 
{
    return Complex((real*c.getReal() + imaginary*c.getImaginary()) / 
                    (c.getReal() * c.getReal() - c.getImaginary() * c.getImaginary()),
                    imaginary*c.getReal() - real*c.getImaginary());
}

bool Complex::operator==(const Complex &c) const {
    return (real == c.getReal()) && (imaginary == c.getImaginary());
}

bool Complex::operator!=(const Complex &c) const {
    return (real != c.getReal()) || (imaginary != c.getImaginary());
}
 
Complex& Complex::operator=(const Complex &c) {
    if (this != &c) {
        real = c.getReal();
        imaginary = c.getImaginary();
    }
    return *this;
}
 
