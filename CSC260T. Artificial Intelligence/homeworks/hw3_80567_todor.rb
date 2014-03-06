# Nikolay Stoitsev
# Ruby 1.9.3
# CSP for solving N Queens Problem

n = 8

class BoardWithQueens
  def initialize(n)
    if n < 4
      raise 'n must be greater than 3'
    end
    @size = n
    @queens = []
  end

  def place_queens_initially
    index = 0
    @size.times do
      @queens[index] = rand(0...@size)
      index += 1
    end
  end

  def new_board
    Array.new(@size){
      Array.new(@size).map { |item| 
        '_'
      }
    }
  end

  def draw_board
    board = new_board
    @queens.each_with_index { |y, x|
      board[y][x] = '*'
    }
    board_to_str board
  end

  def board_to_str board
    board.map { |row|
      row * ' '
    }.join("\n")
  end

  def solve
    place_queens_initially
    iterate_board
  end

  def count_conflicts_for_queen index
    x = index
    y = @queens[x]
    conflicts = 0
    @queens.each_with_index { |other_y, other_x|
      if other_x != x and (y == other_y or ((x - other_x).abs == (y - other_y).abs))
        conflicts += 1
      end
    }
    conflicts
  end

  def get_conflicts
    Array.new(@size).each_with_index.map { |el, index|
      count_conflicts_for_queen index
    }
  end

  def get_conflicts_with_other_queens index
    x = index
    y = @queens[x]
    Array.new(@size).each_with_index.map { |el, new_y|
      conflicts = 0
      @queens.each_with_index { |other_y, other_x|
        if other_x != x and (new_y == other_y or ((x - other_x).abs == (new_y - other_y).abs))
          conflicts += 1
        end
      }
      conflicts
    }
  end

  def pick conflicts_arr
    positions = conflicts_arr.each_with_index.select { |element, index| element > 0 }.map { |arr| arr[1] }
    positions.sample
  end

  def pick_min conflicts_arr
    conflicts_arr.each_with_index.min[1]
  end

  def iterate_board
    iterations = 1000000
    iterations.times do
      conflicts = get_conflicts
      if conflicts.inject(:+) == 0
        return draw_board
      end
      queen_to_move = pick conflicts
      conflicts_with = get_conflicts_with_other_queens queen_to_move
      queen_to_switch_with = pick_min conflicts_with
      if conflicts[queen_to_move] < conflicts[queen_to_switch_with]
        @queens[queen_to_move] = @queens[queen_to_switch_with] 
      else
        @queens[queen_to_move] = rand(0...@size)
      end
    end
    "No solution found in #{iterations} iterations"
  end

  def show_board_with_queens
    solve
  end
end

puts BoardWithQueens.new(n).show_board_with_queens
