require 'rubygems'
require 'pp'

import java.util.concurrent.Callable

class CalcTask
  include Callable

  attr_accessor :thread_num

  def initialize(tree, i, time)
    @tree = tree
    @thread_num = i
    @time_started = time
  end

  def call
    result = evaluate_parse_tree(@tree)
    now = Time.now
    time = now - @time_started
    #pp "Thread #{@thread_num} finishes for #{time}"

    [@thread_num, result]
  end

  private

  def evaluate_parse_tree(parse_tree)
    case parse_tree[0]
      when :lit
        return parse_tree[1]
      when :call
        meth = parse_tree[2]
        if [:+, :*, :-, :/].include? meth
          val = evaluate_parse_tree parse_tree[1]
          arglist = evaluate_parse_tree parse_tree[3]
          return val.send(meth, *arglist)
        else
          throw 'Unsafe'
        end
    end
  end

end