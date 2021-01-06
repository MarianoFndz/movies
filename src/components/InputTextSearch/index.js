import { InputText } from "./styles";

export default function InputTextSearch({ setSearch, search }) {
  const { text } = search;

  const handleChange = (e) => {
    setSearch({ ...search, text: e.target.value });
  };

  return (
    <InputText
      type="text"
      placeholder="Movie..."
      value={text}
      onChange={handleChange}
    />
  );
}
