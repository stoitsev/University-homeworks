# Nikolay Stoitsev
# Ruby 1.9.3
# Genetic algorithm for solving TSP

DISTANCES = [
  [0,466,592,349,313,218,325,93,679,157,353,86,297,71,275,527,211,158,86,278,194,472,426,548,353,293,102,282,614,447,272,488,374],
  [466,0,132,223,568,416,241,493,239,447,203,528,267,471,306,96,476,308,324,341,272,230,294,271,120,349,392,184,183,219,212,178,93],
  [592,132,0,223,532,414,279,619,107,525,335,654,399,561,317,228,430,434,502,306,398,136,200,139,237,465,470,305,51,125,360,90,228],
  [349,223,223,0,350,209,49,360,330,302,209,435,242,338,89,280,250,233,279,124,197,132,103,225,94,292,247,132,256,98,187,139,122],
  [313,568,532,350,0,143,238,324,639,263,521,399,463,302,261,630,102,324,243,226,360,407,374,496,446,459,211,409,556,407,445,448,472],
  [218,416,414,209,143,0,185,229,539,171,378,304,320,207,124,487,41,181,148,108,217,264,231,353,303,316,116,264,413,264,295,305,324],
  [325,241,279,49,238,185,0,336,379,278,219,404,193,314,65,307,226,184,255,100,148,181,152,274,128,243,223,83,305,147,138,188,149],
  [93,493,619,360,324,229,336,0,690,164,380,179,324,22,286,554,222,185,81,289,221,483,437,559,380,320,113,309,629,458,299,499,401],
  [679,239,107,330,639,539,379,690,0,632,442,621,506,668,424,335,537,508,609,413,505,243,340,160,344,572,577,412,72,232,467,197,335],
  [157,447,525,302,263,171,278,164,632,0,370,239,314,142,228,544,164,175,83,231,211,425,379,501,334,310,55,289,567,400,289,441,355],
  [353,203,335,209,521,378,219,380,442,370,0,415,136,358,284,246,417,195,347,319,159,298,371,402,172,226,315,110,386,262,81,280,142],
  [86,528,654,435,399,304,404,179,621,239,415,12,359,157,361,589,297,220,172,364,256,558,512,634,415,208,188,344,705,533,234,559,436],
  [297,267,399,242,463,320,193,324,506,314,136,359,0,302,258,310,361,139,289,293,103,343,345,447,181,90,259,110,448,307,55,325,206],
  [71,471,561,338,302,207,314,22,668,142,358,157,302,0,264,532,200,163,59,267,199,461,415,537,358,298,91,287,603,436,277,477,379],
  [275,306,317,89,261,124,65,286,424,228,284,361,258,264,0,372,159,196,205,35,160,183,150,272,193,259,173,148,345,187,203,228,214],
  [527,96,228,280,630,487,307,554,335,544,246,589,310,532,372,0,528,369,521,407,333,286,350,357,206,400,489,253,279,250,255,242,158],
  [211,476,430,250,102,41,226,222,537,164,417,297,361,200,159,528,0,229,140,124,258,305,272,394,344,357,109,305,463,305,336,346,365],
  [158,308,434,233,324,181,184,185,508,175,195,220,139,163,196,369,229,0,152,231,36,358,336,454,195,135,120,124,485,321,114,339,216],
  [86,324,502,279,243,148,255,81,609,83,347,172,289,59,205,521,140,152,0,208,188,402,356,478,311,287,32,266,544,377,266,418,332],
  [278,341,306,124,226,108,100,289,413,231,319,364,293,267,35,407,124,231,208,0,195,194,148,270,228,294,176,183,339,181,238,222,249],
  [194,272,398,197,360,217,148,221,505,211,159,256,103,199,160,333,258,36,188,195,0,322,300,418,159,99,156,88,449,285,78,303,180],
  [472,230,136,132,407,264,181,483,243,425,298,558,343,461,183,286,305,358,402,194,322,0,64,109,164,394,370,234,169,36,289,52,156],
  [426,294,200,103,374,231,152,437,340,379,371,512,345,415,150,350,272,336,356,148,300,64,0,122,212,395,324,235,233,100,290,116,220],
  [548,271,139,225,496,353,274,559,160,501,402,634,447,537,272,357,394,454,478,270,418,109,122,0,261,490,446,330,88,142,385,115,253],
  [353,120,237,94,446,303,128,380,344,334,172,415,181,358,193,206,344,195,311,228,159,164,212,261,0,231,279,71,270,128,126,146,28],
  [293,349,465,292,459,316,243,320,572,310,226,208,90,298,259,400,357,135,287,294,99,394,395,490,231,0,255,260,498,358,145,275,252],
  [102,392,470,247,211,116,223,113,577,55,315,188,259,91,173,489,109,120,32,176,156,370,324,446,279,255,0,234,512,345,234,386,300],
  [282,184,305,132,409,264,83,309,412,289,110,344,110,287,148,253,305,124,266,183,88,234,235,330,71,260,234,0,338,198,55,215,92],
  [614,183,51,256,556,413,305,629,72,567,386,705,448,603,345,279,463,485,544,339,449,169,233,88,270,498,512,338,0,158,393,123,261],
  [447,219,125,98,407,264,147,458,232,400,262,533,307,436,187,250,305,321,377,181,285,36,100,142,128,358,345,198,158,0,253,41,120],
  [272,212,360,187,445,295,138,299,467,289,81,234,55,277,203,255,336,114,266,238,78,289,290,385,126,145,234,55,393,253,0,270,151],
  [488,178,90,139,448,305,188,499,197,441,280,559,325,477,228,242,346,339,418,222,303,52,116,115,146,275,386,215,123,41,270,0,138],
  [374,93,228,122,472,324,149,401,335,355,142,436,206,379,214,158,365,216,332,249,180,156,220,253,28,252,300,92,261,120,151,138,0],
] # intersection between a row and a column gives the distance between the two cities

