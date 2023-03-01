import React from "react";
import {
  Counter,
  CurrencyIcon,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingridient.module.css";

const Ingridient = ({ item }) => {
  return (
    <div className={styles.ingridient}>
      {item.__v > 0 && <Counter count={item.__v} size="default" />}
      <img src={item.image} alt={item.name} className={styles.image} />
      <div>
        <p className="text text_type_main-medium">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{item.name}</p>
    </div>
  );
};

export default Ingridient;
