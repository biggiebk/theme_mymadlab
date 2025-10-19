---
layout: home
---

# Welcome to MyMadLab Theme

This is a dark Jekyll theme featuring:

- **Dark color scheme** with RGB(23,32,36) background and RGB(192,239,254) foreground
- **Syntax highlighting** with client-side support via Prism.js
- **Responsive design** that works on all devices
- **Clean typography** optimized for readability

## Code Examples

Here are some examples of syntax highlighting in action:

### Python
```python
def fibonacci(n):
    """Generate fibonacci sequence up to n terms."""
    a, b = 0, 1
    result = []
    for i in range(n):
        result.append(a)
        a, b = b, a + b
    return result

# Generate first 10 fibonacci numbers
fib_numbers = fibonacci(10)
print(f"First 10 fibonacci numbers: {fib_numbers}")
```

### JavaScript
```javascript
// Modern ES6+ JavaScript example
class DataProcessor {
    constructor(data) {
        this.data = data;
    }
    
    async processAsync() {
        const processed = await Promise.all(
            this.data.map(async item => {
                const result = await fetch(`/api/process/${item.id}`);
                return await result.json();
            })
        );
        return processed.filter(item => item.isValid);
    }
}

// Usage
const processor = new DataProcessor([{id: 1}, {id: 2}]);
processor.processAsync().then(console.log);
```

### CSS
```css
/* Modern CSS with dark theme variables */
:root {
  --bg-color: rgb(23, 32, 36);
  --fg-color: rgb(192, 239, 254);
  --accent-color: #64c8ff;
}

.card {
  background: var(--bg-color);
  color: var(--fg-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(100, 200, 255, 0.2);
}
```

### KQL (Kusto Query Language)
```kql
// Azure Log Analytics - Security Event Analysis
SecurityEvent
| where TimeGenerated > ago(24h)
| where EventID in (4624, 4625, 4648)  // Logon events
| extend LogonType = case(
    EventID == 4624, "Successful Logon",
    EventID == 4625, "Failed Logon", 
    EventID == 4648, "Explicit Logon",
    "Unknown"
)
| summarize 
    EventCount = count(),
    UniqueAccounts = dcount(Account),
    LastSeen = max(TimeGenerated)
    by LogonType, Computer
| where EventCount > 10
| order by EventCount desc
| project-reorder Computer, LogonType, EventCount, UniqueAccounts, LastSeen
| limit 100
```

## Features

The theme supports all common Jekyll features and more:

- Responsive navigation
- Social media links
- SEO optimization
- RSS feeds
- Syntax highlighting for 100+ languages
- Dark theme optimized for long reading sessions