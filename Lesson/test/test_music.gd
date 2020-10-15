extends "res://addons/gut/test.gd"

var Music = preload("res://Music.gd")

func test_note_generates_expected_pitch_name():
	var a5 = Music.Note.new(0, 60)
	assert_eq(a5.pitch_name, "A 5")
