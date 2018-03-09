#!/usr/bin/python3

# Created by Justin Mangawang

# This program uses pyautogui, provided by Al Sweigart, to simulate user selecting their
# birthday. The cursor(pointer) is adjusted for a 1920 x 1080 screen with the browser window 
# fully opened. Unfortunately, this program is only set to static positions and will consistently 
# select the same range of (x,y)-coordinates, regardless if the application is open or not.

import pyautogui as pag
import time
import random
import webbrowser

webbrowser.open('Alt.html')

# 'pause' the program at start; otherwise, program immediately starts to make selections
# and the page may not have fully loaded resulting in the pointer moving and clicking on
# blank spaces.
time.sleep(1.5)

# x 'pauses' the automation. I'll rename this later...maybe.
x = 0.6

# variable to tell how many dates to select.
counter = 3 

# variable sets "y" coordinate for month, day, year buttons (since they are in-line).
YPOS = 440		   # with chrome = 470; with flex css = 440

# variables set scroll bar positions.
xYEARSCROLL = 807  # with chrome = 804; with flex css = 807
yYEARSCROLL = 516  # with chrome = 543; with flex css = 516
xDAYSCROLL = 1213  # with chrome = 1162; with flex css = 1213
yDAYSCROLL = 574   # with chrome = 595; with flex css = 574

# variables give coordinates to "Calculate" button and "restart" anchor.
clickCalculateX = 944 # with chrome = 944
clickCalculateY = 566 # with chrome = 566
clickRestartX = 489	# with chrome = 489
clickRestartY = 815	# with chrome = 815

# variables give coordinates to close out the window.
xCLOSEWINDOW = 1907
yCLOSEWINDOW = 18 
try:
	while(counter > 0):
		counter = counter - 1
		yearX = 723	# with chrome = 773; with flex css 723
		yearY = YPOS
		yearDateX = 748 
		yearDateY = random.randint(584, 2024)
		
		monthX = 929 # with chrome = 929
		monthY = YPOS
		monthDateX = 912
		monthDateY = random.randint(534, 1020) # bootstrap = (591, 896); flex css (534, 1020)
		
		dayX = 1112	# with chrome = 1112
		dayY = YPOS
		dayDateX = 1147
		dayDateY = random.randint(603, 2060)
        
		# YEAR section
		pag.moveTo(yearX, yearY, duration=x)
		pag.click(yearX, yearY, button='left')
        
		if yearDateY > 1024:
			# This section tells pointer to go to year's scroll bar.
			pag.moveTo(xYEARSCROLL, yYEARSCROLL, duration=x)
			yearDateY = random.randint(594, 1004)
			# This section clicks and drags scroll bar to (xYEARSCROLL, yearDateY) coordinate.
			pag.dragTo(xYEARSCROLL, yearDateY, duration=x)
			yearDateY = random.randint(584, 1024)
			# This section clicks and selects the designated year.
			pag.moveTo(yearDateX, yearDateY, duration=x)
			pag.click(yearDateX, yearDateY)
		else:
			# This section clicks and selects the designated year without scrolling.
			pag.moveTo(yearDateX, yearDateY, duration=x)
			pag.click(yearDateX, yearDateY, button='left')    
		
		# MONTH section
        # All 12 months fit in view, so no scroll bar code is needed (like in year and day).
		pag.moveTo(monthX, monthY, duration=x)
		pag.click(monthX, monthY, button='left')    
		pag.moveTo(monthDateX, monthDateY, duration=x)
		pag.click(monthDateX, monthDateY, button='left')
       
	    # DAY section
		pag.moveTo(dayX, dayY, duration=x)
		pag.click(dayX, dayY, button='left')
        
		if dayDateY > 1026:	
			# This section tells pointer to go to day's scroll bar.
			pag.moveTo(xDAYSCROLL, yDAYSCROLL, duration=x)
			dayDateY = random.randint(609, 888)
			# This section clicks and drags scroll bar to (xDAYSCROLL, dayDateY) coordinate.
			pag.dragTo(xDAYSCROLL, dayDateY, duration=x)
			dayDateY = random.randint(636, 1026)
			# This section clicks and selects the designated day.
			pag.moveTo(dayDateX, dayDateY, duration=x)
			pag.click(dayDateX, dayDateY)
		else:
			# This section clicks and selects the designated day without scrolling.
			pag.moveTo(dayDateX, dayDateY, duration=x)
			pag.click(dayDateX, dayDateY, button='left')
		pag.moveTo(clickCalculateX, clickCalculateY, duration=x)
		pag.click(clickCalculateX, clickCalculateY, button='left')
		pag.moveTo(clickRestartX, clickRestartY, duration=x)
        
		time.sleep(1.5)
		pag.click(clickRestartX, clickRestartY, button='left')

    # moves pointer to close out the window and clicks to close window.
	pag.moveTo(xCLOSEWINDOW, yCLOSEWINDOW, duration=0.8)
	pag.click(xCLOSEWINDOW, yCLOSEWINDOW)

# In order to immediately end the program (e.g. with "Ctrl C") this interrupt handles that
# by having the mouse move to 'x' out the window.
except KeyboardInterrupt:
    pag.moveTo(xCLOSEWINDOW, yCLOSEWINDOW, duration=0.8)
    pag.click(xCLOSEWINDOW, yCLOSEWINDOW)
    print('\nAnd now you are done.')
