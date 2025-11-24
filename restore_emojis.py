#!/usr/bin/env python3
"""Script to restore all emoji icons while keeping the 'IS' logo in nav and footer"""

# Read the current file
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Restore service section emojis
service_restorations = [
    # Service icons - restore emojis
    ('bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-md">\n                <span>AI',
     'bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">\n                <span>🤖'),
    
    ('bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-md">\n                <span>SD',
     'bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 text-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">\n                <span>💻'),
    
    ('bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-md">\n                <span>CD',
     'bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 text-2xl mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">\n                <span>☁️'),
    
    ('bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-md">\n                <span>DA',
     'bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 text-2xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">\n                <span>📊'),
    
    ('bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-md">\n                <span>TC',
     'bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">\n                <span>🏗️'),
    
    ('bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-md">\n                <span>PA',
     'bg-green-50 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">\n                <span>🔄'),
]

# Restore approach section emojis
approach_restorations = [
    ('bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white shadow-md text-sm font-bold">\n                    <span>ST',
     'bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm text-xl border border-slate-100">\n                    <span>🚀'),
    
    ('bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white shadow-md text-sm font-bold">\n                    <span>IN',
     'bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm text-xl border border-slate-100">\n                    <span>💡'),
    
    ('bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white shadow-md text-sm font-bold">\n                    <span>CL',
     'bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm text-xl border border-slate-100">\n                    <span>🤝'),
]

# Restore stats section emojis
stats_restorations = [
    ('<div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md">AG</div>',
     '<div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🚀</div>'),
    
    ('<div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md">MS</div>',
     '<div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">💡</div>'),
    
    ('<div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md">CF</div>',
     '<div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🎯</div>'),
    
    ('<div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-2 shadow-md">QD</div>',
     '<div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🔒</div>'),
]

# Restore project card emojis
project_restorations = [
    ('<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-blue-600">OC</span></div>',
     '<span className="text-6xl">📝</span>'),
    
    ('<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-green-600">PR</span></div>',
     '<span className="text-6xl">📊</span>'),
    
    ('<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-orange-600">CV</span></div>',
     '<span className="text-6xl">👁️</span>'),
    
    ('<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-indigo-600">RS</span></div>',
     '<span className="text-6xl">🛰️</span>'),
    
    ('<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-purple-600">RE</span></div>',
     '<span className="text-6xl">💡</span>'),
    
    ('<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"><span className="text-5xl font-black text-red-600">HC</span></div>',
     '<span className="text-6xl">🏥</span>'),
]

# Apply all restorations
all_restorations = service_restorations + approach_restorations + stats_restorations + project_restorations

for new, old in all_restorations:
    content = content.replace(new, old)

# Write the updated content
with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully restored all emoji icons!")
print("   ✅ Logo still using 'IS' monogram in navigation and footer")
print("   ✅ All service icons back to emojis (🤖💻☁️📊🏗️🔄)")
print("   ✅ All approach icons back to emojis (🚀💡🤝)")
print("   ✅ All stats icons back to emojis (🚀💡🎯🔒)")
print("   ✅ All project icons back to emojis (📝📊👁️🛰️💡🏥)")
