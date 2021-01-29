import React, { useContext } from 'react'
import { FormContext } from '@/presentation/contexts'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = (props: Props) => {
  const { state } = useContext(FormContext)

  return (
    <button
      data-testid="submit"
      type="submit"
      disabled={state.isFormInvalid}
    >
      {props.text}
    </button>
  )
}

export default SubmitButton
