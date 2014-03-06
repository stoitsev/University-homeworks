# Nikolay Stoitsev
# Ruby 1.9.3
# A* for solving n-puzzle

problem = "6 5 3
2 4 8
7 0 1"

goal = "1 2 3
4 5 6
7 8 0"

class PriorityQueue
  def initialize
    @list = []
  end
  def add(priority, item)
    @list << [priority, @list.length, item]
    @list.sort! {|x,y| 
      [x[0], x[1]] <=> [y[0], y[1]]
    }
    self
  end
  def <<(pritem)
    add(*pritem)
  end
  def next
    @list.shift[2]
  end
  def empty?
    @list.empty?
  end
end

class Board
  def initialize(problem, goal)
    @board = parse_board problem
    @goal = parse_board goal
    @pqueue = PriorityQueue.new
    @visited = {}
    @visited_at = {}
  end

  def parse_board board
    board.split("\n").map { |line|
      line.split.map { |item| item.to_i }
    }
  end

  def get_start
    @board.each_with_index { |row, index|
      element_index = row.index(0)
      if element_index
        return {x: element_index, y: index}
      end
    }
    raise 'No start position found'
  end

  def get_neighbours position, board
    x = position[:x]
    y = position[:y]
    neighbours = []
    [
                      {x: x, y: y - 1}, 
      {x: x - 1, y: y},                {x: x + 1, y: y},
                      {x: x, y: y + 1}, 
    ].each { |item|
      if item[:y] >= 0 and item[:y] < 3 and item[:x] >= 0 and item[:x] < 3 and (not board[item[:y]].nil?) and board[item[:y]][item[:x]] > 0
        neighbours << item
      end
    }
    neighbours
  end

  def get_distance_to_solution board
    distance = 0
    board.each_with_index { |row, y|
      row.each_with_index { |item, x|
        if @goal[y][x] != board[y][x]
          distance += 1 
        end
      }
    }
    distance
  end

  def add_to_queue position, board, cost
    distance = get_distance_to_solution board
    @visited[position] = [] if @visited[position].nil?
    @visited_at[position] = {} if @visited_at[position].nil?
    if @visited[position].index(board).nil? or cost < @visited_at[position][board]
      @pqueue << [distance, [position, board, cost]]
      @visited[position] << board
      @visited_at[position][board] = cost
    end
  end

  def clone_board board
    Marshal.load(Marshal.dump(board))
  end

  def add_boards neighbours, position, board, cost_so_far
    x = position[:x]
    y = position[:y]
    neighbours.each { |neighbour|
      neighbour_x = neighbour[:x]
      neighbour_y = neighbour[:y]
      new_board = clone_board board
      temp = new_board[y][x]
      new_board[y][x] = new_board[neighbour_y][neighbour_x]
      new_board[neighbour_y][neighbour_x] = temp
      add_to_queue neighbour, new_board, cost_so_far + 1
    }
  end

  def step
    unless @pqueue.empty?
      position, board, cost_so_far = @pqueue.next
      if get_distance_to_solution(board) == 0
        puts "found solution with cost #{cost_so_far}"
        exit
      end
      neighbours = get_neighbours position, board
      add_boards neighbours, position, board, cost_so_far
      step
    end
  end

  def solve
    start = get_start
    add_to_queue start, @board, 0
    step
    @pqueue
  end
end

Board.new(problem, goal).solve
