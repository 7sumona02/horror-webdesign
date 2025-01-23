import styles from './Hero.module.css'

const About = () => {
  return (
    <section className={styles.blog} id='about'>
        <h3>ABOUT CODEFEST (1.0)</h3>

        <div style={{ '--swiper-pagination-color': '#fff' }} className="swiper">
          <div className={styles.parallaxBg} data-swiper-parallax="-23%"></div>
          <div className="swiper-wrapper">
            {/* Repeat this structure for each activity */}
            {activities.map((activity, index) => (
              <div className="swiper-slide" key={index}>
                <div className={styles.content}>
                  <div className={styles.title} data-content={activity.title} data-swiper-parallax="-500">
                    {activity.title}
                  </div>
                  <div className={styles.text} data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
                    <p>{activity.description}</p>
                  </div>
                </div>
                <div className={styles.image} data-swiper-parallax="-200">
                  <img src={activity.image} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>

        <p>
          Join us for a scary night of Halloween! Ravenwood Manor, a historic and scary mansion, will
          open its doors for an unforgettable night of thrills and chills.
        </p>
        <button className={styles.btn}>
          <span>REGISTER NOW</span>
        </button>
      </section>
  )
}

// Sample activities data
const activities = [
    {
      title: "Ghastly Ghost Tours",
      description:
        "Explore the dark history of Ravenwood Manor with guided tours through its haunted halls. Who knows what you might encounter in the shadowy corners?",
      image:
        "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/943f5f64-3718-4d72-b4d0-d9f5a2b8af8e",
    },
    // Add other activities here...
  ];

export default About