import React from "react";

import styles from "./Todo.module.css";

function Todo(props) {
  const { ticked, name, onTick, onDelete } = props; //ถ้าเขียนตรงนี้ไม่ต้องเติม props.
  return (
    <div className={styles.Root}>
      <span
        className={styles.Tick}
        style={{ backgroundColor: ticked ? "#a8d097" : undefined }}
        onClick={onTick}
      ></span>
      <div className={styles.Text} onClick={onTick}
      style={{textDecoration:ticked?"line-through":undefined}}>{name}</div>
      <span className={styles.Delete} onClick={onDelete}>
        x
      </span>
    </div>
  );
}

Todo.defaultProps = {
  ticked: false,
  name: "pizza"
};

export default Todo;
