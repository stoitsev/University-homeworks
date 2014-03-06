module Database
  class Images
    def get_schema
      [
        {
          :dir => 'foursquare',
          :places => [
            {
              :id => 1,
              :dir => 'starbucks',
              :name => 'Starbucks'
            }
          ] 
        }
      ]
    end
  end
end
