#!/usr/bin/env python3
"""Script to add dark mode classes to service cards"""

# Read the file
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Service card replacements
replacements = [
    # Update service card backgrounds
    ('bg-white p-8 rounded-2xl border border-slate-100 shadow-sm', 
     'bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm'),
    
    # Update service titles
    ('text-xl font-bold text-slate-900 mb-3', 
     'text-xl font-bold text-slate-900 dark:text-white mb-3'),
    
    # Update service descriptions (need to be careful with this one)
    ('text-slate-600 leading-relaxed mb-4', 
     'text-slate-600 dark:text-slate-300 leading-relaxed mb-4'),
    
    # Update service links
    ('text-teal-600 font-semibold hover:underline', 
     'text-teal-600 dark:text-teal-400 font-semibold hover:underline'),
    
    # Update icon backgrounds
    ('bg-blue-50 rounded-xl flex items-center justify-center text-blue-600', 
     'bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400'),
    ('bg-purple-50 rounded-xl flex items-center justify-center text-purple-600', 
     'bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400'),
    ('bg-teal-50 rounded-xl flex items-center justify-center text-teal-600', 
     'bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400'),
    ('bg-orange-50 rounded-xl flex items-center justify-center text-orange-600', 
     'bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400'),
    ('bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600', 
     'bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400'),
    ('bg-green-50 rounded-xl flex items-center justify-center text-green-600', 
     'bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400'),
]

# Apply replacements
for old, new in replacements:
    content = content.replace(old, new)

# Write the updated content
with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Added dark mode classes to service cards!")
