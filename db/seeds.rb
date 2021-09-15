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


lost_emitter = Segment.create(name: "Lost", segment_type: "Emitter")
lost_grip = Segment.create(name: "Lost", segment_type: "Grip")
lost_switch = Segment.create(name: "Lost", segment_type: "Switch")

vengeance_emitter = Segment.create(name:"Vengeance", segment_type:"Emitter")
vengeance_grip = Segment.create(name:"Vengeance", segment_type:"Grip")
vengeance_switch = Segment.create(name:"Vengeance", segment_type:"Switch")

ancient_emitter = Segment.create(name:"Ancient", segment_type:"Emitter")
ancient_grip = Segment.create(name:"Ancient", segment_type:"Grip")
ancient_switch = Segment.create(name:"Ancient", segment_type:"Switch")

wisdom_emitter = Segment.create(name:"Wisdom", segment_type:"Emitter")
wisdom_grip = Segment.create(name:"Wisdom", segment_type:"Grip")
wisdom_switch = Segment.create(name:"Wisdom", segment_type:"Switch")

reclaimed_emitter = Segment.create(name:"Reclaimed", segment_type:"Emitter")
reclaimed_grip = Segment.create(name:"Reclaimed", segment_type:"Grip")
reclaimed_switch = Segment.create(name:"Reclaimed", segment_type:"Switch")

pathfinder_emitter = Segment.create(name:"Pathfinder", segment_type:"Emitter")
pathfinder_grip = Segment.create(name:"Pathfinder", segment_type:"Grip")
pathfinder_switch = Segment.create(name:"Pathfinder", segment_type:"Switch")

puts "✅ Done seeding Segments!"
puts "Creating Sabers..."

classic_saber = Saber.create(name:"testestest", blade_color: segment_ids: Segment.where(:name => "Classic").ids)
guidance_saber = Saber.create(name:"testestest", segment_ids: Segment.where(:name => "Guidance").ids)
hero_saber = Saber.create(name:"testestest", segment_ids: Segment.where(:name => "Hero").ids)
lost_saber = Saber.create(name:"testestest", segment_ids: Segment.where(:name => "Lost").ids)
vengance_saber = Saber.create(name:"testestest", segment_ids: Segment.where(:name => "Vengance").ids)
ancient_saber = Saber.create(name:"testestest", segment_ids: Segment.where(:name => "Ancient").ids)
wisdom_saber = Saber.create(name:"testestest", segment_ids: Segment.where(:name => "Wisdom").ids)
reclaimed_saber = Saber.create(name:"testestest", segment_ids: Segment.where(:name => "Reclaimed").ids)
pathfinder_saber = Saber.create(name:"testestest", segment_ids: Segment.where(:name => "Pathfinder").ids)



puts "✅ Done seeding Sabers!"
puts "✅ Done seeding!"