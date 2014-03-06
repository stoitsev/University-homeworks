# Nikolay Stoitsev
# Ruby 1.9.3
# BFS for path finding in labyrinth

class Matrix
  def initialize(matrix)
    @matrix = matrix
    @queue = []
    @parents = {}
    @visited = []
  end

  def find_path start, finish
    @queue << start
    if self.itter_path finish
      self.rebuild_path start, finish
    else
      puts "No path found"
    end
  end

  def itter_path finish
    if @queue.empty?
      return false
    else
      if self.check_next_vertex_in_queue finish
        return true
      else
        itter_path finish
      end
    end
  end

  def rebuild_path start, finish
    current = finish
    path = []
    until start[:x] == current[:x] and start[:y] == current[:y]
      path.insert(0, {x: current[:x], y: current[:y]})
      currentStr = @parents["#{current[:x]},#{current[:y]}"].split(',')
      current ={x: currentStr[0].to_i, y: currentStr[1].to_i}
    end
    path.insert(0, {x: start[:x], y: start[:y]})
  end

  def get_neighbours x, y
    neighbours = []
    [
                      {x: x, y: y - 1}, 
      {x: x - 1, y: y},                {x: x + 1, y: y},
                      {x: x, y: y + 1}, 
    ].each { |item|
      if item[:y] >= 0 and item[:x] >= 0 and (not @matrix[item[:y]].nil?) and @matrix[item[:y]][item[:x]] == "1"
        @parents["#{item[:x]},#{item[:y]}"] = "#{x},#{y}" if @parents.key("#{item[:x]},#{item[:y]}").nil?
        neighbours << item
      end
    }
    @visited << "#{x},#{y}"
    neighbours
  end

  def visit vertex
    x = vertex[:x]
    y = vertex[:y]
    unless @visited.index("#{x},#{y}").nil?
      return
    end
    @queue += get_neighbours x, y
  end

  def check_next_vertex_in_queue finish
    vertex = @queue.shift
    if vertex[:x] == finish[:x] and vertex[:y] == finish[:y]
      return true
    end
    self.visit vertex
    false
  end
end


def convert_to_array matrix
  matrix.split("\n").map { |line|
    line.split
  }
end

def matrix_to_str matrix
  matrix.map { |row|
    row * ' '
  }.join("\n")
end

def draw_path matrix, path
  path.each { |step|
    matrix[step[:y]][step[:x]] = '*'
  }
  matrix_to_str matrix
end

def find_path matrix, start, finish
  path = Matrix.new(matrix).find_path start, finish
  draw_path matrix, path
end

def solve_problem raw_matrix, start, finish
  matrix = convert_to_array raw_matrix
  solution = find_path matrix, start, finish
end

problem = "1 1 0 1 1 1 1
1 0 0 1 1 1 1
1 1 1 1 1 1 1
1 1 1 0 1 1 1
1 1 1 0 1 1 1
1 1 0 0 1 1 1
1 1 1 1 1 1 1"

puts solve_problem problem, {x: 0, y: 0}, {x: 4, y: 5}
