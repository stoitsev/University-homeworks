require 'rubygems'
require 'ruby_parser'
require 'pp'

class Parser

  def read file_name
    file = File.open(file_name, "r")
    
    file.read
  end

  def parse_file file_name
    content = read file_name

    parse_str content
  end

  def parse_str str
    RubyParser.new.parse str
  end
end