def find_short(s)
    l = s.split[0].length
    array_s = s.split.map{|word| word.length < l ? l = word.length : l}
    return l # l: length of the shortest word
end

puts find_short("bitcoin take over the world maybe who knows perhaps"), 3
puts find_short("turns out random test cases are easier than writing out basic ones"), 3
puts find_short("lets talk about javascript the best language"), 3
puts find_short("i want to travel the world writing code one day"), 1
puts find_short("Lets all go on holiday somewhere very cold"), 2
