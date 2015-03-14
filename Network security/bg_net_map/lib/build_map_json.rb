require 'pp'
require 'json'

def save_file file_name, data
  begin
    file = File.open(file_name, "w")
    file.write(data) 
  rescue IOError => e
    puts "error saving #{file_name}\n"
  ensure
    file.close unless file == nil
  end
end

def read_json_file file_name
  json = File.read file_name
  JSON.parse(json)
end

bg_asns = read_json_file 'data/cache/bg_asns.json'

neigbours_list = read_json_file 'data/cache/as_neighbours.json'

bg_asn_list = bg_asns.map { |item| item["asn"].to_i }

puts "start drawing graph of #{bg_asn_list.length} nodes"

links = []

neigbours_list.each do |item|
  source = item.keys[0]
  item[source].each do |as|
    target = as["asn"]
    unless bg_asn_list.index(target).nil?
      source_name = bg_asns[bg_asn_list.index(source.to_i)]["descr"]
      target_name = bg_asns[bg_asn_list.index(target.to_i)]["descr"]

      links << {"source" => source_name, "target" => target_name}
    end
  end
end

puts "generated neighbours list with #{links.length} items"

save_file 'visualization/links.json', JSON.generate(links)
