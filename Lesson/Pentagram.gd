extends Node2D

var Music = preload("res://Music.gd")

var default_signature = Music.TimeSignature.new(4, 4)
var default_bar_size = 200

var starting_bar = Music.Bar.new(default_signature, default_bar_size)

func _draw():
	draw_pentagram()

func draw_pentagram():
	var y_offset = 0
	var y_delta = ($End.position - $Start.position).y / 5
	for i in range(0, 5):
		draw_line($Start.position + Vector2(0, y_offset), $Start.position + Vector2($End.position.x, y_offset), Color(0, 0, 0))
		y_offset += y_delta

func get_dragged_bar():
	var r = Rect2(position + $Start.position, $End.position - $Start.position)
	var mouse_pos = get_global_mouse_position()
	if r.has_point(mouse_pos):
		return starting_bar

	return null
