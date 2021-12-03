import {} from "react";

export default function InputField({ children, label, ...props }) {
  // console.log(props);
  return (
    <div className="relative">
      <input
        {...props}
        id={props.name}
        placeholder={label}
        autoComplete="off"
        className={`peer w-full  pt-4 px-4 text-xl border-b ${
          props.error ? "border-red-500" : "border-gray-700"
        } bg-black rounded-md bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500`}
      />
      <label
        htmlFor={props.name}
        className="absolute top-0 left-2 text-blue-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:text-sm"
      >
        {label}
      </label>
      <div className="absolute text-sm text-red-500 mx-4">{children}</div>
    </div>
  );
}
