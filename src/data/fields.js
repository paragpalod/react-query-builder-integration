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
  'SAFETY_NET_SUG_BASIC_ACTION_S',
  'SAFETY_NET_SUG_ISPCP_S',
  'SAFETY_NET_SUG_CLM_RLTD_PADRSKEY_S',
  'SAFETY_NET_SUG_LOSS_OF_ADRSRLTNSHIP_OLD_S',
  'SAFETY_NET_SUG_DIR_DSPLY_IND_S',
  'SAFETY_NET_SUG_ACTION_DIR_DSPLY_MAN_TO_GOOD_S',
  'SAFETY_NET_SUG_LIVE_HEALTH_ONLINE_S',
  'SAFETY_NET_SUG_LOSS_OF_ADRSRLTNSHIP_S',
  'SAFETY_NET_ACTION_LN_TIN_NPI_MTCH_SPS_S',
  'SAFETY_NET_SUG_CLM_ADRS_FIX_S',
  'SAFETY_NET_SUG_VIP_DELEGATED_TIN_S',
  'SAFETY_NET_SUG_VIP_DELEGATED_TIN_NPI_S',
  'SAFETY_NET_SUG_ACTION_CLM_INDIV_1_MNTH_CK_S',
  'SAFETY_NET_SUG_RECENTLY_ADDED_PROVIDERS_3_MNTH_CK_S',
  'SAFETY_NET_SUG_ACTION_OPT_VENDOR_S',
  'SAFETY_NET_SUG_BEACON_PGM_MANUAL_S',
  'SAFETY_NET_SUG_ACTION_ASH_VENDOR_S',
  'SAFETY_NET_SUG_MIX_OF_NTWK_S',
  'SAFETY_NET_SUG_ACTION_LN_CRCTN_S',
  'SAFETY_NET_ACTION_SUPPRESS_HOSP_SPCLTY_S',
  'SAFETY_NET_SUG_LOSS_OF_NTWK_S',
  'SAFETY_NET_SUG_NPI_LOSS_OF_NTWK_S',
  'SAFETY_NET_SUG_RECENTLY_ADDED_PROVIDERS_S',
  'SAFETY_NET_SUG_ACTION_PDOC_GOOD_S',
  'SAFETY_NET_SUG_LOSS_OF_SPCLTY_S',
  'SAFETY_NET_SUGGESTED_ACTION_STTS_CD_S',
  'SAFETY_NET_SUGGESTED_ACTION_DIR_DSPLY_IND_S',
  'SAFETY_NET_SUGGESTED_ACTION_SPS_PHONE_S',
  'SAFETY_NET_SUGGESTED_ACTION_PDOC_GOOD_S',
  'SAFETY_NET_BASIC_SUGGESTED_ACTION_S',
  'SAFETY_NET_SUGGESTED_ACTION_INDIV_SPCLTY_HOSP_S'
];

const typeMapping = {
  S: 'string',
  D: 'number',
  SL: 'select',
  MUSL: 'mulitselect',
  // DT: 'date',
  // B: 'boolean',
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
      operators: [...operators.filter((i) => i.type.includes(type) || 'all' === i.type)],
    };
  })
  .sort((a,
    b) => a.label.localeCompare(b.label));
