extends Node2D

var Music = preload("res://Music.gd")

func _on_NoteMenu_note_selected(note_value):
	var bar = $Pentagram.get_dragged_bar()
	if not bar:
		return

	var default_pitch = 0
	var note = Music.Note.new(note_value, default_pitch)
	bar.add_note(note)
	print("notes ", bar.notes)
