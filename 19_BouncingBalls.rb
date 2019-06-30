def bouncingBall(h, bounce, window)
  num_see = 1
  h = h * bounce
  if window > h || h < 0 || bounce >= 1 || bounce < 0
    return -1
  end
  while h > window
    h = h * bounce
    num_see += 2
  end
  num_see
end

puts bouncingBall(3, 0.66, 1.5), 3
puts bouncingBall(30, 0.66, 1.5), 15
puts bouncingBall(30, 0.75, 1.5), 21
puts bouncingBall(30, 0.4, 10), 3
puts bouncingBall(40, 1, 10), -1
puts bouncingBall(-5, 0.66, 1.5), -1
