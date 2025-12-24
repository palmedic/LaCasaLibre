from PIL import Image

# Open the image
img = Image.open('LaCasaLibreLogo.png')

# Convert to RGBA if not already
img = img.convert("RGBA")

# Get the pixel data
datas = img.getdata()

# Create new pixel data with transparent background
new_data = []
for item in datas:
    # Check if pixel is white or very light (background)
    # Change all white (also shades of whites) pixels to transparent
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        # Make it transparent
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)

# Update image data
img.putdata(new_data)

# Save with transparency
img.save('LaCasaLibreLogo.png', "PNG")
print("Background made transparent successfully!")
