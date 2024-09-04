import styles from "@/app/components/business-list/business-list.module.css";

interface BusinessListProps {
  businesses: {
    image: string;
    businessName: string | null;
    humanName: string;
    profileUrl: string;
  }[]
}

const BusinessListItem = (props: any) => {
  const { image, businessName, humanName, profileUrl } = props;
  return (
    <li className={styles.business}>
      <a className={styles['details-wrapper']} href={`/profile/${profileUrl}`}>
        {image && <img className={styles.image} src={image} alt={`Image for ${businessName}`} />}
        <div className={styles.details}>
          <p className={styles["human-name"]}>{humanName}</p>
          {businessName && <p className={styles["business-name"]}>{businessName}</p>}
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
              image={business.image}
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