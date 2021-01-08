//Styled components
import { Input } from "./styles";

export default function InputText({ setSearch, search, handleKeyPress }) {
  const { text } = search;

  const handleChange = (e) => {
    setSearch({ ...search, text: e.target.value });
  };

  return (
    <Input
      type="text"
      placeholder="Movie..."
      value={text}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
}
