import styles from './style.module.scss';
import { parseJsonByString } from '../../../../../common/utils';

const schema = parseJsonByString(window.localStorage?.schema, {});
const banerSchema = schema?.children?.[0] || {};
console.log(banerSchema);

const Banner = () => {
  const title = banerSchema?.attributes?.title || '佳星的个人小站';
  const description = banerSchema?.attributes?.description || '前端小白的学习之路';
  return (
    <div className="wrapper">
      <div className={styles.banner}>
        <div className={styles.person}>
          <img className={styles.avatar} src='https://serverless-project-static-files-k.oss-cn-beijing.aliyuncs.com/images/avatar.jpg' alt="" />
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;