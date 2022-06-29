import { useState } from "react";

interface CheckboxProps {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (newValue: boolean) => void;
}

const Checkbox = ({ value, defaultValue, onChange }: CheckboxProps) => {
  if (value !== undefined && typeof value !== "boolean")
    console.warn("Please check if the value in <Checkbox> is relevant or not.");
  if (defaultValue !== undefined && typeof defaultValue !== "boolean")
    console.warn("Please check if the defaultValue in <Checkbox> is relevant or not.");

  const isControlled = !!value;
  const hasDefaultValue = !!defaultValue;

  const [internallyChecked, setInternallyChecked] = useState<Boolean>(
    hasDefaultValue ? defaultValue : false
  );

  const checked = isControlled ? value : internallyChecked;

  const onClick = () => {
    if (onChange) {
      onChange(!checked);
    }
    if (!isControlled) {
      setInternallyChecked(!checked);
    }
  };

  return (
    <div
      onClick={onClick}
      className={checked ? "checkbox checked" : "checkbox"}
    >
      {checked && (
        <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.417 7.604l-.017.018-3.4-3.4 1.433-1.433 1.985 1.985L8.192 0l1.432 1.433-6.189 6.189-.018-.018z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
};

export const CheckboxInput= ({ value, defaultValue, onChange }: CheckboxProps) => {
  if (value !== undefined && typeof value !== "boolean")
    console.warn("Please check if the value in <Checkbox> is relevant or not.");
  if (defaultValue !== undefined && typeof defaultValue !== "boolean")
    console.warn(
      "Please check if the defaultValue in <Checkbox> is relevant or not."
    );

  const isControlled = !!value;
  const hasDefaultValue = !!defaultValue;

  const [internallyChecked, setInternallyChecked] = useState<boolean>(
    hasDefaultValue ? defaultValue : false
  );

  const checked = isControlled ? value : internallyChecked;

  const onClick = () => {
    if (onChange) {
      onChange(!checked);
    }
    if (!isControlled) {
      setInternallyChecked(!checked);
    }
  };

  return (
    <input type="checkbox" checked={checked} onChange={onClick} />
  );
};

export default Checkbox;
