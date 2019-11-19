import React from 'react'
import './form-skills.scss'
import { FormBlueprint } from './form-blueprint'
import { FormInput } from '../form-input/form-input'
import { Button } from '../button/button'
import { SkillCategories } from 'common/static-data'

const FormID = 'skills'

const FormInstance = ({ idx, data, addSkill, handleInputChange, categoryName, categoryId }) => {
  return (
    <div className='set'>
      {categoryName && <div className='category-name'>{categoryName}</div>}
      {data.map((n, idx) => (
        <FormInput key={idx} label={n.name} inlineLabel type='range' min='1' max='100' value='50' handleChange={() => {}} />
      ))}
      <Button type='add' text='Add a skill' onClick={() => addSkill(categoryId)} />
    </div>
  )
}

export function FormSkills({ title, data, resumeType, addSkill, handleInputChange }) {
  const renderFormInstances = () => {
    if (SkillCategories[resumeType].length === 0) {
      return <FormInstance data={data} addSkill={addSkill} handleInputChange={handleInputChange} />
    } else {
      return data.map((n, idx) => (
        <FormInstance key={n.id} categoryName={'skills' in n ? n.name : ''} categoryId={n.id} data={'skills' in n ? n.skills : data} key={idx} addSkill={addSkill} handleInputChange={handleInputChange} />
      ))
    }
  }

  return (
    <FormBlueprint title={title} className='form-skills'>
      <div className='sets'>
        {resumeType && renderFormInstances()}
      </div>
    </FormBlueprint>
  )
}
