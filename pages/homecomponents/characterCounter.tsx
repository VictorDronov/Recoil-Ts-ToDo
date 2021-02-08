import {
  atom,
  useRecoilState,
  selector,
  useRecoilValue,
} from "recoil";

const CharacterState = atom({
  key: "characterState",
  default: "",
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const chars = get(CharacterState);
    return chars.length;
  },
});

const CharCounter: React.FC<{}> = () => {
  const [char, setChar] = useRecoilState(CharacterState);
  const charCount = useRecoilValue(charCountState);
  return (
    <h2>
      <span>Word Count: {charCount}</span>
      <input
        type="text"
        value={char}
        onChange={(e) => setChar(e.target.value)}
      />
    </h2>
  );
};
export default CharCounter;
