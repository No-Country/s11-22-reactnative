import { Link } from '@react-navigation/native'
import { TextInput, Text, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import { useLogin } from '../hooks'

const LoginForm = () => {
  const { email, setEmail, password, setPassword, login } = useLogin()

  return (
    <>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        className="w-full h-11 rounded-lg bg-[#eee] px-3"
        style={{ marginTop: normalize(22, 'height') }}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        className="w-full h-11 rounded-lg bg-[#eee] px-3"
        style={{ marginTop: normalize(22, 'height') }}
        value={password}
        onChangeText={setPassword}
      />
      <Link
        to="/LoginScreen"
        className="text-black font-light leading-5 tracking-tight"
        style={{
          marginTop: normalize(11, 'height'),
          fontSize: normalize(14),
          textAlign: 'right',
        }}
      >
        Forgot password?
      </Link>
      <TouchableOpacity
        style={{ marginTop: normalize(44, 'height'), height: normalize(44) }}
        className="w-full rounded-lg bg-[#B4B4B4] flex items-center justify-center"
        onPress={login}
      >
        <Text
          className="text-black font-normal leading-5 tracking-tight"
          style={{ fontSize: normalize(20) }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default LoginForm
