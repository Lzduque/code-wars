def number(bus_stops)
  passangers_num = 0
  bus_stops.each do |stop|
    passangers_num += stop[0]
    passangers_num -= stop[1]
 end
 return passangers_num
end

puts number([[10, 0], [3, 5], [5, 8]]), 5
# puts number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17
# puts number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21