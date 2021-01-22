import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = (props: Props) => {
  const { state } = useContext(Context)

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
