export const Industries = [
  {
    value: 'other',
    label: 'Other'
  },
  {
    value: 'academia',
    label: 'Academia and Research'
  },
  {
    value: 'auto',
    label: 'Automobile'
  },
  {
    value: 'education',
    label: 'Education, Teaching'
  },
  {
    value: 'electric',
    label: 'Electricals, Electronics'
  },
  {
    value: 'energy',
    label: 'Energy'
  },
  {
    value: 'finance',
    label: 'Finance and Accounting'
  },
  {
    value: 'government',
    label: 'Government'
  },
  {
    value: 'hospitality',
    label: 'Hospitality, Tourism, Travel'
  },
  {
    value: 'industrial',
    label: 'Industrial'
  },
  {
    value: 'it',
    label: 'IT and Software'
  },
  {
    value: 'legal',
    label: 'Legal'
  },
  {
    value: 'management',
    label: 'Management, Strategy'
  },
  {
    value: 'manufacturing',
    label: 'Manufacturing'
  },
  {
    value: 'medical',
    label: 'Medical, Healthcare'
  },
  {
    value: 'realestate',
    label: 'Property, Real Estate'
  },
  {
    value: 'retail',
    label: 'Retail'
  },
  {
    value: 'technology',
    label: 'Technology'
  },
  {
    value: 'telecom',
    label: 'Telecom'
  }
]

export const ResumeTypes = {
  ELEGANT_MODERN: 'elegantModern',
  EXPERIENCE: 'experience',
  MINIMAL_AND_CLEAN: 'minimalAndClean',
  SIMPLE_AND_CLEAN: 'simpleAndClean'
}

export const SkillCategories = {
  [ResumeTypes.EXPERIENCE]: [],
  [ResumeTypes.ELEGANT_MODERN]: [{
    id: 'proSkills',
    name: 'Professional skills'
  }, {
    id: 'perSkills',
    name: 'Personal skills'
  }, {
    id: 'languages',
    name: 'Languages'
  }],
  [ResumeTypes.SIMPLE_AND_CLEAN]: [{
    id: 'proSkills',
    name: 'Professional skills'
  }, {
    id: 'perSkills',
    name: 'Personal skills'
  }]
}