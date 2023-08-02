import type { ChangeEventHandler, FC } from 'react'
import styles from './styles.module.css'

interface TextFieldProps {
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const TextField: FC<TextFieldProps> = ({
  placeholder,
  value,
  onChange
}) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
