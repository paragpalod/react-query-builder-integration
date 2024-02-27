import React, { useState } from 'react';
import { QueryBuilder, formatQuery } from 'react-querybuilder';

import { advanceFilterColumns } from './fields';
import { defaultFields } from './originalOptions';

function App() {
  const [query, setQuery] = useState({
    combinator: 'and',
    rules: [],
  });

  return (
    <div>
      <QueryBuilder
        fields={defaultFields}
        query={query}
        onQueryChange={setQuery}
        addRuleToNewGroups
        listsAsArrays
        controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
      />
      <h4>Query</h4>
      <pre>
        <code>{formatQuery(query, 'json')}</code>
      </pre>
    </div>
  );
}

export default App;
