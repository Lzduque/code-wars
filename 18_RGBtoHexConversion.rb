def rgb(r, g, b)
  def to_hex(n)
    n.to_s(16).rjust(2, '0').upcase
  end
  "#{to_hex r}#{to_hex g}#{to_hex b}"
end

puts rgb(255, 255, 255), "FFFFFF"
puts rgb(255, 255, 300), "FFFFFF"
puts rgb(0,0,0), "000000"
puts rgb(148, 0, 211), "9400D3"