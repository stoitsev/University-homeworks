#!/usr/bin/env ruby

def randNum
  #(rand.to_s[2..100].to_i ** 99).to_s
  #rand.to_s[2..4].to_i.to_s
  (rand.to_s[2..100].to_i ** 99).to_s
end

def recur lvl
  if lvl == 14 #14 max
    return randNum
  end

  next_lvl = lvl + 1

  rand1 = recur next_lvl 
  rand2 = recur next_lvl

  symbols = ["+", "*", "-", "/"]

  meth = symbols[rand(3)]

  return "(#{rand1}#{meth}#{rand2})"
end

output = File.open("input.test", "w")
rawStr = recur(0)
str = rawStr[1, rawStr.length - 2]
output << str
output.close
