puts "🌱 Seeding..."
puts "Deleting old data..."
Segment.destroy_all


puts "Creating Segments..."

classic_emitter = Segment.create(name: "Classic", segment_type: "Emitter")
classic_grip = Segment.create(name: "Classic", segment_type: "Grip")
classic_switch = Segment.create(name: "Classic", segment_type: "Switch")

puts "✅ Done seeding!"