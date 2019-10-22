---
to: src/components/<%= type %>/index.ts
inject: true
skip_if: <%= h.changeCase.pascalCase(name) %>
append: true
---
export { default as <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>'
