export default function Name(props: any) {
  const word = props.word;
  return (
    <div className="flex justify-center mt-4">
      {word.map((letter: String) => (
        <div
          key={word.indexOf(letter)}
          className="text-beige font-bold text-5xl bounce hover:text-yellow tracking-widest"
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
