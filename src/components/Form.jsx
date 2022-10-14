import style from './Form.module.css'

export const Form = () => {
  const count = 1
  const name = 'Please input new name'
  return <form className={style.form}>
    <p>Count: {count}</p>
    <p>{name}</p>
    <button type="button">click</button>
  </form>
}