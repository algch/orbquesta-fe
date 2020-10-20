const CHROMATIC_SCALE_SIZE = 12
const NOTE_NAMES = ["A", "A# / Bb", "B", "C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab"]
const BAR_SIZE = 200 # bar width in pixels


class Note:
	var value : int
	var pitch : int setget set_pitch
	var pitch_name
	var is_rest : bool

	func _init(value : int, pitch : int, rest : bool = false):
		# an integer N representing 1/N of a whole
		self.value = value
		self.pitch = pitch # 0 .. 120 like midi

	func set_pitch(new_pitch):
		pitch = new_pitch
		if self.is_rest:
			self.pitch_name = "rest"
			return
		if pitch < 0:
			self.pitch_name = "Beat!"
			return

		self.pitch_name = NOTE_NAMES[self.pitch % CHROMATIC_SCALE_SIZE] + " " + str(self.pitch / CHROMATIC_SCALE_SIZE)

class Bar:
	var notes := []
	var time_signature : TimeSignature
	var width : float
	var full := false
	var space_left := 1
	var previous : Bar
	var next : Bar

	func _init(signature : TimeSignature, w : float):
		self.time_signature = signature
		self.width = w

	func add_note(note : Note):
		if note_fits(note):
			self.notes.append(note)

	func note_fits(note : Note):
		# at some point this is not going to work
		# find an integer solution
		var consumed_space = 0.0
		for n in self.notes:
			consumed_space += 1 / float(n.value)
		consumed_space += 1 / float(note.value)

		return consumed_space <= 1

	func get_note_width(note : Note):
		return width * (1 / float(note.value))

class TimeSignature:
	var beats : int
	var beat_value : int

	func _init(beats : int, beat_value : int):
		self.beats = beats
		# an integer N representing 1/N of a whole
		self.beat_value = beat_value

	func get_note_sprite(note : Note):
		# return expected texture based on the note and time signature
		pass

	func get_note_width(note : Note):
		# return width within the bar based on note, time signature and bar size
		pass
