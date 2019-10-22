---
to: src/components/<%= type %>/index.ts
inject: true
skip_if: <%= Name %>
append: true
---
export { default as <%= Name %> } from './<%= Name %>'