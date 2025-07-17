import SideBar from '../global/components/Sidebar';
import styles from './AppLayout.module.css';

const AppLayout = () => {
  return (
    <>
      <div className={styles.app_layout}>
        <SideBar></SideBar>
        <main>
          {/*A futuro agregamos el Outlet*/}
          <p>Miramos esto mientras hacemos magia</p>
        </main>
      </div>
    </>
  );
};

export default AppLayout;
