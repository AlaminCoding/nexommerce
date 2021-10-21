import Category from "components/block/category";
import Slider from "components/block/slider";
import { useSelector, useDispatch } from "react-redux";
import { openCategory } from "store/categoryHandle";
import { AiOutlineMenuFold } from "react-icons/ai";
import styles from "styles/banner.module.scss";
const Banner = () => {
  const openList = useSelector((state) => state.openCategory.value);
  const dispatch = useDispatch();
  return (
    <section className={styles.banner}>
      <AiOutlineMenuFold
        className={styles.toggle_category}
        onClick={() => dispatch(openCategory())}
      />
      <Category />
      <Slider />
    </section>
  );
};

export default Banner;
