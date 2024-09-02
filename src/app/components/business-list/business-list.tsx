import styles from "@/app/components/business-list/business-list.module.css";
import { profile } from "console";

interface BusinessListProps {
  businesses: {
    photo?: string;
    businessName: string;
    humanName: string;
    profileUrl: string;
  }[]
}

const BusinessListItem = (props: any) => {
  const { photo, businessName, humanName, profileUrl } = props;
  return (
    <li className={styles.business}>
      <a className={styles['details-wrapper']} href={`/profile/${profileUrl}`}>
        {photo && <img className={styles.photo} src={photo} />}
        <div className={styles.details}>
          <p className={styles["human-name"]}>{humanName}</p>
          <p className={styles["business-name"]}>{businessName}</p>
        </div>
        <div className={styles.arrow}></div>
      </a>
    </li>
  )
}

const BusinessList = (props: BusinessListProps) => {
  const { businesses } = props;
  return (
    <ul className={styles.businesses}>
      {
        businesses.map(
          (business) =>
            <BusinessListItem
              key={business.businessName}
              photo={business.photo}
              businessName={business.businessName}
              humanName={business.humanName}
              profileUrl={business.profileUrl}
            />
        )
      }
    </ul >
  )
};

export default BusinessList;