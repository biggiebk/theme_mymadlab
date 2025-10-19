/**
 * KQL (Kusto Query Language) syntax highlighting for Prism.js
 * Based on the official KQL documentation and syntax
 */

Prism.languages.kql = {
  'comment': [
    {
      pattern: /\/\/.*$/m,
      greedy: true
    },
    {
      pattern: /\/\*[\s\S]*?\*\//,
      greedy: true
    }
  ],
  'string': {
    pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'keyword': {
    pattern: /\b(?:and|or|not|in|has|contains|startswith|endswith|matches|between|case|iff|isnull|isnotnull|isempty|isnotempty|print|extend|project|where|take|limit|top|sort|order|by|asc|desc|count|sum|avg|min|max|distinct|summarize|join|union|let|as|on|kind|inner|leftouter|rightouter|fullouter|leftanti|rightanti|leftsemi|rightsemi|mv-expand|mv-apply|parse|extract|split|replace|tolower|toupper|trim|strlen|substring|indexof|strcat|strcat_delim|todynamic|tostring|todouble|toint|tolong|tobool|todatetime|totimespan|ago|now|datetime|timespan|bin|floor|ceiling|round|abs|sign|sqrt|log|log10|exp|pow|sin|cos|tan|asin|acos|atan|atan2|degrees|radians|pi|range|series|make_list|make_set|make_bag|bag_keys|bag_merge|zip|array_length|array_slice|array_split|array_concat|array_reverse|array_sort_asc|array_sort_desc|set_union|set_intersect|set_difference|bag_pack|bag_unpack|pack|pack_array|unpack|materialize|serialize|evaluate|invoke|render|fork|facet|search|find|datatable)\b/i,
    alias: 'builtin'
  },
  'operator-word': {
    pattern: /\b(?:has|contains|startswith|endswith|matches|in|between)\b/i,
    alias: 'operator'
  },
  'function': {
    pattern: /\b[a-z_]\w*(?=\s*\()/i
  },
  'table': {
    pattern: /\b[A-Z][a-zA-Z0-9_]*(?=\s*\||\s*$)/,
    alias: 'class-name'
  },
  'column': {
    pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*[=!<>]|\s*in\b|\s*has\b|\s*contains\b)/,
    alias: 'property'
  },
  'pipe': {
    pattern: /\|/,
    alias: 'operator'
  },
  'number': {
    pattern: /\b(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?[fd]?)\b/i
  },
  'datetime': {
    pattern: /\b\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?|\b\d+[dhms]\b/,
    alias: 'string'
  },
  'boolean': /\b(?:true|false)\b/i,
  'operator': /[=!<>]=?|[+\-*/%]|\/\/|\*\*|<<|>>|&|\||\^|~|\?\?/,
  'punctuation': /[{}[\];(),.:]/
};

// Add KQL as an alias for kusto
Prism.languages.kusto = Prism.languages.kql;