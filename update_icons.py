#!/usr/bin/env python3
"""Script to update all emoji icons to consistent gradient letter-based icons"""

# Read the file
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Stats section icons replacements
stats_replacements = [
    # Stats icons - simpler design, just remove emojis and use gradient boxes with initials
    ('<div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🚀</div>', 
     '<div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md">AG</div>'),
    ('<div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">💡</div>', 
     '<div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md">MS</div>'),
    ('<div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🎯</div>', 
     '<div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md">CF</div>'),
    ('<div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🔒</div>', 
     '<div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md">QD</div>'),
]

# Project card icons - use single letter initials
project_replacements = [
    ('<span className="text-6xl">📝</span>', '<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-blue-600">OC</span></div>'),
    ('<span className="text-6xl">📊</span>', '<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-green-600">PR</span></div>'),
    ('<span className="text-6xl">👁️</span>', '<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-orange-600">CV</span></div>'),
    ('<span className="text-6xl">🛰️</span>', '<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-indigo-600">RS</span></div>'),
    ('<span className="text-6xl">💡</span>', '<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-purple-600">RE</span></div>'),
    ('<span className="text-6xl">🏥</span>', '<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-red-600">HC</span></div>'),
]

# Apply all replacements
all_replacements = stats_replacements + project_replacements

for old, new in all_replacements:
    content = content.replace(old, new)

# Write the updated content
with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully updated all remaining icons!")
print("   - 4 stats section icons updated (AG, MS, CF, QD)")
print("   - 6 project card icons updated (OC, PR, CV, RS, RE, HC)")
