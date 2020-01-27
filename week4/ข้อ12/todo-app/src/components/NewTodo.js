import React from "react";

import styles from "./NewTodo.module.css";

function NewTodo(props) {
  const { onAdd, onValue, value, onKey } = props;
  return (
    <div className={styles.Root}>
      <input
        className={styles.Input}
        type="text"
        placeholder="Enter Todo"
        onChange={onValue}
        value={value}
        onKeyDown={onKey}
      />
      <div className={styles.Button} onClick={onAdd}>
        ADD
      </div>
    </div>
  );
}

export default NewTodo;
