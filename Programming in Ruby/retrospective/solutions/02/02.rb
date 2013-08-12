class Collection

  attr_accessor :songs

  def initialize(songs_as_string, artist_tags = {})
    @songs = songs_as_string.lines.map { |song| Song.from_string song}
    @songs.each { |song|
      song.tags.push *artist_tags[song.artist]
    }
  end

  def find(criteria = {})
    @songs.select { |song| song.match?(criteria) }
  end

end

class Song

  attr_accessor :name, :artist, :genre, :subgenre, :tags

  def initialize(name, artist, genres, tags= '')
    @name = name.strip
    @artist = artist.strip
    @genre, @subgenre = Song.split_string genres
    add_tags tags
    add_tags @genre.downcase
    add_tags @subgenre.downcase if @subgenre
  end

  def add_tags(tags_as_string)
    tags = Song.split_string tags_as_string

    @tags ||= []
    @tags.push(*tags).uniq!
  end

  def match?(criteria)
    match_name? criteria[:name] and
      match_artist? criteria[:artist] and
      match_tags? criteria[:tags] and
      match_filter? criteria[:filter]
  end

  def match_name?(name)
    if name
      return @name == name
    end
    true
  end

  def match_artist?(artist)
    if artist
      return @artist == artist
    end
    true
  end

  def match_tags?(tags)
    if tags
      return Array(tags).all? { |tag|
        check_tag? tag
      }
    end
    true
  end

  def check_tag?(tag)
    if tag.end_with? '!' then
      return !(@tags.include? tag.chop)
    else
      return @tags.include? tag
    end
  end

  def match_filter?(filter)
    if filter
      return filter.(self)
    end
    true
  end

  def self.from_string(song_as_string)
    Song.new *song_as_string.split('.')
  end

  def self.split_string(string)
    string.split(',').map { |x| x.strip }
  end

end


