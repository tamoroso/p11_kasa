import React, { useState } from "react";
import { ReactComponent as CaretDown } from "../../assets/icons/caret_down.svg";
import styles from "./Dropdown.module.css";

const Dropdown = ({ dropdownData }) => {
  const { label, content } = dropdownData;
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.dropdown_wrapper}>
      <button onClick={handleOpenDropdown}>
        {label}
        <CaretDown className={open ? styles.dropdown_open : undefined} />
      </button>
      {open ? (
        <div>
          {typeof content === "function" ? content() : <p>{content}</p>}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
