import React, { useState } from 'react';
import { QueryBuilder, formatQuery } from 'react-querybuilder';

import { advanceFilterColumns } from './data/fields';
import { defaultFields } from './data/originalOptions';

function App() {
  const [query, setQuery] = useState({
    combinator: 'and',
    rules: [],
  });
  const [query1, setQuery1] = useState({
    combinator: 'and',
    rules: [],
  });

  return (
    <div>
      {/* <QueryBuilder
        fields={defaultFields}
        query={query1}
        onQueryChange={setQuery1}
        addRuleToNewGroups
        listsAsArrays
        controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
      />
      <pre>
        <code>{formatQuery(query1, 'json')}</code>
      </pre>
      <br />
      <br />
      <br /> */}
      <QueryBuilder
        fields={advanceFilterColumns}
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
