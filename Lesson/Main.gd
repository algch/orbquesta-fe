extends Control

const UNIT = 1
const MIN_NOTES_PER_BEAT = 16

var BEATS_PER_BAR = 4
var UNITS_IN_BAR = BEATS_PER_BAR * MIN_NOTES_PER_BEAT * UNIT

var selected_note_value = null
var bars = [[]]

var Music = preload("res://Music.gd")

func _ready():
	print("BAR UNIT SIZE ", UNITS_IN_BAR)
	var a_flat = Music.Note.new(0, 0, 11)
	print(a_flat.get_pitch_name())

func _on_note_selected(note):
	selected_note_value = note
	_on_add_note_to_bar()

func _on_add_note_to_bar():
	if not selected_note_value:
		print("SELECT A NOTE!")
		return

	var remaining_units = selected_note_value
	while remaining_units > 0:
		var bar = bars[len(bars) - 1]

		var total_units_in_bar = 0
		for u in bar:
			if u is int:
				total_units_in_bar += u

		if total_units_in_bar + remaining_units >= UNITS_IN_BAR:
			bar.append( (UNITS_IN_BAR - total_units_in_bar) )
			append_bar()
			remaining_units -= (UNITS_IN_BAR - total_units_in_bar)
			if remaining_units:
				bar.append("l")
		else:
			bar.append(remaining_units)
			remaining_units -= (UNITS_IN_BAR - total_units_in_bar)

	print("bars ", bars)

func append_bar():
	bars.append([])

func _draw():
	draw_pentagram()
	draw_notes()

func draw_pentagram():
	var x_size = 500
	var y_offset = 0
	var y_delta = $HBoxContainer/TextureRect.texture.get_height() / 4.5
	for i in range(0, 5):
		draw_line($pentagram.position + Vector2(0, y_offset), $pentagram.position + Vector2(x_size, y_offset), Color(0, 0, 0))
		y_offset += y_delta

# TODO
func draw_notes():
	for bar in bars:
		for note in bar:
			if note is int:
				pass
