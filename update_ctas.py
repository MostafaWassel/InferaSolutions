#!/usr/bin/env python3
"""Update all 'Get Started' CTAs to 'Let's Talk' with modal trigger"""

import re

file_path = "src/app/page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace remaining Get Started links in services
content = content.replace(
    '<a href="#contact" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1">Get Started <span className="text-xs">→</span></a>',
    '<button onClick={() => setIsModalOpen(true)} className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1">Let&apos;s Talk <span className="text-xs">→</span></button>'
)

# Replace any remaining standalone "Get Started" references
content = content.replace('Get Started', "Let's Talk")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Updated all 'Get Started' to 'Let's Talk'")
