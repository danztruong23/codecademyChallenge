#!/usr/bin/env python3
guests = {}

def read_guestlist(file_name):
	text_file = open(file_name, 'r')
	while True:
		line_data = text_file.readline().strip().split(",")
		
		if len(line_data) < 2:
			# If no more lines, close file
			text_file.close()
			return
		
		line = yield line_data
		
		if line is not None:
			line_data = line
			
		name = line_data[0]
		age = int(line_data[1])
		guests[name] = age
		
guest_list = read_guestlist("guest_list.txt")
count = 0

for guest in guest_list:
	count += 1
	print(guest)
	if count >= 10:
		break

for guest in guest_list:
	print(guest)

def who_is_21(guests):
	for name, age in guests.items():
		if age >= 21:
			yield name

print(guests)
people_21 = who_is_21(guests)
for p in people_21:
	print(p)
	
def table_generator(table_number, food_name):
	for seat_number in range(1,6):
		yield (food_name, f'Table {table_number}', f'Seat {seat_number}')

table1 = table_generator(1, "Chicken")
table2 = table_generator(2, "Beef")
table3 = table_generator(3, "Fish")

def assign_seats_to_guests(guests, table_generators):
	for guest_name in guests:
		# Cycle through the table generators to assign seats across the tables
		#table_generator = next(table_generators)
		#meal_assignment = next(table_generator)
		yield (guest_name, next(table_generators))
		
# Create a round-robin cycle of the table generators
from itertools import cycle
table_generators_cycle = cycle([table1, table2, table3])

# Use the generator to assign seats and meals to guests
guest_meal_assignments = assign_seats_to_guests(guests, table1)

# Example usage:
# (This will print the assignments for all guests)
for assignment in guest_meal_assignments:
	print(assignment)