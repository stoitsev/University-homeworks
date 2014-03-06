require 'pp'
require 'pmap'
require_relative 'image_processors/histogram/histogram'
require_relative 'image_processors/face_recognition/face_recognition'
require_relative '../db/db'

db = Database::Images.new
sources = db.get_schema

puts "Input:\n"
pp sources

def analize_image image
  histogram_data = Histogram.analyze image
  num_of_faces = FaceRecognition.analyze image
  {
    :histogram => histogram_data,
    :people => num_of_faces
  }
end

def analize_place place, source_dir
  current_dir = File.expand_path File.dirname(__FILE__)
  place_dir = place[:dir]
  full_place_dir = "#{current_dir}/../../../images/#{source_dir}/#{place_dir}"
  Dir.foreach(full_place_dir).map do |file|
    next if file == '.' or file == '..'
    file_path = "#{full_place_dir}/#{file}"
    analize_image file_path
  end.compact
end

result = sources.map do |source|
  source[:places].pmap do |place|
    place_data = analize_place place, source[:dir]
    {place[:id] => place_data}
  end
end

puts "Output:\n"
pp result
