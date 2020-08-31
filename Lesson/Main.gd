extends Control

const UNIT = 1
const MIN_NOTES_PER_BEAT = 16

var BEATS_PER_BAR = 4
var UNITS_IN_BAR = BEATS_PER_BAR * MIN_NOTES_PER_BEAT * UNIT

var selected_note_value = null
var bars = [0]

func _ready():
	print("BAR UNIT SIZE ", UNITS_IN_BAR)

func _on_note_selected(note):
	selected_note_value = note
	_on_add_note_to_bar()

func _on_add_note_to_bar():
	if not selected_note_value:
		print("SELECT A NOTE!")
		return

	# add a list of nodes instead of the whole value
	var remaining_units = selected_note_value
	while remaining_units > 0:
		var bar = bars[len(bars) - 1]
		if bar + remaining_units >= UNITS_IN_BAR:
			# wrong
			bars[len(bars) - 1] = UNITS_IN_BAR
			append_bar()
		else:
			bars[len(bars) - 1] = bar + remaining_units

		remaining_units -= (UNITS_IN_BAR - bar)

	print("bars ", bars)



func append_bar():
	bars.append(0)
