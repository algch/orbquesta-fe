const CHROMATIC_SCALE_SIZE = 12


class Note:
	var quantity : int
	var note_value : int
	var pitch : int

	func _init(quantity : int, note_value : int, pitch : int):
		self.quantity = quantity
		self.note_value = note_value
		self.pitch = pitch # 0 .. 120 like midi

	func get_pitch_name():
		var note_names = ["A", "A# / Bb", "B", "C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab"]
		return note_names[self.pitch % CHROMATIC_SCALE_SIZE] + " " + str(self.pitch / CHROMATIC_SCALE_SIZE)

class TimeSignature:
	var beats : int
	var beat_value : int

	func _init(beats : int, beat_value : int):
		self.beats = beats
		self.beat_value = beat_value
