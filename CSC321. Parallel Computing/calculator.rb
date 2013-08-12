#!/usr/bin/env ruby

require 'rubygems'
require 'clamp'
require 'pp'

require './src/CalculatorGUI'
require './src/Calculator'

class CalculatorCommand < Clamp::Command

  option ["-q", "--quiet"], :flag, "does not start GUI"
  option ["-t", "--tasks"], "N", "starts N threads", :default => 1 do |s|
    Integer(s)
  end
  option ["-o", "--output"], "FILE", "writes the result to FILE", :default => 'output'
  option ["-f", "--file"], "FILE", "read the input from FILE"

  def execute
    calculator = Calculator.new(file, tasks, output)

    if not quiet?
      gui = CalculatorGUI.new calculator
      gui.show
    else
      calculator.solve
    end
  end

end

CalculatorCommand.run
