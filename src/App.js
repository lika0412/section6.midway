import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecoundryButton } from "./components/atoms/button/SecoundryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecoundryButton>search</SecoundryButton>
      <br />
      <SearchInput />
    </div>
  );
}
