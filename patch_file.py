
base_file = 'notre-equipe.html'
grid_file = 'new_grid.html'

with open(base_file, 'r', encoding='utf-8') as f:
    content = f.read()

with open(grid_file, 'r', encoding='utf-8') as f:
    new_grid = f.read()

# Find the start and end markers
# Start: <!-- Team Grid -->
# End: </main> (The grid closes before main closes)

start_marker = '<!-- Team Grid -->'
end_marker = '</main>'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find markers")
    exit(1)

# Preserve the start marker, replace up to end_marker
pre_content = content[:start_idx + len(start_marker)]
post_content = content[end_idx:]

# The previous grid was inside <div class="grid ..."> which generate_new_design.py OUTPUTS.
# So we want to replace everything AFTER <!-- Team Grid --> until </main> with the new content,
# but we need to check if there is closing </div> before </main> that belonged to the wrapper?
# In the original file structure:
# <main ...>
#    <div header...> </div>
#    <!-- Team Grid -->
#    <div class="grid ..."> ... </div>
# </main>

# My script `generate_new_design.py` outputs:
# <!-- New Team Grid Design -->
# <div class="grid ..."> ... </div>

# So if I replace from `<!-- Team Grid -->` to `</main>`, I need to make sure I don't lose the closing tag of `main` (which is part of post_content) or extra spacing.

# Let's see what exactly is between Team Grid and </main> in the file.
# It is the <div class="grid ..."> ... </div> and some whitespace.

new_content = pre_content + "\n" + new_grid + "\n    " + post_content

with open(base_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {base_file}")
