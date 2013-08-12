require 'rubygems'
require 'pp'

require './src/Parser'
require './src/CalcTask'

import java.util.concurrent.FutureTask
import java.util.concurrent.LinkedBlockingQueue
import java.util.concurrent.ThreadPoolExecutor
import java.util.concurrent.TimeUnit

import java.util.ArrayList

class Array
  def depth
    map {|element| element.depth + 1 }.max
  end
end

class Object
  def depth
    0
  end
end

class Calculator

  attr_accessor :input_file

  def initialize(input_file, tasks_num, output_file)
    @input_file = input_file
    @tasks_num = tasks_num
    @output_file = output_file
    @tree_depth = 0
    @launch_threads_at = 0

    @executor = ThreadPoolExecutor.new(@tasks_num, # core_pool_treads
                                  @tasks_num, # max_pool_threads
                                  60, # keep_alive_time
                                  TimeUnit::SECONDS,
                                  LinkedBlockingQueue.new)
    @thread_i = 0
    @tasks = []
    @result = {}
  end

  def solve
    parser = Parser.new 
    tree = parser.parse_file @input_file
    start = Time.now
    result = calculate tree
    now = Time.now
    time = now - start
    pp "Calculation finish for #{time}"

    write_solution result.to_s
  end

  private

  def calculate(tree)
    puts "Starting #{@tasks_num} threads"
    @tree_depth = tree.depth
    @launch_threads_at = Math.log2(@tasks_num).to_i
    new_tree = evaluate_parse_tree tree

    @calc_result = {}
    @tasks.each do |t|
      res = t.get
      th_num = res[0]
      th_val = res[1]
      @calc_result[th_num] = th_val;
    end
    @executor.shutdown()

    evaluate_parse_tree_normal new_tree
  end

  def evaluate_parse_tree(parse_tree)
    level = @tree_depth - parse_tree.depth
    case parse_tree[0]
      when :lit
        return parse_tree[1]
      when :call
        meth = parse_tree[2]
        if [:+, :*, :-, :/].include? meth
          if level === @launch_threads_at
            time = Time.now
            th_num = @thread_i
            task = FutureTask.new(CalcTask.new parse_tree, th_num, time)
            @thread_i += 1
            @executor.execute(task)
            @tasks << task
            return [:thread, th_num]
          else
            first = evaluate_parse_tree parse_tree[1]
            second = evaluate_parse_tree parse_tree[3]
            return [:call, first, meth, second]
          end
        else
          throw 'Unsafe'
        end
    end
  end

  def evaluate_parse_tree_normal(parse_tree)
    case parse_tree[0]
      when :thread
        return @calc_result[parse_tree[1]]
      when :lit
        return parse_tree[1]
      when :call
        meth = parse_tree[2]
        if [:+, :*, :-, :/].include? meth
          val = evaluate_parse_tree_normal parse_tree[1]
          arglist = evaluate_parse_tree_normal parse_tree[3]
          return val.send(meth, *arglist)
        else
          throw 'Unsafe'
        end
    end
  end

  def write_solution solution
    output = File.open(@output_file, "w")
    output << solution
    output.close
  end

end