def disemvowel(str)
  new_strg = ""
  str.split(//).map{|letter| "aeiouAEIOU".include?(letter) ? letter : new_strg << letter}
  return new_strg
end

puts disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!"