def anagrams(word, words)
  word_hash = {}
  word.each do |letter|
    if word_hash.key?(letter)
      word_hash.letter += 1
    else
      word_hash.letter = 1
    end
  end

end