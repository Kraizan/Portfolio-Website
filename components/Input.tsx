export default function Input(props: any) {
  return (
    <div className="flex items-center">
      <label
        htmlFor={props.name}
        className="w-1/4 ml-8 py-2 h-full text-2xl text-left"
      >
        {props.labelName}
      </label>
      <input
        type="text"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        required
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        className="ml-4 p-2 text-light-black h-full tracking-wide rounded-xl bg-beige--"
      />
    </div>
  );
}
