import Button from './Button'
import Input from './Input'

export default function Login() {
  return (
      <div>
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Enter Your Email...'}
          label={'Email Address'}
        />
        <Input
          type={'password'}
          name={'password'}
          placeholder={'***********'}
          label={'Password'}
      />
     <Button>Login</Button>
    </div>
  )
}
