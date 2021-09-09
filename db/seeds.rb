puts "🌱 Seeding..."
puts "Deleting old data..."
Segment.destroy_all


puts "Creating Segments..."

classic_emitter = Segment.create(name: "Classic", segment_type: "Emitter")
classic_grip = Segment.create(name: "Classic", segment_type: "Grip")
classic_switch = Segment.create(name: "Classic", segment_type: "Switch")
guidance_emitter = Segment.create(name:"Guidance", segment_type:"Emitter")
guidance_grip = Segment.create(name:"Guidance", segment_type:"Grip")
guidance_switch = Segment.create(name:"Guidance", segment_type:"Switch")
hero_emitter = Segment.create(name: "Hero", segment_type: "Emitter")
hero_grip = Segment.create(name: "Hero", segment_type: "Grip")
hero_switch = Segment.create(name: "Hero", segment_type: "Switch")
guidance_emitter = Segment.create(name:"Guidance", segment_type:"Emitter")
guidance_grip = Segment.create(name:"Guidance", segment_type:"Grip")
guidance_switch = Segment.create(name:"Guidance", segment_type:"Switch")
lost_emitter = Segment.create(name: "Lost", segment_type: "Emitter")
lost_grip = Segment.create(name: "Lost", segment_type: "Grip")
lost_switch = Segment.create(name: "Lost", segment_type: "Switch")
vengeance_emitter = Segment.create(name:"Vengeance", segment_type:"Emitter")
vengeance_grip = Segment.create(name:"Vengeance", segment_type:"Grip")
vengeance_switch = Segment.create(name:"Vengeance", segment_type:"Switch")
ancient_emitter = Segment.create(name:"Ancient", segment_type:"Emitter")
ancient_grip = Segment.create(name:"Ancient", segment_type:"Grip")
ancient_switch = Segment.create(name:"Ancient", segment_type:"Switch")

puts "✅ Done seeding Segments!"
# puts "Creating Sabers..."

# classic_saber = Segment.create(name: "Classic", segments:)

# guidance_emitter = Segment.create(name:"Guidance", segment_type:"Emitter")

# hero_emitter = Segment.create(name: "Hero", segment_type: "Emitter")

# guidance_emitter = Segment.create(name:"Guidance", segment_type:"Emitter")
# guidance_grip = Segment.create(name:"Guidance", segment_type:"Grip")
# guidance_switch = Segment.create(name:"Guidance", segment_type:"Switch")
# lost_emitter = Segment.create(name: "Lost", segment_type: "Emitter")
# lost_grip = Segment.create(name: "Lost", segment_type: "Grip")
# lost_switch = Segment.create(name: "Lost", segment_type: "Switch")
# vengeance_emitter = Segment.create(name:"Vengeance", segment_type:"Emitter")
# vengeance_grip = Segment.create(name:"Vengeance", segment_type:"Grip")
# vengeance_switch = Segment.create(name:"Vengeance", segment_type:"Switch")
# ancient_emitter = Segment.create(name:"Ancient", segment_type:"Emitter")
# ancient_grip = Segment.create(name:"Ancient", segment_type:"Grip")
# ancient_switch = Segment.create(name:"Ancient", segment_type:"Switch")

# puts "✅ Done seeding Sabers!"
puts "✅ Done seeding!"