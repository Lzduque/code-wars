def anagrams(word, words)
  word_hash = {}
  word.split(//).each do |letter|
    if word_hash.key?(letter)
      word_hash[letter] += 1
    else
      word_hash[letter] = 1
    end
  end
  response = []
  words.each do |word|
    word_anagram_hash = {}
    word.split(//).each do |letter|
      if word_anagram_hash.key?(letter)
        word_anagram_hash[letter] += 1
      else
        word_anagram_hash[letter] = 1
      end
    end
    if word_anagram_hash == word_hash
      response << word
    end
  end
  response
end

puts anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']
# puts anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']
# puts anagrams('laser', ['lazing', 'lazy',  'lacer']), []
