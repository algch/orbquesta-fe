extends "res://addons/gut/test.gd"

var Music = preload("res://Music.gd")

func test_note_generates_expected_pitch_name():
	var a5 = Music.Note.new(1, 60)
	assert_eq(a5.pitch_name, "A 5")

func test_bar_calculates_expected_note_width():
	var note = Music.Note.new(2, 0)
	var signature = Music.TimeSignature.new(4, 4)
	var bar_width = 200.0
	var bar = Music.Bar.new(signature, bar_width)
	assert_eq(int(bar.get_note_width(note)), 100)

func test_bar_calculates_space_left():
	var signature = Music.TimeSignature.new(4, 4)
	var bar_width = 200.0
	var bar = Music.Bar.new(signature, bar_width)
	for i in range(15):
		var note = Music.Note.new(16, 0)
		bar.add_note(note)
	assert_false(bar.note_fits(Music.Note.new(8, 0)))
	assert_true(bar.note_fits(Music.Note.new(16, 0)))
