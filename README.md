# js-searchKeyword-validator

Validation ElasticSearch `query_string` query in Javascript

Sources:

- https://medium.com/basecs/reading-code-right-with-some-help-from-the-lexer-63d0be3d21d
- https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
- https://medium.com/basecs/leveling-up-ones-parsing-game-with-asts-d7a6fc2400ff
- https://medium.com/hackernoon/compilers-and-interpreters-3e354a2e41cf
- https://www.google.com/search?q=abstract+syntax+tree&tbm=isch&ved=2ahUKEwiS-Km-7IPoAhXI04UKHZf4DIUQ2-cCegQIABAA&oq=abstract+syntax+tree&gs_l=img.3..0l10.16813.25416..25550...3.0..0.122.2362.7j16......0....1..gws-wiz-img.......35i39j0i67j0i10.eRHx8-1qHNY&ei=UDVhXpKQOsinlwSX8bOoCA&bih=950&biw=1920#imgrc=FQVdL9hnaB75UM
- https://www.google.com/search?q=parser+combinators&oq=parser+combinators&aqs=chrome..69i57j0l7.7248j0j1&sourceid=chrome&ie=UTF-8
- https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax
- https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html

Initial grammar

```
S->E
E->(E)
E-> "T"
E-> T
E-> E E
E-> E+E
E-> E AND E
E-> E | E
E-> E OR E
E-> E - E
E-> E NOT E
```
