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
      {photo && <img className={styles.photo} src={photo} />}
      <p className={styles["business-name"]}>{businessName}</p>
      <p>{humanName}</p>
      <a href={`/profile/${profileUrl}`}>(&gt;)</a>
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