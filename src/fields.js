import { operators } from './operators';

const columns = [
  'TIN_S',
  'NPI_S',
  'ZIP_S',
  'NPI_STATUS_S',
  'PROVIDER_TYPE_S',
  'ORG_NAME_S',
  'RELATED_NPI_S',
  'FIRST_NAME_S',
  'MIDDLE_NAME_S',
  'LAST_NAME_S',
  'SOURCE_SYSTEM_S',
  'STATE_S',
  'CITY_S',
  'COUNTY_S',
  'ADDRESS_S',
  'PHONE_S',
  'ANP_S',
  'SPECIALTY_S',
  'LOB_S',
  'PAR_INDICATOR_S',
  'ADDRESS_TYPE_S',
  'CATEGORY_S',
  'ENTITY_TYPE_S',
  'SUGGESTION_TYPE_S',
  'REVIEW_STATUS_S',
  'ASSIGNED_TO_S',
  'ASSIGNED_USERNAME_S',
  'MCHECK_R3_NET_SCORE_D',
  'HEALTH_SCORE_D',
  'TIN_HEALTH_SCORE_D',
  'TOTAL_INACCURATE_RECORDS_D',
  'TIN_TOTAL_INACCURATE_RECORDS_D',
  'FINAL_SUGGESTION_TYPE_S',
  'TOTAL_CLAIMS_COUNT_D',
];

const typeMapping = {
  S: 'string',
  D: 'number',
  DT: 'date',
  B: 'boolean',
};

export const advanceFilterColumns = columns
  .map((col) => {
    const arr = col.split('_');
    const type = typeMapping[arr.pop()] || 'string';
    return {
      // placeholder: 'Enter first name',

      // defaultOperator: 'beginsWith',

      // validator: (r) => !!r.value,
    
      // valueEditorType: 'checkbox',
      // defaultValue: false,

      // valueEditorType: 'select',
      // values: ['Cowbell'],
      // defaultValue: 'Cowbell',


      name: col,
      label: arr.join(' '),
      inputType: type,
      operators: [...operators.filter((i) => i.type.includes(type))],
    };
  })
  .sort((a, b) => a.label.localeCompare(b.label));
