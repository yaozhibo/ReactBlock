import styles from './index.css';
import { Image } from 'semantic-ui-react';

const contact = () => {
  return (
    <div className={styles.contact}>
      <img src={require('@/assets/image/contact.jpg')} style={{ width: '100%' }} alt="" />
      <h2>关于我们</h2>
      <p>我们敬畏自然与生命，</p>
      <p>我们渴望自由，</p>
      <p>我们希望走向世界，</p>
      <p>我们期望了解宇宙的本源，</p>
      <p>我们追逐科技的创新，</p>
      <p>我们追随诗的情怀，</p>
      <p>我们脚踏实地，</p>
      <p>我们从不放弃梦想，</p>
      <p>我们不畏惧挑战，</p>
      <p>我们不忘初心。</p>

      <h2>联系我们</h2>
      <h3>微信：</h3>
      <Image src={require('@/assets/image/49164e5ef8f82bdf6621d23806da454.png')} width={150} />
      <h3>电话：</h3>
      <span>+86 15919025951</span>
    </div>
  );
};

export default contact;
