extends CanvasLayer

signal note_selected(note)

var selected_note = null

func _on_Note_button_down(note_value):
	selected_note = note_value

func _on_Note_button_up():
	emit_signal("note_selected", selected_note)
