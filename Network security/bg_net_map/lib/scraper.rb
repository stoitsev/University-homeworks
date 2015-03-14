require 'pp'
require 'csv'
require 'json'
require 'pmap'
require 'net/http'

def parse_body body
  [] if body["status_code"] != 200

  body["data"]["neighbours"]
end

def request asn
  url = URI.parse("http://stat.ripe.net/data/asn-neighbours/data.json")
  path = url.path + "?resource=#{asn}"
  req = Net::HTTP::Get.new(path)
  res = Net::HTTP.start(url.host, url.port) { |http|
    http.request(req)
  }
  unless res.body.nil?
    body = JSON.parse res.body
    parse_body body
  else
    []  
  end
end

def get_neighbours asms
  asms.map do |as|
    num = as[:asn]
    list = request(num)
    {
      num => list
    }
  end
end

def download
  `wget -O data/delegated_numbers.csv ftp://ftp.ripe.net/pub/stats/ripencc/delegated-ripencc-latest`
end

def parse_asns
  CSV.read("data/delegated_numbers.csv", {:col_sep => '|'}).select do |row|
    row[1] == 'BG' and row[2] == 'asn' and row[6] == 'allocated'
  end.map do |row|
    row[3]
  end
end

def get_whois_info asns
  asns.map do |num|
    output = `whois -h riswhois.ripe.net #{num}`

    route = output.scan(/^route:\s+(.*)$/)[0]
    origin = output.scan(/^origin:\s+(.*)$/)[0]
    descr = output.scan(/^descr:\s+(.*)$/)[0]
    num_rispeers = output.scan(/^num-rispeers:\s+(.*)$/)[0]
    
    result = Hash.new
    result[:asn] = num
    result[:route] = route[0] unless route.nil?
    result[:origin] = origin[0] unless origin.nil?
    result[:descr] = descr[0] unless descr.nil?
    result[:num_rispeers] = num_rispeers[0] unless num_rispeers.nil?
    result
  end.select { |as| !as[:descr].nil? }
end

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

download

asns = parse_asns

puts "found #{asns.length} autonomous systems\n"

asns_info = get_whois_info asns

puts "found whois data for #{asns_info.length} of them\n"

puts JSON.generate(asns_info)

save_file 'data/cache/bg_asns.json', JSON.generate(asns_info)

neighbours = get_neighbours asns_info

save_file 'data/cache/as_neighbours.json', JSON.generate(neighbours)
