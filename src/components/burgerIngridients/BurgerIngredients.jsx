import React from "react";
import { Tab, Box } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingridient from "./../ingridient/Ingridient";
import data from "../../utils/data";
import styles from "./burgerIngredients.module.css";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one');

  return (
    <section className={styles.ingridients}>
      <h1 className={styles.title}>Соберите бургер</h1>

      {/*<div style={{ display: 'flex' }}>
      <Tab value='one' active={current === 'one'} onClick={setCurrent}>
        One
      </Tab>
      <Tab value='two' active={current === 'two'} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value='three' active={current === 'three'} onClick={setCurrent}>
        Three
      </Tab>
  </div>*/}

      <div className={styles.components}>
        {data.map((item) => (
          <React.Fragment key={item._id}>
            <Ingridient item={item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default BurgerIngredients;
