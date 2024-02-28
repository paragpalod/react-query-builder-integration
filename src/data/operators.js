export const operators = [
  {
    type: 'string|date|number',
    name: 'EQUAL_TO',
    label: '=',
  },
  {
    type: 'string|date|number',
    name: 'NOT_EQUAL_TO',
    label: '!=',
  },
  {
    type: 'date|number',
    name: 'LESSER_THAN',
    label: '<',
  },
  {
    type: 'date|number',
    name: 'GREATER_THAN',
    label: '>',
  },
  {
    type: 'date|number',
    name: 'LESSER_THAN_EQUAL',
    label: '<=',
  },
  {
    type: 'date|number',
    name: 'GREATER_THAN_EQUAL',
    label: '>=',
  },
  {
    type: 'string',
    name: 'LIKE',
    label: 'contains',
  },
  {
    type: 'string',
    name: 'BEGINS_WITH',
    label: 'begins with',
  },
  {
    type: 'string',
    name: 'ENDS_WITH',
    label: 'ends with',
  },
  // {
  //   type: 'string',
  //   name: 'doesNotContain',
  //   label: 'does not contain',
  // },
  // {
  //   type: 'string',
  //   name: 'doesNotBeginWith',
  //   label: 'does not begin with',
  // },
  // {
  //   type: 'string',
  //   name: 'doesNotEndWith',
  //   label: 'does not end with',
  // },
  {
    type: 'all',
    name: 'IS_NULL',
    label: 'is null',
  },
  {
    type: 'all',
    name: 'NOT_NULL',
    label: 'is not null',
  },
  {
    type: 'string',
    name: 'IN',
    label: 'in',
  },
  {
    type: 'string',
    name: 'NOT_IN',
    label: 'not in',
  },
  // {
  //   type: 'date|number',
  //   name: 'between',
  //   label: 'between',
  // },
  // {
  //   type: 'date|number',
  //   name: 'notBetween',
  //   label: 'not between',
  // },
];
