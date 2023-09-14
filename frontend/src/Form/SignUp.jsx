import Button from "./Button"
import Input from "./Input"

export default function SignUp() {
  return (
    <div>
        <Input
          type={'text'}
          name={'name'}
          placeholder={'Enter Your Name'}
          label={'Email Address'}
        />
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Enter Your Email Address'}
          label={'Email Address'}
        />
        <Input
          type={'password'}
          name={'password'}
          placeholder={'***********'}
          label={'Password'}
      />
        <Input
          type={'password'}
          name={'confirm-password'}
          placeholder={'***********'}
          label={'Confirm Password'}
      />
        <label htmlFor="picture" className="block mb-2">Upload Your Picture</label>
        <input type="file" name="picture" className="file-input file-input-bordered w-full max-w-xs" /> <br /><br />
      <Button>Sign Up</Button>
    </div>
  )
}
