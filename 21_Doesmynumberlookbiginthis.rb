def narcissistic?(value)
  value_arr = value.to_s.split(//)
  sum = 0
  value_arr.map { |value| value.to_i ** value_arr.length }.each { |a| sum += a }
  if sum == value.to_i
    result = true
  else
    result = false
  end
  result
end

puts narcissistic?(5), true
puts narcissistic?( 153 ), true
puts narcissistic?( 1633 ), false