CITIES =* (0...DISTANCES.length)

class Individual
  attr_reader :state

  def initialize init_state
    @state = init_state
  end

  def mutate
    first = rand(0...@state.length)
    second = rand(0...@state.length)
    if first == second
      self.mutate
    end   
    @state[first], @state[second] = @state[second], @state[first]
  end

  def crossver_with otherInd
    other_state = otherInd.state
    product = @state.first(@state.length / 2)
    rest = @state - product
    rest_unsorted = []
    rest.each { |item| 
      position = other_state.index(item)
      rest_unsorted << [position, item]
    }
    rest = rest_unsorted.sort.map { |item| item[1] }
    result = product + rest
    child = Individual.new(result)
    if rand(0..1.0) < 0.2
      child.mutate
    end
    child
  end

  def getFitnes
    distance = 0
    0.upto(@state.length - 1) do |i|
      current_city = @state[i]
      next_city = @state[i + 1]
      if next_city.nil?
        next_city = @state[0]
      end
      distance += DISTANCES[current_city][next_city]
    end
    distance
  end

  def to_s
    @state.join(' ')
  end
end

class GeneticAlgorithm
  def initialize cities, population_size, num_of_itterations, num_of_crossovers
    @population_size = population_size
    @cities = cities
    @population = generate_individuals
    @num_of_crossovers = num_of_crossovers
    @num_of_itterations = num_of_itterations
  end

  def sort_and_filter
    @population = @population.sort {|first, second|
      first.getFitnes <=> second.getFitnes
    }.take(@population_size)
  end

  def generate_individuals
    Array.new(@population_size).map{ |item|
      cities = permute_array @cities.dup
      Individual.new(cities)
    }
  end

  def permute_array(state_arr)
    1.upto(state_arr.length - 1) do |i|
      j = rand(i + 1)
      state_arr[i], state_arr[j] = state_arr[j], state_arr[i]
    end
    state_arr
  end 

  def crossover_population
    individuals_to_add = []
    0.step(@num_of_crossovers * 2 - 1, 2) { |i|
      first = @population.sample(1).to_a[0]
      second = @population.sample(1).to_a[0]
      individuals_to_add << first.crossver_with(second)
    }
    individuals_to_add
  end

  def iterate_generation
    individuals_to_add = crossover_population 
    @population += individuals_to_add
    sort_and_filter
  end

  def solve
    1.upto(@num_of_itterations) do |i|
      iterate_generation
    end
    sort_and_filter
    puts 'Solution:'
    puts @population[0].to_s
    puts 'Distance:'
    puts @population[0].getFitnes
  end
end

GeneticAlgorithm.new(CITIES, DISTANCES.length, 100, 50).solve