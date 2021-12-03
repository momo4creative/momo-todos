import {} from "react";

export default function InputField({ children, label, ...props }) {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder={label}
        autoComplete="off"
        className="peer w-full border bg-transparent p-2 focus:outline-none"
      />
      <label
        htmlFor={props.name}
        className="absolute top-2 left-2  peer-focus:top-0"
      >
        {label}
      </label>
      <div className="text-sm text-red-500">{children}</div>
    </div>
  );
}

{
  /* <div className='`'>
      <input
        {...props}
        placeholder={label}
        autoComplete="off"
        className="w-full border bg-transparent p-2 focus:outline-none"
      />
      <label htmlFor={props.name}>{label}</label>
      <div className="text-sm text-red-500">{children}</div>
    </div> */
}
