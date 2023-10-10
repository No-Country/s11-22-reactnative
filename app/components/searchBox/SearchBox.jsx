import { TextInput } from 'react-native'
import normalize from 'react-native-normalize'

const SearchBox = ({ width }) => {
  return (
    <TextInput
      className="px-3 h-11 rounded-lg bg-[#D9D9D9] text-black font-light leading-5 tracking-tight"
      placeholder="Search"
      placeholderTextColor="#000"
      keyboardType="web-search"
      style={{ fontSize: normalize(16), width: normalize(width) }}
    />
  )
}

export default SearchBox
