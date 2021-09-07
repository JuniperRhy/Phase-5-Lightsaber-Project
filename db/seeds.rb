puts "🌱 Seeding..."
puts "Deleting old data..."
User.destroy_all
Pedal.destroy_all  Character.create(name: 'Luke', movie: movies.first)

puts "Creating Segments..."

classic_emitter = Segment.create(name: "Classic", segment_type: "Emitter")
classic_grip = Segment.create(name: "Classic", segment_type: "Grip")
classic_switch = Segment.create(name: "Classic", segment_type: "Switch")

puts "✅ Done seeding!"